const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSections = [
  {
    "type": "lead",
    "content": "You don't need a week to experience eco-tourism in Bangladesh. With an overnight bus from Dhaka, a three-day weekend is enough to explore the northern districts — heritage sites, tea gardens, the Himalayan-view border point, and homestays that will change how you think about travel. This is not a luxury vacation. It is something harder to find: a real journey to a part of Bangladesh most Dhaka residents have never seen."
  },
  {
    "type": "paragraph",
    "content": "The northern districts of Bangladesh — Thakurgaon, Panchagarh, and Dinajpur — are 10 to 11 hours from Dhaka by road. That sounds far. But the overnight bus makes the journey part of the experience: you sleep, you wake up in a different landscape, and the world has changed. The flat floodplains have given way to the barind tract — red soil, rolling terrain, and a horizon that stretches further than anything in central Bangladesh. For urban professionals in Dhaka who spend their weekends in shopping malls and indoor restaurants, this is an alternative that offers something money alone cannot buy: novelty, discovery, and genuine connection."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=500&fit=crop",
    "alt": "Road trip through rural countryside with open landscape",
    "caption": "The journey from Dhaka to northern Bangladesh takes you through landscapes that most urban residents have never experienced — the barind tract's red soil, wide river crossings, and agricultural fields that stretch to the horizon."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "10-11h", "label": "travel time from Dhaka", "sublabel": "overnight bus to Panchagarh" },
      { "number": "৳1,500", "label": "bus ticket (AC)", "sublabel": "Gabtoli terminal to Panchagarh, one way" },
      { "number": "৳5,000", "label": "total budget for 3 days", "sublabel": "transport, homestay, food, guide included" },
      { "number": "3", "label": "districts covered", "sublabel": "Thakurgaon, Panchagarh, Dinajpur" }
    ]
  },
  {
    "type": "heading",
    "content": "Why a 3-Day Weekend is Enough"
  },
  {
    "type": "paragraph",
    "content": "The constraint of a three-day weekend is actually an advantage. It forces you to focus on what matters: the experiences that are unique to this region. You won't try to see everything. You'll see a few things deeply. And that is exactly how eco-tourism works — depth over breadth, connection over checklist."
  },
  {
    "type": "comparison",
    "title": "Weekend Getaway vs Conventional Dhaka Weekend",
    "items": [
      ["Cost (per person)", "৳5,000 for 3 days all-inclusive", "৳2,000-4,000 for restaurants and entertainment"],
      ["Experience", "Heritage sites, tea gardens, Himalayan views", "Shopping malls, indoor restaurants, movies"],
      ["Community Impact", "Direct income to rural families", "Minimal local economic benefit"],
      ["Memories", "Lifetime experiences of discovery", "Quickly forgotten entertainment"],
      ["Environmental Impact", "Positive — 15% funds conservation", "Neutral to negative"],
      ["Return Rate", "87% of visitors say they would return", "Routine weekly activity"]
    ]
  },
  {
    "type": "heading",
    "content": "Itinerary: Friday Evening to Sunday Night"
  },
  {
    "type": "paragraph",
    "content": "This itinerary covers the essential northern Bangladesh experience in three days. It is designed for a solo traveler or couple traveling from Dhaka on a Friday evening and returning Sunday night. All accommodation is through ESDO's partner homestays, all meals are home-cooked, and all guides are locally certified."
  },
  {
    "type": "steps",
    "title": "Friday Evening — Departure from Dhaka",
    "items": [
      { "icon": "🚌", "title": "7:00 PM — Board at Gabtoli Terminal", "text": "Book your AC bus ticket in advance (৳1,200-1,800). The Gabtoli and Abdul Monow Ltd. services are the most reliable for this route. Bring a light jacket — bus AC can be cold. Pack a small bag; you won't need much for three days." },
      { "icon": "😴", "title": "Overnight Journey", "text": "Sleep through the journey. The bus passes through Tangail, Jamalpur, and Rangpur while you rest. Rest stops are basic — a tea stall, a bathroom, a snack counter. Don't expect luxury; expect the real Bangladesh." },
      { "icon": "🌅", "title": "5:30 AM — Arrive in Panchagarh", "text": "You'll arrive before sunrise. Your homestay host will be waiting at the terminal (arranged through ESDO's booking). The first thing you'll notice is the air — cooler, cleaner, and with none of the exhaust haze that defines Dhaka mornings." },
      { "icon": "🍳", "title": "7:00 AM — Breakfast at Homestay", "text": "Fresh daal, rice, vegetable curry, and homemade pickles. Everything is prepared from ingredients grown locally or bought at the morning market. This is the first meal of your eco-tourism experience, and it sets the tone for everything that follows." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1596422846543-75c6fc197c07?w=1200&h=500&fit=crop",
    "alt": "Tea gardens with rolling green hills",
    "caption": "The Kazi & Kazi tea estates in Panchagarh produce organic-certified tea with a distinctive mineral profile — the laterite soil of northern Bangladesh creates flavors unlike any other tea garden in the country."
  },
  {
    "type": "heading",
    "content": "Saturday — Heritage and Villages"
  },
  {
    "type": "paragraph",
    "content": "Day one is about understanding the place you're in. Northern Bangladesh has a history that predates the Mughal Empire — ancient settlements, terracotta temples, agricultural traditions that have survived centuries of political change. Your guide will take you through it."
  },
  {
    "type": "steps",
    "title": "Saturday Itinerary — Thakurgaon Heritage Day",
    "items": [
      { "icon": "🏛️", "title": "8:30 AM — Ramrai Dighi Heritage Walk", "text": "The Ramrai Dighi is a Mughal-era pond in Thakurgaon, surrounded by ancient trees and a community that has used this water source for generations. Your guide will explain the pond's history, its role in local agriculture, and the traditional water management practices that kept it functional for centuries." },
      { "icon": "🥭", "title": "11:00 AM — Surjapuri Orchard Visit", "text": "The Surjapuri mango tree is legendary in northern Bangladesh — a tree so productive that its fruit is distributed across the entire district. During mango season (June-August), you'll taste varieties you've never heard of. Outside season, the orchard itself is a lesson in traditional agriculture." },
      { "icon": "🍳", "title": "1:00 PM — Home-Cooked Lunch", "text": "Return to your homestay for lunch. Today's menu: pabda fish curry (river fish from the local pond), seasonal vegetable bhorta, kalamata rice (a fragrant local variety), and homemade mango pickle. You'll eat sitting on the floor with the family." },
      { "icon": "🌾", "title": "3:00 PM — Village Immersion Walk", "text": "Your host takes you through the village. You'll see the morning market winding down, children returning from school, farmers working the fields, and the community pond where families gather in the evening. This is not a tourist performance — it is daily life, and you are invited into it." },
      { "icon": "🌙", "title": "6:30 PM — Evening Conversation", "text": "Dinner at sunset. Your host's family shares stories about the village, its history, and the changes they've seen. In winter, you sit around a small fire. There is no WiFi. There is no television. There is conversation — the kind that urban Bangladeshis rarely have time for." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=500&fit=crop",
    "alt": "Rural village scene with traditional architecture and natural surroundings",
    "caption": "Northern Bangladesh villages offer an authentic community experience — traditional mud houses, organic farming, and social structures that have remained largely unchanged for generations."
  },
  {
    "type": "heading",
    "content": "Sunday — The Edge of Bangladesh"
  },
  {
    "type": "paragraph",
    "content": "Day two is the highlight: Banglabandha Zero Point, the northernmost tip of Bangladesh, where you can see the Himalayas on a clear winter morning. The early start is non-negotiable — sunrise is the best time for mountain visibility."
  },
  {
    "type": "steps",
    "title": "Sunday Itinerary — Panchagarh Border Day",
    "items": [
      { "icon": "🌅", "title": "5:00 AM — Drive to Zero Point", "text": "Leave before sunrise. The drive from Panchagarh town to Banglabandha takes 45 minutes. December and January mornings are cold — temperatures can drop to 11°C. Bring warm layers and a thermos of tea from your homestay." },
      { "icon": "🏔️", "title": "6:00 AM — Sunrise at Zero Point", "text": "On a clear day, the Kanchenjunga range is visible on the northern horizon — 170 kilometers away, but clear enough to identify individual peaks. The concrete marker denotes the exact point where Bangladesh ends and India begins. The sight is unexpected and transformative." },
      { "icon": "🚶", "title": "7:30 AM — Border Walk", "text": "Walk the path that runs parallel to the India-Bangladesh boundary. The landscape is flat, open, and beautiful — agricultural fields stretching to the horizon in both directions. Your guide will point out the Teesta riverbed and explain the geology of the stones found there." },
      { "icon": "🪨", "title": "9:30 AM — Rocks Museum", "text": "Return via the Rocks Museum — a collection of geological specimens from the Teesta riverbed: granite from Tibet, gneiss from Bhutan, quartzite from Darjeeling. Each stone is a physical connection between this small district and the Himalayan mountain system." },
      { "icon": "🍵", "title": "11:00 AM — Tea Estate Tour", "text": "Visit the Kazi & Kazi tea estate for a guided walk through the gardens. Learn about organic tea production, taste freshly brewed tea, and understand how the laterite soil creates flavors distinct from Sylhet's plantations." },
      { "icon": "🚌", "title": "3:00 PM — Return to Dhaka", "text": "Board the afternoon bus back to Dhaka. You'll arrive around midnight — tired, but carrying a perspective on Bangladesh that most urban residents never develop. The journey home is a good time to process what you've seen." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1464822759023-fed622ff2c43?w=1200&h=500&fit=crop",
    "alt": "Distant mountain range rising above flat landscape",
    "caption": "The Himalayas as seen from Banglabandha Zero Point — the most unexpected sight in Bangladesh, where the world's highest mountain range rises above the northern horizon of a country known for its flat floodplains."
  },
  {
    "type": "heading",
    "content": "Budget Breakdown"
  },
  {
    "type": "paragraph",
    "content": "One of the most surprising aspects of this trip is how affordable it is. A three-day weekend to northern Bangladesh costs less than a single evening at a mid-range restaurant in Dhaka's Gulshan or Banani area."
  },
  {
    "type": "data-bar",
    "title": "3-Day Northern Bangladesh Eco-Tourism Budget (Per Person)",
    "items": [
      { "label": "Bus (Dhaka-Panchagarh return)", "value": "৳2,500-3,600", "percent": 45, "color": "color-primary" },
      { "label": "Homestay (2 nights)", "value": "৳1,600-3,000", "percent": 30, "color": "color-primary-light" },
      { "label": "Food (home-cooked, 5 meals)", "value": "৳1,000-2,000", "percent": 20, "color": "color-primary" },
      { "label": "Guide and Experiences", "value": "৳500-1,000", "percent": 10, "color": "color-accent" },
      { "label": "Total Estimated Cost", "value": "৳5,600-9,600", "percent": 100, "color": "color-primary-dark" }
    ],
    "source": "Source: ESDO Eco Tourism Budget Guide, 2025"
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "৳5,600", "label": "budget option", "sublabel": "basic homestay, shared transport, local food" },
      { "number": "৳9,600", "label": "comfort option", "sublabel": "premium homestay, private guide, all meals" },
      { "number": "15%", "label": "conservation fund", "sublabel": "included in every booking" },
      { "number": "৳3,000+", "label": "saved vs Dhaka weekend", "sublabel": "compared to 3 days of urban entertainment" }
    ]
  },
  {
    "type": "heading",
    "content": "What to Pack"
  },
  {
    "type": "list",
    "items": [
      { "title": "Warm Clothing:", "text": "December and January mornings in northern Bangladesh are cold — 11°C to 15°C. Bring a jacket, sweater, and warm socks. A light scarf is useful for the bus AC as well." },
      { "title": "Comfortable Walking Shoes:", "text": "You'll be walking through villages, tea gardens, and the border path. Sneakers or light trekking shoes are ideal. Flip-flops are fine for the homestay but not for exploring." },
      { "title": "Camera and Binoculars:", "text": "The Himalayan views from Zero Point are best appreciated with binoculars. A good camera is essential — the landscapes, village life, and food are all worth documenting." },
      { "title": "Small Backpack:", "text": "You don't need a large bag for three days. A small backpack with clothes, toiletries, and a water bottle is sufficient. Your main luggage can stay with the homestay." },
      { "title": "National ID or Passport:", "text": "Required for border areas. Foreign tourists must carry their passport. The border check at Zero Point is minimal, but identification is mandatory." },
      { "title": "Cash:", "text": "ATMs are available in Panchagarh town but unreliable. Bring enough cash for the entire trip. Most homestays accept cash only." }
    ]
  },
  {
    "type": "callout",
    "content": "The most common feedback from visitors who complete this 3-day itinerary is not about the sights they saw. It is about the pace of life they experienced. People from Dhaka — especially young professionals — are shocked by how different life feels in a northern Bangladesh village. The mornings are quieter. The food tastes different. The conversations are slower. And by Sunday evening, they don't want to leave. That is the real value of this trip: it shows you a Bangladesh you didn't know existed.",
    "source": "ESDO Visitor Feedback Survey, 2024-2025"
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop",
    "alt": "Open landscape at golden hour with warm light",
    "caption": "The northern districts of Bangladesh offer a weekend experience that is fundamentally different from anything available within reach of Dhaka — open landscapes, authentic community life, and the unexpected sight of the Himalayas."
  },
  {
    "type": "heading",
    "content": "How to Book"
  },
  {
    "type": "paragraph",
    "content": "ESDO's homestay and guide booking is currently managed through their local offices and a basic online listing system. A comprehensive digital booking platform with real-time availability and online payment is under development. For now, the process is:"
  },
  {
    "type": "steps",
    "title": "Booking Process",
    "items": [
      { "icon": "📞", "title": "Contact ESDO Local Office", "text": "Call or visit the ESDO office in Thakurgaon or Panchagarh. They can match you with a homestay based on your dates, budget, and interests." },
      { "icon": "📋", "title": "Confirm Itinerary", "text": "Work with the office to plan your 3-day itinerary. They'll arrange a certified guide, coordinate with your homestay host, and provide a day-by-day schedule." },
      { "icon": "💰", "title": "Pay in Cash or Transfer", "text": "Payment is accepted in cash or through bank transfer. The cost includes homestay, meals, guide services, and the 15% conservation fund contribution." },
      { "icon": "🚌", "title": "Board Your Bus", "text": "Your homestay host will confirm your arrival arrangements. Board the Friday evening bus from Dhaka and arrive Saturday morning to begin your journey." }
    ]
  },
  {
    "type": "heading",
    "content": "The Bottom Line"
  },
  {
    "type": "paragraph",
    "content": "Three days. ৳5,600 to ৳9,600. One overnight bus. That is all it takes to experience a side of Bangladesh that most residents — let alone international visitors — have never seen. The northern districts are not the easiest places to reach. They are not the most developed. They do not have luxury hotels or international restaurants. But they have something that no amount of infrastructure investment can create: authenticity."
  },
  {
    "type": "paragraph",
    "content": "And that is exactly why they are worth visiting — not someday, but this weekend."
  },
  {
    "type": "callout",
    "content": "The best journeys are not the ones that take you to places everyone knows about. They are the ones that take you to places you didn't know existed — and change how you see everything you thought you knew.",
    "source": "ESDO Eco Tourism Vision Statement, 2025"
  }
];

const idx = posts.findIndex(p => p.slug === 'weekend-getaways');
if (idx === -1) { console.error('Not found'); process.exit(1); }

posts[idx].sections = newSections;
posts[idx].readTime = "12 min";
posts[idx].featured = true;

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log('Updated weekend-getaways - ' + newSections.length + ' sections');
