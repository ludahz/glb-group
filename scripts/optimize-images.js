#!/usr/bin/env node
/*
  Optimize large images in public/images by recompressing originals.
  - JPEG: mozjpeg ~78 quality
  - PNG: palette quantization ~80 quality, compressionLevel 9
  Skip files smaller than 150 KB to save time.
*/
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const SIZE_THRESHOLD = 150 * 1024; // 150 KB

async function* walk(dir) {
  for await (const d of await fsp.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) {
      yield* walk(entry);
    } else if (d.isFile()) {
      yield entry;
    }
  }
}

function isOptimizable(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false;
  // avoid logos to keep pixel-perfect edges
  if (file.includes(path.join('images', 'logo'))) return false;
  return true;
}

async function optimizeFile(file) {
  const stat = await fsp.stat(file);
  if (stat.size < SIZE_THRESHOLD) {
    return { file, skipped: true, reason: 'small' };
  }

  const ext = path.extname(file).toLowerCase();
  const tmp = file + '.tmp';
  try {
    const input = sharp(file, { failOn: 'none' });
    if (ext === '.jpg' || ext === '.jpeg') {
      await input.jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
    } else if (ext === '.png') {
      await input.png({ compressionLevel: 9, palette: true, quality: 80 }).toFile(tmp);
    }
    const outStat = await fsp.stat(tmp);
    if (outStat.size < stat.size) {
      await fsp.rename(tmp, file);
      return { file, before: stat.size, after: outStat.size, saved: stat.size - outStat.size };
    } else {
      await fsp.unlink(tmp);
      return { file, skipped: true, reason: 'no-better' };
    }
  } catch (err) {
    try { if (fs.existsSync(tmp)) fs.unlinkSync(tmp); } catch {}
    return { file, error: err.message };
  }
}

(async () => {
  console.log(`Optimizing images in: ${IMAGES_DIR}`);
  let totalSaved = 0;
  let optimized = 0;
  let skipped = 0;
  for await (const file of walk(IMAGES_DIR)) {
    if (!isOptimizable(file)) continue;
    const res = await optimizeFile(file);
    if (res.error) {
      console.warn('Failed:', path.relative(ROOT, file), '-', res.error);
      continue;
    }
    if (res.skipped) {
      skipped++;
      continue;
    }
    optimized++;
    totalSaved += res.saved;
    console.log(`Optimized: ${path.relative(ROOT, file)} \t ${(res.before/1024).toFixed(1)}KB -> ${(res.after/1024).toFixed(1)}KB`);
  }
  console.log(`Done. Optimized: ${optimized}, Skipped: ${skipped}, Saved: ${(totalSaved/1024).toFixed(1)} KB`);
})();
