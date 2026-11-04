# Order Monkey — Aurelian Bistro web shop

Responsive HTML, CSS and JavaScript prototype based on the Order Monkey Web Shop V2 Figma journey.

## Journey

- Restaurant landing page and popular items
- Order type selection: takeaway, delivery or catering
- Fulfillment choice, date/time, postal code and outlet selection
- Menu categories, product search and dietary filters
- Product customization, add-ons and quantity controls
- Cart, sample promotion and loyalty/reward surfaces
- Persistent bottom cart bar with live item count, subtotal and checkout action
- Customer and delivery information, comments and tips
- Payment method selection and order confirmation
- Order receipt with a downloadable text summary

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

To verify the production build locally:

```bash
npm run build
npm run preview
```

## Icons

Icons use the official Iconsax Web Component package. The app imports `iconsax` once and renders the Figma-aligned icon names with the outline/bold variants and sizes used in the interface. See the [Iconsax Web Component documentation](https://docs.iconsax.io/npm/web-component).

## Deployment

The GitHub Actions workflow in `.github/workflows/pages.yml` installs dependencies, validates the JavaScript modules, builds the Vite production bundle, and deploys the `dist` folder to GitHub Pages on every push to `main`.

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

- HTML5 and CSS3 with responsive breakpoints
- Vanilla JavaScript ES modules
- Native custom elements / Web Components
- Iconsax Web Components
- Vite for development and production bundling

## Code Connect

The reusable web components are in `src/components.js`:

- `omk-topbar`
- `omk-button`
- `omk-product-card`
