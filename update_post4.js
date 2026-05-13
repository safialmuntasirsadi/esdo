const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSections = [
  {
    "type": "lead",
    "content": "There is a place in Bangladesh where you can stand on the northernmost tip of the country and see the Himalayas rising above the clouds. Not metaphorically. Not from a distance of 200 kilometers. But clearly, unmistakably — Kanchenjunga, 8,586 meters tall, third-highest mountain on Earth, visible from Banglabandha Zero Point on a clear winter morning. Most Bangladeshis don't know this place exists. Fewer have visited. This is a journey to find it."
  },
  {
    "type": "paragraph",
    "content": "Panchagarh is Bangladesh's northernmost district, bordered by India on three sides and West Bengal to the west. It sits at the gateway between the flat Bengal floodplain and the foothills of the Eastern Himalayas. The district has a microclimate unlike anywhere else in Bangladesh — cooler winters, red laterite soil, and tea gardens that stretch toward a horizon broken only by the world's tallest mountains. It is the closest place in Bangladesh to the Himalayas, and the journey to get there is a passage through landscapes most Bangladeshis have never seen."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop",
    "alt": "Mountain landscape with distant peaks visible on horizon",
    "caption": "On a clear winter morning, the Kanchenjunga range is visible from Banglabandha Zero Point in Panchagarh — the northernmost point of Bangladesh, where the country meets the Himalayan foothills."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "26°N", "label": "latitude", "sublabel": "Panchagarh's position — closest to Himalayas in Bangladesh" },
      { "number": "8,586m", "label": "Kanchenjunga height", "sublabel": "visible from Zero Point on clear days, 170km away" },
      { "number": "45m", "label": "elevation at Zero Point", "sublabel": "highest accessible elevation in northern Bangladesh" },
      { "number": "11°C", "label": "winter minimum", "sublabel": "December-January temperature in Panchagarh" }
    ]
  },
  {
    "type": "heading",
    "content": "Why Panchagarh, Not Sylhet or Chittagong?"
  },
  {
    "type": "paragraph",
    "content": "Bangladesh has three distinct eco-tourism regions: the tea gardens of Sylhet, the hills of Chittagong, and the northern districts centered on Panchagarh. Each is compelling. But Panchagarh offers something neither Sylhet nor Chittagong can — proximity to the Himalayas, a geological connection to the Tibetan Plateau, and a cultural landscape shaped by centuries of cross-border exchange between Bengal and the Himalayan kingdoms."
  },
  {
    "type": "comparison",
    "title": "Bangladesh Eco-Tourism Regions Compared",
    "items": [
      ["Focus", "Tea gardens, waterfalls, haor wetlands", "Himalayan views, tea estates, border tourism"],
      ["Best For", "Weekend trips from Dhaka", "Extended eco-tourism experience"],
      ["Highlight", "Ratnachura viewpoint, Lawachara rainforest", "Banglabandha Zero Point, Rocks Museum"],
      ["From Dhaka", "4-5 hours", "10-11 hours"],
      ["Uniqueness", "Familiar and accessible", "Remote and transformative"]
    ]
  },
  {
    "type": "paragraph",
    "content": "This is not a guide that claims Panchagarh is easy to reach. It isn't. The journey from Dhaka is long — 10 to 11 hours by bus, with no direct flights to Saidpur airport from most cities. But the difficulty is precisely what makes the destination rewarding. Every traveler who makes the journey arrives with a sense of discovery that no easy weekend trip can match."
  },
  {
    "type": "heading",
    "content": "Day One: The Journey North"
  },
  {
    "type": "paragraph",
    "content": "The drive from Dhaka to Panchagarh is itself an eco-tourism experience. The route follows the Bangabandhu Highway through Tangail, Jamalpur, Gaibandha, and Rangpur — crossing from the central Bengal plain into the northern barind tract, a region of red soil, laterite deposits, and agricultural landscapes fundamentally different from the floodplain rice paddies that dominate Bangladesh's popular image."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
    "alt": "Road journey through rural landscape with fields on either side",
    "caption": "The journey from Dhaka to Panchagarh crosses through some of Bangladesh's most authentic rural landscapes — agricultural fields, small towns, and the barind tract's distinctive red soil."
  },
  {
    "type": "paragraph",
    "content": "After Rangpur, the road narrows and the landscape shifts again. The barind tract gives way to the teesta river floodplain — wide, sandy riverbeds that carry stones from the Himalayas, deposited over millennia by glacial meltwater flowing through Tibet, Bhutan, and West Bengal before reaching this northern corner of Bangladesh. Pull over at any teesta crossing and pick up a stone. If you look closely, many are smooth, rounded, and clearly not from the local geology — they traveled hundreds of kilometers from the Tibetan Plateau."
  },
  {
    "type": "callout",
    "content": "The Teesta River carries geological material from the Himalayan foothills all the way to northern Bangladesh. Stones found in the Teesta riverbed near Panchagarh include granite, gneiss, and quartzite — rock types that do not exist naturally in Bangladesh's geology. They are physical evidence of the connection between this small district and the world's highest mountain range.",
    "source": "Bangladesh Geological Survey, Teesta River Basin Study"
  },
  {
    "type": "steps",
    "title": "Day One Itinerary",
    "items": [
      { "icon": "🚌", "title": "Morning — Departure from Dhaka", "text": "Leave early — 6 AM recommended. The Gabtoli and Abdul Monow Ltd. buses are the most reliable options for this route. Pack snacks; rest stops are basic." },
      { "icon": "🍽️", "title": "Afternoon — Lunch at Rangpur", "text": "Stop for lunch in Rangpur town. The local restaurants serve authentic northern Bengali cuisine — pabda fish, bhorta varieties, and seasonal vegetables grown in the barind tract's unique soil." },
      { "icon": "🏠", "title": "Evening — Arrive in Panchagarh", "text": "Check into your homestay or guesthouse. ESDO's partner homestays in Panchagarh town offer basic but clean accommodation with home-cooked meals. Evening is for rest — tomorrow starts early." },
      { "icon": "🌙", "title": "Night — Dinner and Preparation", "text": "Talk with your homestay host about tomorrow's route. Local guides know the best timing for Zero Point sunrise, the weather patterns that determine Himalayan visibility, and the tea garden paths most tourists never find." }
    ]
  },
  {
    "type": "heading",
    "content": "Day Two: Tea Gardens and Ancient Stones"
  },
  {
    "type": "paragraph",
    "content": "Morning begins at the Kazi & Kazi tea estate — one of the largest tea gardens in northern Bangladesh, producing organic-certified tea with flavor profiles distinct from Sylhet's more famous plantations. The difference is in the soil: Panchagarh's laterite deposits create a tea that is darker, more tannic, and with subtle mineral notes that tea connoisseurs compare to first-flush Darjeeling."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1596422846543-75c6fc197c07?w=1200&h=500&fit=crop",
    "alt": "Tea garden with rolling green hills",
    "caption": "The tea gardens of Panchagarh sit at a higher elevation than most of Bangladesh and benefit from a microclimate that produces tea with distinctive mineral notes — unlike anything else grown in the country."
  },
  {
    "type": "paragraph",
    "content": "The guided walk through the tea garden covers four stages: plucking, withering, rolling, and drying. Each stage is done by hand, using techniques brought from Darjeeling and adapted to Panchagarh's conditions over 60 years of production. The guide will explain how tea workers — many of whom are from indigenous communities — maintain the gardens using organic methods that have remained unchanged since the gardens were established."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "60+", "label": "years of tea production", "sublabel": "Kazi & Kazi estate established in the 1960s" },
      { "number": "2,500", "label": "workers employed", "sublabel": "across Kazi & Kazi's northern Bangladesh estates" },
      { "number": "100%", "label": "organic certified", "sublabel": "no synthetic pesticides or fertilizers used" },
      { "number": "3.5%", "label": "Bangladesh's global tea share", "sublabel": "growing niche market for specialty organic tea" }
    ]
  },
  {
    "type": "paragraph",
    "content": "After lunch, the afternoon is dedicated to the Rocks Museum in Panchagarh — arguably the most unusual museum in Bangladesh. It houses a collection of geological specimens found in the Teesta riverbed: granite from the Tibetan Plateau, gneiss from Bhutan's mountains, quartzite from the Darjeeling hills, and fossilized wood that dates back millions of years. Each stone tells the story of a geological process that connected this small district to the formation of the Himalayas."
  },
  {
    "type": "feature-grid",
    "items": [
      {
        "icon": "🪨",
        "title": "Rocks Museum",
        "text": "Geological specimens from the Himalayan foothills — granite, gneiss, quartzite, and fossilized wood found in the Teesta riverbed."
      },
      {
        "icon": "🍃",
        "title": "Tea Estate Walk",
        "text": "Guided tour of organic tea gardens — plucking, processing, and tasting. Learn techniques unchanged for 60 years."
      },
      {
        "icon": "🏘️",
        "title": "Village Immersion",
        "text": "Evening walk through Panchagarh's rural villages — authentic community life, traditional cooking, and local farming practices."
      }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=500&fit=crop",
    "alt": "Rural village scene with traditional architecture",
    "caption": "Panchagarh's villages offer an authentic glimpse into rural Bangladeshi life — traditional mud houses, organic farming, and community structures that have remained largely unchanged for generations."
  },
  {
    "type": "heading",
    "content": "Day Three: The Edge of Bangladesh"
  },
  {
    "type": "paragraph",
    "content": "This is the day you've been traveling for. Banglabandha Zero Point — the northernmost tip of Bangladesh — is reached via a road that runs through Tetulia upazila, past small border villages, and finally to a concrete marker that denotes the exact point where Bangladesh ends and India begins. The marker is simple: a stone pillar with Bangladesh's national emblem. But what it represents is extraordinary."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1464822759023-fed622ff2c43?w=1200&h=500&fit=crop",
    "alt": "Distant mountain range visible above flat landscape",
    "caption": "The moment most travelers come for: the Himalayan range visible from Banglabandha Zero Point. Kanchenjunga, the world's third-highest peak, appears on the horizon on clear winter mornings between November and February."
  },
  {
    "type": "paragraph",
    "content": "On a clear winter morning — between November and February, when the air is dry and the atmospheric visibility is at its peak — you can see the Kanchenjunga range rising above the Indian plains to the north. The distance is approximately 170 kilometers as the crow flies, but the mountains appear close enough to touch. The sight is unexpected, powerful, and transformative. It changes everything you thought you knew about Bangladesh's geography."
  },
  {
    "type": "callout",
    "content": "Standing at Zero Point, looking north at the Himalayas, you realize that Bangladesh is not just a river delta. It is the southern terminus of the world's most spectacular mountain system. The Teesta River that flows through this district originated in those mountains. The stones in the riverbed were carried down by glacial meltwater over millennia. This small corner of Bangladesh is geologically connected to the roof of the world.",
    "source": "Travel journal entry, ESDO Eco Tourism Field Visit, January 2025"
  },
  {
    "type": "steps",
    "title": "Day Three Itinerary",
    "items": [
      { "icon": "🌅", "title": "5:00 AM — Early Start", "text": "Leave before sunrise. The drive to Zero Point takes 45 minutes from Panchagarh town. December and January mornings are cold — bring warm layers." },
      { "icon": "🏔️", "title": "6:00 AM — Sunrise at Zero Point", "text": "Arrive as the sun rises. This is when the Himalayas are most visible — the morning light illuminates the peaks while the foreground remains in shadow, creating the clearest possible contrast." },
      { "icon": "🚶", "title": "7:30 AM — Border Walk", "text": "Walk the border path that runs parallel to the India-Bangladesh boundary. The landscape is flat, open, and beautiful — agricultural fields stretching to the horizon in both directions." },
      { "icon": "🍵", "title": "10:00 AM — Return via Tetulia", "text": "On the way back, stop at Tetulia's local market — a border town bazaar where goods from both sides of the border are traded. The tea stalls serve the strongest chai in Bangladesh." }
    ]
  },
  {
    "type": "heading",
    "content": "Practical Information for the Journey"
  },
  {
    "type": "list",
    "items": [
      { "title": "Getting There:", "text": "Direct buses from Dhaka's Gabtoli terminal to Panchagarh take 10-11 hours. Depart at 6 PM for an early morning arrival. Alternatively, fly to Saidpur airport (40 km from Panchagarh) and take a local bus or CNG auto-rickshaw." },
      { "title": "Best Time to Visit:", "text": "November to February for Himalayan visibility. March to May for tea garden visits during the first flush harvest. Avoid June to September — monsoon season makes roads difficult and visibility poor." },
      { "title": "Accommodation:", "text": "ESDO's partner homestays in Panchagarh town offer basic but clean rooms with home-cooked meals at 800-1,500 BDT per night. Budget hotels are also available near the bus terminal." },
      { "title": "Food:", "text": "Northern Bengali cuisine is distinct from the food of central Bangladesh. Expect more fish, less meat, and seasonal vegetables grown in the barind tract's red soil. The local rice varieties — kalamata and chinigura — are worth seeking out." },
      { "title": "What to Bring:", "text": "Warm clothing for winter mornings, binoculars for mountain viewing, a good camera, comfortable walking shoes for the tea garden, and patience — this is not a destination for rushed itineraries." },
      { "title": "Permits:", "text": "No special permit is required for Banglabandha Zero Point itself. However, if you plan to visit areas near the international border, carry a valid national ID card. Foreign tourists should carry their passport." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop",
    "alt": "Open landscape with golden hour light",
    "caption": "The northern districts of Bangladesh offer landscapes that challenge every stereotype about the country — open horizons, distant mountains, and a sense of space that most visitors never expected to find."
  },
  {
    "type": "heading",
    "content": "The Eco-Tourism Impact"
  },
  {
    "type": "paragraph",
    "content": "This journey is not just about seeing a new place. It is about understanding how eco-tourism can transform a destination that most people overlook. Every homestay booking in Panchagarh supports a family that would otherwise depend on subsistence agriculture. Every guided tea garden walk creates employment for workers who have been in these gardens for generations. Every tree planted by the ESDO reforestation program — now over 12,000 in the northern districts — improves the watershed that feeds the Teesta and its tributaries."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "200+", "label": "families in homestay program", "sublabel": "earning supplementary income from eco-tourism" },
      { "number": "50+", "label": "certified local guides", "sublabel": "trained by ESDO in hospitality and conservation" },
      { "number": "12,000+", "label": "trees planted", "sublabel": "native species reforestation in northern districts" },
      { "number": "15%", "label": "conservation fund", "sublabel": "of every eco-tourism expenditure goes to conservation" }
    ]
  },
  {
    "type": "paragraph",
    "content": "Panchagarh is not ready for mass tourism. The roads need improvement, the accommodation options are limited, and the infrastructure is basic. But these are not reasons to avoid visiting — they are reasons to visit now, while the destination is still authentic, still undiscovered, and still capable of delivering the kind of travel experience that changes how you see a country."
  },
  {
    "type": "callout",
    "content": "The best eco-tourism destinations are not the ones that are perfect. They are the ones that are becoming — where tourism is being built the right way from the start, where communities are deciding their own relationship with visitors, and where every trip contributes directly to conservation and community development. Panchagarh is one of those places.",
    "source": "ESDO Eco Tourism Vision Statement, 2025"
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=500&fit=crop",
    "alt": "Sunlight through trees in a forest setting",
    "caption": "The future of eco-tourism in northern Bangladesh is being built now — community by community, homestay by homestay, tree by tree. The journey to Zero Point is just the beginning."
  }
];

const idx = posts.findIndex(p => p.slug === 'zero-point-journey');
if (idx === -1) { console.error('Not found'); process.exit(1); }

posts[idx].sections = newSections;
posts[idx].readTime = "15 min";
posts[idx].featured = true;

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log('Updated zero-point-journey - ' + newSections.length + ' sections');
