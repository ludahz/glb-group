This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Node.js version

This project targets Node 22+. If you use nvm:

```sh
nvm use
```

The repo contains `.nvmrc` and `.node-version` set to 22, and `package.json` engines is `>=22.0.0`.

### Adding the new product images (sanitary pads, diapers, foods)

We added a new product category and two food items:

- Hygiene & Baby Care (new category)
	- Sanitary Pads → `public/images/product/maman-africa-sanitary-pads.jpg`
	- L'enfant noir Baby Diapers → `public/images/product/lenfant-noir-diapers.jpg`
- Food Items (existing category)
	- Tomato Paste → `public/images/product/maman-africa-tomato-paste.jpg`
	- Chicken Luncheon Meat → `public/images/product/chicken-luncheon-meat.jpg`

Drop the image files with those exact filenames into the paths above. After adding them, optionally compress them with:

```sh
npm run optimize:images
```

These products show up:

- Home → Products section tabs (preview of 3 per category; Hygiene shows up with its 2 items)
- /products and /products-new pages
- /products/hygiene dynamic route (view all Hygiene & Baby Care)
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
