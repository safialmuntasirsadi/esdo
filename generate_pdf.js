const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://esdo.vercel.app/';
const OUTPUT = path.join(__dirname, 'ESDO_Project_Overview.pdf');

async function generate() {
  const qrDataUrl = await QRCode.toDataURL(SITE_URL, {
    width: 220,
    margin: 2,
    color: { dark: '#1B4332', light: '#ffffff' },
  });

  const qrBase64 = qrDataUrl.split(',')[1];
  const qrBuffer = Buffer.from(qrBase64, 'base64');

  const doc = new PDFDocument({
    size: 'A4',
    margin: 0,
    info: {
      Title: 'ESDO Eco-Tourism Website — Project Overview',
      Author: 'Mehrab Musa',
    },
  });

  doc.pipe(fs.createWriteStream(OUTPUT));

  const W = 595.28;
  const H = 841.89;
  const PAD = 30;
  const contentW = W - PAD * 2;

  // Background gradient
  const gradient = doc.linearGradient(PAD, PAD, PAD, H - PAD);
  gradient.stop(0, '#f8faf8').stop(1, '#eef5ee');
  doc.rect(PAD, PAD, contentW, H - PAD * 2).fill(gradient);

  // Border frame
  doc.lineWidth(2);
  doc.strokeColor('#1B4332');
  doc.rect(PAD, PAD, contentW, H - PAD * 2).stroke();
  doc.lineWidth(0.5);
  doc.strokeColor('#D4A843');
  doc.rect(PAD + 4, PAD + 4, contentW - 8, H - PAD * 2 - 8).stroke();

  // Top accent bar
  doc.rect(PAD, PAD, contentW, 12).fill('#1B4332');
  doc.rect(PAD, PAD + 12, contentW, 2).fill('#D4A843');

  // QR Code
  const qrSize = 150;
  const qrX = W - PAD - qrSize - 10;
  const qrY = PAD + 14;
  const headerW = qrX - PAD - 56;

  // Header
  let y = PAD + 28;
  doc.fillColor('#2D6A4F');
  doc.circle(PAD + 18, y + 8, 6).fill();
  doc.fillColor('#40916C');
  doc.circle(PAD + 30, y + 4, 4).fill();
  doc.fillColor('#52B788');
  doc.circle(PAD + 26, y + 14, 3).fill();

  doc.fillColor('#1B4332');
  doc.fontSize(20);
  doc.font('Helvetica-Bold');
  doc.text('ESDO Eco-Tourism Website', PAD + 42, y, { width: headerW });

  y += 28;
  doc.fontSize(10);
  doc.font('Helvetica');
  doc.fillColor('#555555');
  doc.text('Community-Based Sustainable Tourism Platform', PAD + 42, y, { width: headerW });

  doc.image(qrBuffer, qrX, qrY, { width: qrSize, height: qrSize });
  doc.lineWidth(1);
  doc.strokeColor('#D4A843');
  doc.rect(qrX - 3, qrY - 3, qrSize + 6, qrSize + 6).stroke();
  doc.fontSize(8);
  doc.fillColor('#1B4332');
  doc.font('Helvetica-Oblique');
  doc.text('Scan to visit', qrX, qrY + qrSize + 4, { width: qrSize, align: 'center' });

  // Section header helper
  function sectionHeader(title, yPos) {
    doc.fillColor('#1B4332');
    doc.fontSize(12);
    doc.font('Helvetica-Bold');
    doc.text(title, PAD + 16, yPos);
    doc.lineWidth(1);
    doc.strokeColor('#D4A843');
    doc.moveTo(PAD + 16, yPos + 16).lineTo(W - PAD - 16, yPos + 16).stroke();
  }

  // === PROJECT OVERVIEW ===
  y = qrY + qrSize + 30;
  sectionHeader('Project Overview', y);
  y += 22;
  doc.fillColor('#333333');
  doc.fontSize(9);
  doc.font('Helvetica');
  const description = 'A fully functional eco-tourism website built for ESDO (Environmental and Social Development Organization) to promote sustainable, community-based tourism in northern Bangladesh. The platform showcases the region\'s natural heritage, cultural landmarks, and agro-tourism opportunities.';
  doc.text(description, PAD + 16, y, { width: contentW - 32, lineGap: 3 });

  // === BLOG POSTS ===
  y += 42;
  sectionHeader('Blog Posts', y);
  y += 22;
  const blogPosts = [
    'What is Eco Tourism? A Beginner\'s Guide to Sustainable Travel',
    'A Journey Through Panchagarh: Bangladesh\'s Northernmost Frontier',
    'The 220-Year-Old Mango Tree That Covers Half an Acre: Walking Inside a Living Giant',
    'Standing at 0°: The Day I Reached the Northernmost Point of Bangladesh',
    'The Museum of Ancient Rocks in a Country Made of Mud: Panchagarh\'s Geological Secret',
  ];
  blogPosts.forEach((title, i) => {
    const cardH = 20;
    doc.fillColor(i % 2 === 0 ? '#ffffff' : '#f0f7f0');
    doc.roundedRect(PAD + 16, y, contentW - 32, cardH, 3).fill();
    doc.fillColor('#D4A843');
    doc.rect(PAD + 16, y + 2, 3, cardH - 4).fill();
    doc.fillColor('#1B4332');
    doc.circle(PAD + 30, y + cardH / 2, 6).fill();
    doc.fillColor('#ffffff');
    doc.fontSize(7);
    doc.font('Helvetica-Bold');
    doc.text(String(i + 1), PAD + 26, y + cardH / 2 - 3, { width: 12, align: 'center' });
    doc.fillColor('#333333');
    doc.fontSize(8.5);
    doc.font('Helvetica');
    doc.text(title, PAD + 42, y + 3, { width: contentW - 58, lineGap: 1 });
    y += cardH + 3;
  });

  // === KEY FEATURES ===
  y += 6;
  sectionHeader('Key Features', y);
  y += 22;
  const features = [
    'Dynamic blog — 14+ articles on heritage, culture, and eco-tourism',
    'Mobile-first responsive design',
    'Community-first approach — homestays, local guides',
    'SDG-aligned — UN Sustainable Development Goals',
    'Rich layouts — images, callouts, structured sections',
  ];
  features.forEach((f) => {
    doc.fillColor('#D4A843');
    doc.circle(PAD + 24, y + 4, 3).fill();
    doc.fillColor('#333333');
    doc.fontSize(8.5);
    doc.font('Helvetica');
    doc.text(f, PAD + 36, y, { width: contentW - 52, lineGap: 2 });
    y += 20;
  });

  // === TECH STACK ===
  y += 6;
  sectionHeader('Tech Stack', y);
  y += 22;
  const stackItems = [
    'Node.js + Express.js  —  Server-side routing and rendering',
    'EJS Templates  —  Dynamic page generation',
    'Vanilla CSS  —  Mobile-first responsive design',
    'JSON Data Layer  —  Structured content management',
  ];
  stackItems.forEach((s) => {
    doc.fillColor('#2D6A4F');
    doc.circle(PAD + 24, y + 4, 3).fill();
    doc.fillColor('#333333');
    doc.fontSize(8.5);
    doc.font('Helvetica');
    doc.text(s, PAD + 36, y, { width: contentW - 52, lineGap: 2 });
    y += 20;
  });

  // Live URL banner
  y += 10;
  const bannerY = y;
  const bannerH = 40;
  doc.fillColor('#1B4332');
  doc.roundedRect(PAD + 16, bannerY, contentW - 32, bannerH, 6).fill();
  doc.fillColor('#D4A843');
  doc.roundedRect(PAD + 16, bannerY, 6, bannerH, 3).fill();
  doc.fillColor('#ffffff');
  doc.fontSize(11);
  doc.font('Helvetica-Bold');
  doc.text('Live:  ' + SITE_URL, PAD + 36, bannerY + 13, { width: contentW - 52, align: 'center' });
  doc.fontSize(8);
  doc.font('Helvetica');
  doc.fillColor('#95D5B2');
  doc.text('esdo.vercel.app', PAD + 36, bannerY + 26, { width: contentW - 52, align: 'center' });

  // Footer
  const footerY = H - PAD - 30;
  doc.fillColor('#999999');
  doc.fontSize(9);
  doc.font('Helvetica');
  doc.text('Created by Mehrab Musa', PAD + 16, footerY, { width: contentW - 32, align: 'center' });

  // Bottom accent bar
  doc.rect(PAD, H - PAD - 14, contentW, 14).fill('#1B4332');
  doc.rect(PAD, H - PAD - 16, contentW, 2).fill('#D4A843');

  doc.end();
  console.log('PDF generated: ' + OUTPUT);
}

generate().catch(console.error);
