# Order Monkey — Aurelian Bistro web shop

Responsive HTML, CSS and JavaScript prototype based on the Order Monkey Web Shop V2 Figma journey.

## Journey

- Restaurant landing page and popular items
- Order type selection: takeaway, delivery or catering
- Fulfillment choice, date/time, postal code and outlet selection
- Menu categories, product search and dietary filters
- Product customization, add-ons and quantity controls
- Cart, sample promotion and loyalty/reward surfaces
- Customer and delivery information, comments and tips
- Payment method selection and order confirmation
- Order receipt with a downloadable text summary

## Run locally

This is a static website with no build step. Open `index.html` in a local static web server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys the root of the repository to GitHub Pages on every push to `main`.

For the first deployment, open **Settings → Pages** in this repository and choose **GitHub Actions** as the build and deployment source. Once enabled, future pushes deploy automatically.

## Notes

- The interface uses the Order Monkey / Aurelian Bistro content, CHF sample pricing and design direction shown in the reference Figma file.
- Figma-exported imagery is referenced from Figma's asset CDN. If the temporary asset links expire or are unavailable, replace the image URLs in `src/app.js` with locally hosted, licensed image files.
- Product descriptions, prices, opening hours, outlet details, promotional terms, tax, delivery charge and customer information are prototype content and must be verified before production.
- The map is an illustrative visual, not a live map or geolocation integration.
- Payment is simulated. No payment is processed, no sensitive card information is collected, and no order is sent to a restaurant.
- Customer data stays in the browser session only. The cart is stored in `sessionStorage` for the current session.

## Accessibility

The prototype uses native form controls, explicit labels, semantic headings, buttons for actions, keyboard-visible focus indicators, dialog roles, and a polite live region for cart/order announcements. Verify contrast, screen-reader behavior and touch target sizing with the final product content and devices before production.

## Technology

- HTML5
- CSS3 with responsive breakpoints
- Vanilla JavaScript ES modules
- Native custom elements / Web Components

## Code Connect

The reusable web components are in `src/components.js`:
- `omk-topbar`
- `omk-button`
- `omk-product-card`
