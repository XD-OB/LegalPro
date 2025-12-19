# CEO Image Configuration Guide

This guide explains how to set up the CEO/Founder image on your legal services website.

## Quick Setup

### Step 1: Prepare Your Image

1. **Choose a professional portrait photo** of your CEO/Founder
2. **Recommended specifications:**
   - Aspect ratio: 3:4 (portrait orientation)
   - Minimum resolution: 600x800 pixels
   - Recommended resolution: 900x1200 pixels or higher
   - File format: `.jpg`, `.png`, or `.webp`
   - File size: Keep under 500KB for optimal performance

3. **Image guidelines:**
   - Professional business attire
   - Clean, neutral background (or can be removed/blurred)
   - Good lighting with face clearly visible
   - Subject positioned in center of frame
   - Confident, approachable expression

### Step 2: Add Your Image to the Project

1. Create the CEO images directory (if it doesn't exist):
   ```
   public/images/ceo/
   ```

2. Place your CEO image in this directory. For example:
   ```
   public/images/ceo/founder.jpg
   ```

### Step 3: Configure the Image Path

1. Open the CEO component file:
   ```
   components/CEO.tsx
   ```

2. Find the configuration section at the top of the file (around lines 8-21):
   ```typescript
   // ============================================
   // CEO IMAGE CONFIGURATION
   // ============================================
   const CEO_IMAGE_PATH = "/images/ceo/founder.jpg";
   const USE_REAL_IMAGE = false;
   // ============================================
   ```

3. Update `CEO_IMAGE_PATH` to match your image filename:
   ```typescript
   const CEO_IMAGE_PATH = "/images/ceo/your-image-name.jpg";
   ```

4. Set `USE_REAL_IMAGE` to `true` to display your image:
   ```typescript
   const USE_REAL_IMAGE = true;
   ```

### Step 4: Test Your Changes

1. Start or restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Founder section on your website

3. Verify that your CEO image displays correctly:
   - Image loads without errors
   - Aspect ratio looks correct (not stretched)
   - Image quality is sharp and professional
   - Image is responsive on mobile devices

## Image Optimization Tips

### Compress Your Image

Before uploading, compress your image to improve page load speed:
- Use online tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target file size: 100-300KB for best balance of quality and performance
- Maintain at least 600x800 resolution

### Use Modern Formats

For best performance, consider using WebP format:
- WebP provides better compression than JPEG/PNG
- All modern browsers support WebP
- You can convert your image at [Squoosh](https://squoosh.app/)
- Example: `CEO_IMAGE_PATH = "/images/ceo/founder.webp"`

### Multiple Image Sizes (Advanced)

For optimal performance across devices, you can provide multiple image sizes:

1. Create optimized versions:
   - `founder-small.jpg` (400x533 for mobile)
   - `founder-medium.jpg` (600x800 for tablet)
   - `founder-large.jpg` (900x1200 for desktop)

2. Update the Image component with srcSet (requires code modification)

## Troubleshooting

### Image Not Displaying

**Problem:** Placeholder still shows after setting `USE_REAL_IMAGE = true`

**Solutions:**
1. Verify the image file exists in `public/images/ceo/`
2. Check that the filename in `CEO_IMAGE_PATH` matches exactly (including file extension)
3. Ensure the path starts with `/images/` not `public/images/`
4. Restart your development server after making changes
5. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

### Image Looks Stretched or Distorted

**Problem:** Image doesn't maintain proper aspect ratio

**Solutions:**
1. Use an image with 3:4 aspect ratio (portrait)
2. If your image has a different ratio, crop it to 3:4 before uploading
3. Use photo editing software or online tools to crop to the correct ratio

### Image File Size Too Large

**Problem:** Image file is over 1MB, slowing down page load

**Solutions:**
1. Compress the image using TinyPNG or Squoosh
2. Reduce image dimensions to 900x1200 or smaller
3. Convert to WebP format for better compression
4. Reduce JPEG quality to 80-85% (usually sufficient for web)

### Image Loads Slowly

**Problem:** Image takes too long to appear on page

**Solutions:**
1. Compress the image file (see above)
2. Ensure image dimensions aren't excessive (max 1200x1600)
3. Use WebP format instead of PNG
4. The component already has `priority` loading enabled for faster initial page load

## Configuration Options

### Available Constants

```typescript
// Image path (relative to /public directory)
const CEO_IMAGE_PATH = "/images/ceo/founder.jpg";

// Toggle between real image and placeholder
const USE_REAL_IMAGE = false;  // false = show placeholder, true = show real image
```

### Why Use a Constant?

Using a constant makes it easy to:
- Quickly switch between placeholder and real image during development
- Change the image path without digging through JSX code
- Maintain consistency across the application
- Document the image requirements clearly

## Image Examples

### Good Examples

✅ Professional headshot with neutral background
✅ Business formal or business casual attire
✅ Warm, confident expression
✅ Good lighting with no harsh shadows
✅ Sharp focus on face
✅ 3:4 aspect ratio (portrait)

### Examples to Avoid

❌ Casual snapshots or vacation photos
❌ Group photos (should be solo portrait)
❌ Low resolution or blurry images
❌ Harsh lighting or dark shadows on face
❌ Distracting backgrounds
❌ Wide landscape orientation

## Need Help?

If you encounter issues not covered in this guide:

1. Check that your Next.js development server is running
2. Review the browser console for error messages
3. Verify file paths and extensions are correct
4. Ensure the image file is not corrupted (can you open it normally?)
5. Refer to [Next.js Image documentation](https://nextjs.org/docs/api-reference/next/image)

## Additional Configuration

### Update CEO Information

To update the CEO's name, title, and bio, edit the translations file:
```
locales/translations.json
```

Look for the `ceo` section in each language (en, fr, ar):
```json
"ceo": {
  "title": "Meet Our Founder",
  "name": "John Doe",
  "position": "Founder & CEO",
  "bio": "Your CEO bio here...",
  "stats": [...]
}
```

### Change Placeholder Initials

If you want to change the placeholder initials (currently "JD"):

1. Open `components/CEO.tsx`
2. Find line ~56 with: `<span className="text-5xl font-bold text-white">JD</span>`
3. Replace "JD" with your desired initials
