# Coffee Ta Cocktails Website

This is a mobile-first starter website built from the supplied Coffee Ta Cocktails logo and menus.

## Included
- Responsive homepage
- Coffee + cocktail menu categories
- Add-to-cart ordering
- Pickup checkout flow
- 21+ age confirmation for alcohol items
- DoorDash Delivery button and Storefront URL hook
- Original menu posters
- Store location / phone / hours configuration
- No secret API keys stored in the browser

## Run it locally
1. Open a terminal in this folder.
2. Run:
   python -m http.server 8080
3. Open:
   http://localhost:8080

You can also double-click `index.html`, but using a local web server is preferred.

## Change your store information
Open `config.js`.

Update:
- `address`
- `hours`
- `phone`
- `mapsUrl`

## Make DoorDash live
DoorDash's recommended merchant setup is to enable DoorDash Online Ordering / Storefront and place a visible Order Online button on the website.

Once DoorDash gives you your Online Ordering / Storefront URL:
1. Open `config.js`
2. Paste it into:
   `doorDashStorefrontUrl: "YOUR URL HERE"`
3. Upload the updated site.

The Delivery tab will then send guests directly to the DoorDash ordering checkout.

For a custom delivery flow instead of DoorDash-hosted ordering, DoorDash Drive API can be integrated from a secure server. Never place DoorDash API secrets in `app.js` or `config.js`.

## Make pickup payments live
The included pickup checkout is a customer/order-information flow, but it intentionally does not process a card yet.

To accept live pickup payments, connect one of:
- Stripe Checkout
- Square
- Toast
- another restaurant/POS provider

A secure backend/serverless function is required for secret payment credentials.

## Menu updates
Menu data is in `app.js` inside the `MENU` object.

The two original menu images are also included in:
- `assets/coffee-menu.png`
- `assets/cocktails-menu.png`

## Suggested launch checklist
- Confirm business address
- Add phone number
- Add operating hours
- Confirm menu prices
- Add DoorDash Storefront URL
- Select payment provider for direct pickup orders
- Confirm applicable alcohol ordering/delivery rules and DoorDash alcohol eligibility
- Add domain name
- Publish to Azure Static Web Apps, Netlify, Vercel, GoDaddy hosting, or similar
