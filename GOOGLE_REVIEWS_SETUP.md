# Google Reviews Integration Setup Guide

This guide explains how to integrate Google Reviews into your legal services website to automatically display real client reviews from your Google Business Profile.

## Overview

The testimonials section can display either:
1. **Local reviews** from your translations file (default)
2. **Live Google Reviews** from your Google Business Profile (requires API setup)

## Benefits of Using Google Reviews

- ✅ **Automatic updates** - Reviews sync automatically from Google
- ✅ **Real client feedback** - Shows authentic reviews from your Google Business Profile
- ✅ **Increased credibility** - Displays actual star ratings and profile photos
- ✅ **SEO benefits** - Real reviews can improve search rankings
- ✅ **Time-saving** - No manual updating of testimonials needed

## Prerequisites

Before you begin, you'll need:
1. A Google Business Profile (formerly Google My Business)
2. A Google Cloud Console account
3. About 15-20 minutes for setup

## Step-by-Step Setup

### Step 1: Get Your Google Places API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing)
   - Click the project dropdown at the top
   - Click "New Project"
   - Name it (e.g., "Legal Services Website")
   - Click "Create"

3. **Enable Places API**
   - In the sidebar, go to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click on "Places API"
   - Click "Enable"

4. **Create API Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - **Important**: Immediately click "Restrict Key" for security

5. **Restrict Your API Key** (Security Best Practice)
   - Under "API restrictions":
     - Select "Restrict key"
     - Choose "Places API" from the list
   - Under "Application restrictions":
     - Select "HTTP referrers (web sites)"
     - Add your website domain (e.g., `yourdomain.com/*`)
   - Click "Save"

6. **Copy Your API Key**
   - Copy the API key shown (you'll need it in Step 3)

### Step 2: Find Your Google Place ID

Your Place ID is a unique identifier for your business location.

**Method 1: Using Place ID Finder** (Easiest)
1. Go to: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Click "Place ID Finder" tool
3. Search for your business name or address
4. Your Place ID will be shown (format: `ChIJ...`)
5. Copy this ID

**Method 2: Using Google Maps**
1. Go to Google Maps
2. Search for your business
3. Click on your business listing
4. Look at the URL - the Place ID is in the URL after `!1s`
5. Example URL: `google.com/maps/place/.../@...!1s**ChIJ...**`

**Method 3: Using Your Business Coordinates**
1. Find your business latitude and longitude
   - Go to Google Maps
   - Right-click on your business location
   - Click the coordinates to copy them
   - Format: `40.7128, -74.0060`

2. Use the API to find Place ID:
   ```
   https://maps.googleapis.com/maps/api/geocode/json?latlng=YOUR_LAT,YOUR_LNG&key=YOUR_API_KEY
   ```
   - Replace `YOUR_LAT,YOUR_LNG` with your coordinates
   - Replace `YOUR_API_KEY` with your API key from Step 1
   - Open this URL in your browser
   - Find `place_id` in the JSON response

### Step 3: Configure Your Website

1. **Update Environment Variables**

   Open `.env.local` and add:
   ```env
   NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
   NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
   ```

   Also update `.env.local.example` for documentation:
   ```env
   # Google Reviews Integration
   NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIza...
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...
   ```

2. **Update Business Location**

   Open `components/Testimonials.tsx` and find the configuration section (lines 17-23):
   ```typescript
   const BUSINESS_LOCATION = {
     name: "Your Law Firm Name",
     address: "Your full business address",
     latitude: 40.7128,  // Your actual latitude
     longitude: -74.0060, // Your actual longitude
   };
   ```

   Update with your actual business information.

3. **Enable Google Reviews**

   In the same file, change:
   ```typescript
   const USE_GOOGLE_REVIEWS = false;
   ```

   To:
   ```typescript
   const USE_GOOGLE_REVIEWS = true;
   ```

4. **Restart Your Development Server**
   ```bash
   npm run dev
   ```

### Step 4: Verify It's Working

1. Visit your website and scroll to the testimonials section
2. You should see:
   - Reviews loading from Google
   - Real star ratings
   - Client names and profile photos (if available)
   - Review dates

3. Check browser console (F12) for any errors

## Finding Your Business Coordinates

### Method 1: Google Maps
1. Go to https://www.google.com/maps
2. Search for your business
3. Right-click on your business location marker
4. Click the coordinates at the top to copy them
5. Format: First number is latitude, second is longitude

### Method 2: Address to Coordinates
Use a geocoding service:
- Visit: https://www.latlong.net/
- Enter your business address
- Copy the latitude and longitude

### Method 3: From Your Google Business Profile
1. Log into Google Business Profile
2. Go to your business location
3. The coordinates may be visible in your business details

## Troubleshooting

### Reviews Not Showing

**Problem**: Website shows loading spinner or falls back to local testimonials

**Solutions**:
1. **Verify API Key**:
   - Check that `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` is correctly set in `.env.local`
   - Ensure there are no extra spaces or quotes
   - Key should start with `AIza`

2. **Verify Place ID**:
   - Check that `NEXT_PUBLIC_GOOGLE_PLACE_ID` is correctly set
   - Place ID should start with `ChIJ`
   - Try finding your Place ID again using Method 1 from Step 2

3. **Check API Restrictions**:
   - Go to Google Cloud Console → APIs & Services → Credentials
   - Click on your API key
   - Verify Places API is enabled under "API restrictions"
   - Check that your domain is allowed under "Application restrictions"

4. **Check Browser Console**:
   - Open browser developer tools (F12)
   - Look for error messages in the Console tab
   - Common errors:
     - `REQUEST_DENIED`: API key restriction issue
     - `INVALID_REQUEST`: Wrong Place ID format
     - `OVER_QUERY_LIMIT`: Exceeded free tier quota

### API Key Not Working

**Problem**: Getting "REQUEST_DENIED" error

**Solutions**:
1. Make sure Places API is enabled in Google Cloud Console
2. Check API key restrictions aren't blocking your website
3. Wait a few minutes after creating the key (can take time to activate)
4. Try creating a new unrestricted key for testing (remember to restrict it later)

### No Reviews Available

**Problem**: API works but no reviews display

**Solutions**:
1. **Check if your business has reviews**:
   - Search for your business on Google Maps
   - Verify there are actual reviews posted
   - You need at least one review for the API to return data

2. **Review permissions**:
   - Ensure reviews are set to public in your Google Business Profile
   - Check that reviews aren't hidden or filtered

3. **Review minimum rating**:
   - By default, all reviews are fetched
   - You can filter by minimum rating in the code if needed

### Wrong Business Showing

**Problem**: Reviews are from a different business

**Solutions**:
1. **Verify Place ID**:
   - Double-check your Place ID is correct
   - Use the Place ID Finder tool to confirm
   - Make sure you copied the entire Place ID

2. **Check coordinates**:
   - Verify latitude and longitude are for your actual business
   - Ensure latitude and longitude aren't swapped (latitude is first)

### API Costs and Quotas

**Problem**: Concerned about API costs

**Information**:
- **Google Places API Pricing** (as of 2025):
  - Place Details requests: $17 per 1,000 requests
  - First $200/month is FREE (includes ~11,700 requests)
  - Typical website usage: 10-50 requests per day

- **Free tier is usually sufficient** for most small to medium websites

- **Caching is enabled**:
  - Reviews are cached for 1 hour
  - Significantly reduces API calls
  - One visitor triggers one request, cached for all visitors for 1 hour

- **To monitor usage**:
  - Go to Google Cloud Console
  - Navigate to "APIs & Services" → "Dashboard"
  - Click on "Places API" to see usage statistics

### Reviews Not Updating

**Problem**: New Google reviews don't appear on website

**Solution**:
- Reviews are cached for 1 hour for performance
- Wait up to 1 hour for new reviews to appear
- Or clear your browser cache and hard refresh (Ctrl+F5)
- Or rebuild your website: `npm run build && npm run start`

## Configuration Options

### Customize Review Display

Edit `components/Testimonials.tsx` to customize:

**Review Text Length**:
```typescript
const truncateText = (text: string, maxLength: number = 150)
```
Change `150` to your preferred character limit.

**Number of Reviews Displayed**:
The API returns the 5 most recent reviews by default. To change this, you'll need to modify the API call to use the `reviews_count` parameter.

**Filter by Rating**:
```typescript
const googleReviews = data.result.reviews
  .filter((review: any) => review.rating >= 4) // Only 4-5 star reviews
  .map((review: any) => ({
    // ... mapping code
  }));
```

### Fallback Behavior

The component automatically falls back to local testimonials if:
- Google Reviews is disabled (`USE_GOOGLE_REVIEWS = false`)
- API key or Place ID is missing
- API request fails
- No reviews are available

## Security Best Practices

### API Key Security

✅ **DO**:
- Use environment variables for API keys
- Restrict API key to specific APIs (Places API only)
- Restrict API key to your domain
- Keep `.env.local` in `.gitignore`
- Use different API keys for development and production

❌ **DON'T**:
- Commit API keys to version control
- Share API keys publicly
- Use the same API key for multiple projects
- Leave API keys unrestricted

### Rate Limiting

To avoid excessive API usage:
- Reviews are cached for 1 hour (already implemented)
- Consider implementing request throttling for high-traffic sites
- Monitor your Google Cloud Console for unusual usage patterns

## Switching Between Local and Google Reviews

You can easily switch between local testimonials and Google Reviews:

**Use Local Testimonials** (Default):
```typescript
const USE_GOOGLE_REVIEWS = false;
```

**Use Google Reviews**:
```typescript
const USE_GOOGLE_REVIEWS = true;
```

Local testimonials are defined in `locales/translations.json` under the `testimonials` section.

## Updating Local Testimonials

If you want to manually manage testimonials without Google Reviews:

1. Open `locales/translations.json`
2. Find the `testimonials` section for each language (en, fr, ar)
3. Update the `items` array:

```json
"testimonials": {
  "title": "What Our Clients Say",
  "subtitle": "Real experiences from businesses we've helped succeed",
  "items": [
    {
      "name": "Client Name",
      "position": "Job Title, Company Name",
      "text": "Review text here..."
    }
  ]
}
```

## Additional Resources

- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Place ID Finder Tool](https://developers.google.com/maps/documentation/places/web-service/place-id)
- [Google Cloud Console](https://console.cloud.google.com/)
- [API Key Best Practices](https://developers.google.com/maps/api-security-best-practices)

## Need Help?

If you encounter issues not covered in this guide:

1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Confirm your API key has the correct restrictions
4. Test your Place ID using the Place ID Finder tool
5. Check Google Cloud Console for API usage and errors
6. Review this documentation thoroughly

## Summary Checklist

Before going live, ensure:
- [ ] Google Places API is enabled in Cloud Console
- [ ] API key is created and restricted
- [ ] Place ID is correct for your business
- [ ] Environment variables are set in `.env.local`
- [ ] Business location coordinates are updated in `Testimonials.tsx`
- [ ] `USE_GOOGLE_REVIEWS` is set to `true`
- [ ] Website has been tested and reviews are displaying
- [ ] API key restrictions are properly configured
- [ ] `.env.local` is in `.gitignore`
- [ ] Monitoring is set up in Google Cloud Console
