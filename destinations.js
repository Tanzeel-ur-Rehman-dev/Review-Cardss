// =========================================================================
// GOOGLE REVIEW QR CARD DESTINATIONS CONFIGURATION
// =========================================================================
//
// HOW TO ASSIGN A GOOGLE REVIEW LINK TO A CARD:
// 1. Find the card number below (e.g. "001", "002", ..., "010").
// 2. Replace the URL with your customer's Google Review link.
// 3. Save this file.
// 4. Redeploy the website to Vercel (or git push).
//
// EXAMPLE:
//   "001": "https://g.page/r/example-restaurant-review/review",
//   "002": "https://maps.app.goo.gl/example-salon",
//
// NOTE:
// - Leave the URL as "" (empty string) if the card is not yet assigned to any shop.
// - If someone scans an unassigned card, they will see a polite "Card Not Activated" page.
// =========================================================================

export const destinations = {
  // Card 001 - Change destination link below:
  "001": "https://fallzabdeskhyd.szabist.edu.pk/Index.asp?param=1&sid=685824948",

  // Card 002 - Change destination link below:
  "002": "https://maps.google.com/?cid=10002",

  // Card 003 - Change destination link below:
  "003": "https://maps.google.com/?cid=10003",

  // Card 004 - Change destination link below:
  "004": "",

  // Card 005 - Change destination link below:
  "005": "",

  // Card 006 - Change destination link below:
  "006": "",

  // Card 007 - Change destination link below:
  "007": "",

  // Card 008 - Change destination link below:
  "008": "",

  // Card 009 - Change destination link below:
  "009": "",

  // Card 010 - Change destination link below:
  "010": "",
};

// Default fallback contact number for support/sales inquiry (Pakistani WhatsApp ready format)
export const siteConfig = {
  brandName: "Review Card",
  whatsappNumber: "923000000000", // Replace with your WhatsApp phone number (e.g. 923001234567)
  whatsappMessage: "Hello! I am interested in ordering Google Review QR Cards for my shop.",
};
