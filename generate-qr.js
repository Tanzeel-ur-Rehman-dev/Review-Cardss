const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// 1. Determine Base Domain (Default or passed as CLI argument / env var)
// Example usage: node scripts/generate-qr.js https://my-custom-domain.vercel.app
const defaultBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.argv[2] || 'https://MY-SITE.vercel.app';

// 2. Card IDs to generate (001 through 010)
const cardIds = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010'];

// 3. Ensure output folder exists
const outputDir = path.join(__dirname, '..', 'qr-codes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('====================================================');
console.log('  REVIEW CARD - BATCH QR CODE GENERATOR (001 - 010)');
console.log('====================================================');
console.log(`Base Website Domain: ${defaultBaseUrl}`);
console.log(`Saving PNG files to: ${outputDir}\n`);

async function generateAll() {
  let cleanBase = defaultBaseUrl.trim().replace(/\/$/, '');

  for (const id of cardIds) {
    const targetUrl = `${cleanBase}/${id}`;
    const filePath = path.join(outputDir, `QR-${id}.png`);

    try {
      await QRCode.toFile(filePath, targetUrl, {
        width: 800, // High resolution for printing
        margin: 2,
        color: {
          dark: '#0f172a', // Slate dark color for QR dots
          light: '#ffffff', // Clean white background
        },
        errorCorrectionLevel: 'H', // High error correction level for physical cards
      });
      console.log(`  ✓ Generated: QR-${id}.png  -->  ${targetUrl}`);
    } catch (err) {
      console.error(`  ✗ Error generating QR-${id}.png:`, err.message);
    }
  }

  console.log('\n====================================================');
  console.log('  SUCCESS! All 10 QR codes generated successfully.');
  console.log('  You can now hand these PNG files to your printer.');
  console.log('====================================================');
}

generateAll();
