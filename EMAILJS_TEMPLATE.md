# EmailJS Template Configuration

## Template Variables

When creating your EmailJS template, use these template variables:

### Email Template HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Message - GL-B GROUP SARL</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    
    <p>You have received a new message from your website contact form:</p>
    
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <td><strong>Name:</strong></td>
            <td>{{from_name}}</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>{{from_email}}</td>
        </tr>
        <tr>
            <td><strong>Phone:</strong></td>
            <td>{{phone}}</td>
        </tr>
        <tr>
            <td><strong>Company:</strong></td>
            <td>{{company}}</td>
        </tr>
        <tr>
            <td><strong>Subject:</strong></td>
            <td>{{subject}}</td>
        </tr>
    </table>
    
    <h3>Message:</h3>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        {{message}}
    </div>
    
    <hr>
    <p><em>This message was sent from the GL-B GROUP SARL website contact form.</em></p>
    <p><em>Reply to: {{from_email}}</em></p>
</body>
</html>
```

### Email Template Subject:
```
New Contact Form Message: {{subject}}
```

## Template Settings in EmailJS:

1. **Template Name:** GL-B GROUP Contact Form
2. **From Name:** GL-B GROUP Website
3. **From Email:** Use your verified email address
4. **To Email:** glbgroup10@gmail.com
5. **Reply To:** {{from_email}}

## Auto-Reply Template (Optional)

You can also create an auto-reply template to confirm message receipt:

### Auto-Reply HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Thank you for contacting GL-B GROUP SARL</title>
</head>
<body>
    <h2>Thank you for your message, {{from_name}}!</h2>
    
    <p>We have received your message and will get back to you as soon as possible.</p>
    
    <h3>Your message details:</h3>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        {{message}}
    </div>
    
    <hr>
    <p>Best regards,<br>
    GL-B GROUP SARL Team<br>
    Email: glbgroup10@gmail.com<br>
    Phone: +22375450086</p>
</body>
</html>
```

### Auto-Reply Subject:
```
Thank you for contacting GL-B GROUP SARL - We received your message
```

## Template Variables Reference:

- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{phone}}` - Contact person's phone (optional)
- `{{company}}` - Contact person's company (optional)
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name (GL-B GROUP SARL)
- `{{to_email}}` - Recipient email (glbgroup10@gmail.com)
- `{{reply_to}}` - Reply-to email address