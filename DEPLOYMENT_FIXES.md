# Deployment Fixes for React SPA

This document explains how to fix the 404 errors that occur when refreshing pages or navigating directly to URLs in your React Single Page Application (SPA).

## The Problem

When you refresh a page like `/contact` or navigate directly to `/privacy-policy`, you get a 404 error because:

1. The server doesn't know about your client-side routes
2. It tries to find a physical file at that path
3. Since it doesn't exist, it returns a 404 error

## The Solution

The solution is to configure your server to always serve the `index.html` file for any route, letting React Router handle the routing on the client side.

## Platform-Specific Fixes

### 1. Netlify (Recommended)

The `_redirects` file has already been created in the `public/` folder:

```
/*    /index.html   200
```

**Steps:**
1. Deploy your site to Netlify
2. The `_redirects` file will be automatically detected
3. All routes will now work properly

### 2. Vercel

The `vercel.json` file has already been created:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Steps:**
1. Deploy your site to Vercel
2. The `vercel.json` file will be automatically detected
3. All routes will now work properly

### 3. GitHub Pages

Create a `404.html` file in your `public/` folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current url and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new url with only a query string and hash fragment,
      // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
      // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
      // Note: this 404.html file must be at least 512 bytes for it to work
      // with Internet Explorer (it is currently > 512 bytes)

      // If you're creating a Project Pages site and NOT using a custom domain,
      // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
      // This way the code will only replace the route part of the path, and not
      // the real directory in which the app resides, for example:
      // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
      // https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
      // Otherwise, leave pathSegmentsToKeep as 0.
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

### 4. Apache Server

Create a `.htaccess` file in your `public/` folder:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### 5. Nginx Server

Use the provided `nginx.conf` file and update your server configuration.

### 6. Other Hosting Platforms

For other platforms, look for:
- "Rewrites" or "Redirects" settings
- "Fallback to index.html" option
- "SPA Mode" or "Single Page App" settings

## Testing the Fix

After deploying with the appropriate configuration:

1. Navigate to your deployed site
2. Go to any page (e.g., `/contact`, `/privacy-policy`)
3. Refresh the page - it should work without 404 errors
4. Try typing the URL directly in the address bar
5. Use browser back/forward buttons

## Additional Features Implemented

### Scroll to Top on Navigation

A `ScrollToTop` component has been added that automatically scrolls to the top of the page when navigating between routes. This ensures users always start at the top of new pages.

### Responsive Design Improvements

The Privacy Policy and Terms of Use pages have been updated with better responsive design:
- Improved mobile padding and margins
- Better font scaling for different screen sizes
- Enhanced spacing and typography

## Environment Variables

Make sure to set up your EmailJS environment variables for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_CONTACT_EMAIL=info@researchncollab.org
```

## Build and Deploy

1. Build your project: `npm run build`
2. Deploy the `dist/` folder to your hosting platform
3. Ensure the appropriate configuration file is in place for your platform

The 404 errors should now be resolved, and all pages should work properly when refreshed or accessed directly.
