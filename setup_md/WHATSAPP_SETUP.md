# WhatsApp Button Configuration Guide

This guide explains how to configure the WhatsApp floating button that appears on your legal services website.

## Overview

The WhatsApp button is a floating action button (FAB) that appears in the bottom-right corner of the website. When clicked, it opens a WhatsApp chat with your business number, optionally with a pre-filled message.

## Configuration

### Step 1: Set Up Environment Variables

1. Copy the example environment file to create your local configuration:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` in your text editor and configure the following variables:

#### Required Variables

**`NEXT_PUBLIC_WHATSAPP_PHONE`**
- Your WhatsApp business phone number in international format
- Format: Country code + number (no spaces, no + sign, no dashes)
- Example: `15551234567` for a US number `+1 (555) 123-4567`

#### Optional Variables

**`NEXT_PUBLIC_WHATSAPP_MESSAGE`**
- A pre-filled message that appears in the WhatsApp chat when users click the button
- Leave empty (`""`) for no pre-filled message
- Example: `Hello! I would like to inquire about your legal services.`

### Step 2: Example Configuration

```env
# .env.local
NEXT_PUBLIC_WHATSAPP_PHONE=15551234567
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello! I would like to inquire about your legal services.
```

### Step 3: International Phone Number Formats

Here are examples of how to format phone numbers from different countries:

| Country       | Original Number    | Format for .env.local |
|---------------|--------------------|-----------------------|
| United States | +1 (555) 123-4567  | `15551234567`         |
| United Kingdom| +44 20 7123 4567   | `442071234567`        |
| France        | +33 1 23 45 67 89  | `33123456789`         |
| Egypt         | +20 2 1234 5678    | 20212345678          |
| UAE           | +971 4 123 4567    | `97141234567`         |
| Saudi Arabia  | +966 11 123 4567   | `966111234567`        |

**Important:** Always remove:
- The `+` sign at the beginning
- All spaces
- All parentheses `()`
- All dashes `-`

### Step 4: Restart Development Server

After updating your `.env.local` file, restart your development server:

```bash
npm run dev
```

For production builds, rebuild your application:

```bash
npm run build
npm start
```

## How It Works

The WhatsApp button component ([components/WhatsAppButton.tsx](components/WhatsAppButton.tsx)) reads the environment variables and constructs the appropriate WhatsApp URL:

- **Without message:** `https://wa.me/PHONE_NUMBER`
- **With message:** `https://wa.me/PHONE_NUMBER?text=YOUR_MESSAGE`

The message is automatically URL-encoded to handle special characters, spaces, and multilingual text.

## Troubleshooting

### Button Opens WhatsApp But Shows Wrong Number
- Check that `NEXT_PUBLIC_WHATSAPP_PHONE` is set correctly in `.env.local`
- Verify there are no spaces or special characters in the phone number
- Make sure you've restarted the development server after changes

### Pre-filled Message Not Appearing
- Verify `NEXT_PUBLIC_WHATSAPP_MESSAGE` is set in `.env.local`
- Check that the message doesn't contain invalid characters
- Restart the development server

### Button Not Appearing at All
- The button should appear as a green floating circle in the bottom-right corner
- Check browser console for any JavaScript errors
- Verify that [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx) is imported in [app/page.tsx](app/page.tsx)

## Customization

### Changing Button Position
Edit [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx:15) and modify the CSS classes:

```tsx
className="fixed bottom-8 right-8 z-50 ..."
```

- `bottom-8` controls distance from bottom (32px)
- `right-8` controls distance from right (32px)
- Adjust these values to reposition the button

### Changing Button Colors
The button uses Tailwind CSS classes:
- `bg-green-500` - background color
- `hover:bg-green-600` - hover state color

Edit these classes in [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx:15) to use different colors.

### Changing Animation
The button has three animations:
1. Initial scale animation when page loads
2. Pulse effect (repeating scale animation)
3. Hover effect (scales up to 1.1x)

Modify these in [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx:11-14, 27-31).

## Security Notes

- The `.env.local` file is automatically excluded from Git (in `.gitignore`)
- Never commit your actual phone number to version control
- Use `.env.local.example` to show the format without exposing real data
- The `NEXT_PUBLIC_` prefix means these variables are exposed to the browser (this is safe for phone numbers that will be publicly visible anyway)

## Support

For technical support with the WhatsApp button:
1. Check this documentation first
2. Verify your environment variables are set correctly
3. Check browser console for errors
4. Review the component code in [components/WhatsAppButton.tsx](components/WhatsAppButton.tsx)
