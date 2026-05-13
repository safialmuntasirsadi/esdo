const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://esdo.vercel.app/';
const OUTPUT = path.join(__dirname, 'ESDO_Project_Overview.pdf');

async function generate() {
  const qrDataUrl = await QRCode.toDataURL(SITE_URL, {
    width: 180,
    margin: 2,
    color: { dark: '#1B4332', light: '#ffffff' },
  });

  // Extract base64 from data URL
  const qrBase64 = qrDataUrl.split(',')[1];
  const qrBuffer = Buffer.from(qrBase64, 'base64');

  const doc = new PDFDocument({
    size: 'A4',
    margin: 0,
    info: {
      Title: 'ESDO Eco-Tourism Website — Project Overview',
      Author: 'Safial Muntasir Sadi',
    },
  });

  doc.pipe(fs.createWriteStream(OUTPUT));

  // --- Border frame ---
  doc.lineWidth(1.5);
  doc.strokeColor('#1B4332');
  doc.rect(18, 18, 559, 804).stroke();
  doc.lineWidth(0.5);
  doc.rect(22, 22, 551, 796).stroke();

  // --- Top accent bar ---
  doc.rect(22, 22, 551, 8).fill('#1B4332');

  // --- Header ---
  doc.fillColor('#1B4332');
  doc.fontSize(26);
  doc.font('Helvetica-Bold');
  doc.text('ESDO Eco-Tourism Website', 60, 52, { align: 'left' });

  doc.fontSize(12);
  doc.font('Helvetica');
  doc.fillColor('#555555');
  doc.text('Community-Based Sustainable Tourism Platform', 60, 82, { align: 'left' });

  // --- Divider line ---
  doc.strokeColor('#D4A843');
  doc.lineWidth(2);
  doc.moveTo(60, 108).lineTo(535, 108).stroke();

  // --- QR Code ---
  doc.image(qrBuffer, 420, 46, { width: 100, height: 100 });
  doc.fontSize(9);
  doc.fillColor('#1B4332');
  doc.font('Helvetica');
  doc.text('Scan to visit', 420, 152, { width: 100, align: 'center' });

  // --- Project Description ---
  doc.fillColor('#1B4332');
  doc.fontSize(13);
  doc.font('Helvetica-Bold');
  doc.text('Project Overview', 60, 130);

  doc.fillColor('#333333');
  doc.fontSize(10.5);
  doc.font('Helvetica');

  const description = `A fully functional eco-tourism website built for ESDO (Environmental and Social Development Organization) to promote sustainable, community-based tourism in northern Bangladesh. The platform showcases the region\'s natural heritage, cultural landmarks, and agro-tourism opportunities — connecting conscious travelers with authentic local experiences.`;

  doc.text(description, 60, 155, { width: 340, lineGap: 3 });

  // --- Key Features ---
  doc.fillColor('#1B4332');
  doc.fontSize(13);
  doc.font('Helvetica-Bold');
  doc.text('Key Features', 60, 235);

  const features = [
    'Dynamic blog system — 14+ articles on heritage, culture, agro-tourism, and experiential travel',
    'Responsive design — optimized for mobile, tablet, and desktop',
    'Community-first approach — highlights homestays, local guides, and village-level experiences',
    'SDG-aligned — supports UN Sustainable Development Goals through responsible tourism',
    'Category filtering & search — visitors can browse by topic and find relevant content',
    'Rich article layouts — narrative storytelling with images, callouts, and structured sections',
  ];

  let y = 260;
  features.forEach((f, i) => {
    // Bullet dot
    doc.fillColor('#1B4332');
    doc.circle(68, y + 4, 3).fill();
    doc.fillColor('#333333');
    doc.fontSize(10);
    doc.font('Helvetica');
    doc.text(f, 80, y, { width: 430, lineGap: 2 });
    y += 26;
  });

  // --- Tech Stack ---
  doc.fillColor('#1B4332');
  doc.fontSize(13);
  doc.font('Helvetica-Bold');
  doc.text('Tech Stack', 60, y + 10);

  y += 35;
  const stackItems = [
    'Node.js + Express.js  —  Server-side routing and rendering',
    'EJS Templates  —  Dynamic page generation with reusable components',
    'Vanilla CSS  —  Mobile-first responsive design with media queries',
    'JSON Data Layer  —  Structured content management for blog posts',
  ];

  stackItems.forEach((s) => {
    doc.fillColor('#1B4332');
    doc.circle(68, y + 4, 3).fill();
    doc.fillColor('#333333');
    doc.fontSize(10);
    doc.font('Helvetica');
    doc.text(s, 80, y, { width: 430, lineGap: 2 });
    y += 24;
  });

  // --- Live URL ---
  y += 6;
  doc.rect(60, y, 475, 42).fill('#1B4332');
  doc.fillColor('#ffffff');
  doc.fontSize(11);
  doc.font('Helvetica');
  doc.text('Live:  ' + SITE_URL, 70, y + 14, { width: 455, align: 'center' });

  // --- Footer ---
  doc.fillColor('#999999');
  doc.fontSize(8);
  doc.font('Helvetica');
  doc.text('Built by Safial Muntasir Sadi  •  Submitted for VIVA HR Review', 60, 800, { width: 475, align: 'center' });

  doc.end();

  console.log('PDF generated: ' + OUTPUT);
}

generate().catch(console.error);
