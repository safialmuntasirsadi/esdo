const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'agro-tourism-northern-bangladesh',
  title: 'I Spent a Week Living on a Farm in Northern Bangladesh — And Learned More Than Any Textbook Could Teach',
  slug: 'agro-tourism-northern-bangladesh',
  author: 'ESDO Eco Tourism',
  date: '2026-03-10',
  readTime: '13 min',
  category: 'Agro Tourism',
  featured: true,
  excerpt: 'Northern Bangladesh is not a tourist destination. It is a farming landscape — and for visitors willing to trade hotels for homestays, sightseeing for rice transplanting, and restaurant meals for farm-to-table cooking, it offers something no conventional tour can: a week of living inside the agricultural rhythm that feeds 170 million people.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mustard_Field_Path.jpg',
  tags: ['agro tourism', 'farm stay', 'homestay', 'mustard field', 'rice paddy', 'fish pond', 'mango orchard', 'rural Bangladesh', 'Dinajpur', 'Panchagarh', 'sustainable tourism'],
  sections: [
    {
      type: 'lead',
      content: 'There is a road that runs through the mustard fields of Dinajpur in December. It is narrow — barely wide enough for a single rickshaw — and on both sides, for as far as you can see, the fields are yellow. Not the pale yellow of autumn leaves, but the deep, saturated gold of a million mustard flowers blooming simultaneously. Walking down that road, with the smell of mustard in the air and the flat horizon stretching in every direction, you understand something that no agricultural statistic can convey: this is what it looks like to feed a nation.'
    },
    {
      type: 'paragraph',
      content: 'Agro tourism in northern Bangladesh is not a developed industry. There are no resort packages, no branded farm-stay chains, no guided agricultural tours with air-conditioned buses. What exists is simpler and more honest: farmers who will let you stay in their homes, watch them work, eat what they grow, and — if you are willing — pick up a tool and help. It is the closest thing to understanding what agriculture actually means in a country where 45 percent of the population works the land.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Mustard_Field_Path.jpg',
      alt: 'Narrow path through golden blooming mustard fields in Bangladesh',
      caption: 'A path through mustard fields in northern Bangladesh — December through February, when the mustard blooms, the landscape turns into a continuous golden carpet stretching to the horizon. These fields produce the oil that millions of Bangladeshis cook with daily. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Mustard Fields'
    },
    {
      type: 'paragraph',
      content: 'The mustard fields of Dinajpur and Rangpur are the most visually striking agricultural landscape in northern Bangladesh. Planted in October and November after the Aman rice harvest, mustard grows through the winter and blooms in December through February — turning entire upazilas into a yellow expanse that looks almost surreal against the flat Bangladeshi plains.'
    },
    {
      type: 'paragraph',
      content: 'In Khansama Upazila, about 20 kilometers south of Dinajpur town, the mustard fields are particularly extensive. The Karatoa River valley provides fertile soil, and the winter dry season creates ideal growing conditions. The mustard is harvested in February and March, then pressed for oil in local mills — small, mechanical operations that you can visit and watch running. The oil that comes out is golden, pungent, and tastes nothing like the refined mustard oil you buy in a Dhaka supermarket.'
    },
    {
      type: 'paragraph',
      content: 'If you visit during the bloom, you can walk through the fields — the plants are waist-high, the flowers are small and bright yellow, and the smell is distinctive: sharp, peppery, and unmistakably mustard. Photographers call this the golden hour landscape of Bangladesh, and they are not exaggerating. At sunrise and sunset, the fields take on a color that is almost difficult to photograph accurately — too warm for daylight, too bright for shadow, existing in a range that cameras struggle to capture but the eye sees perfectly.'
    },
    {
      type: 'heading',
      content: 'The Rice Paddies'
    },
    {
      type: 'paragraph',
      content: 'Rice is the foundation of everything. Bangladesh produces over 38 million tons of rice per year — enough to feed its entire population with a small surplus — and the northern districts of Dinajpur, Rangpur, Nilphamari, and Thakurgaon are among the country\'s most productive rice-growing regions. The Boro rice crop, planted in the dry winter season using irrigation, is the backbone of northern agriculture.'
    },
    {
      type: 'paragraph',
      content: 'If you are visiting between December and January, you will see rice transplanting in progress. This is the activity that defines the Bangladeshi agricultural calendar: women standing knee-deep in puddled fields, bending forward, pushing handfuls of green seedlings into the mud in straight lines. It is physically demanding work — the kind of labor that most urban visitors have never experienced and cannot fully appreciate until they try it.'
    },
    {
      type: 'paragraph',
      content: 'Some homestay hosts in the Dinajpur and Rangpur area will let you participate — not as a performance, but as a genuine helping hand. The farmer hands you a bundle of seedlings, shows you the spacing, and you join the line. Within ten minutes, your back aches, your feet are covered in mud, and you understand why the women who do this work every day are some of the strongest people you will ever meet.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/A_paddy_field_%28rice_field%29_in_bangladesh.jpg',
      alt: 'Green rice paddy field in Bangladesh with water reflections',
      caption: 'A rice paddy in Bangladesh — the agricultural foundation of the country. Northern Bangladesh is among the most productive rice-growing regions, with Boro rice planted in winter using irrigation and Aman rice grown during the monsoon. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Mango Orchards'
    },
    {
      type: 'paragraph',
      content: 'Dinajpur district alone has over 7,100 mango orchards. The region\'s red lateritic soil — the same ancient barind tract geology that allows tea to grow in Panchagarh — is ideal for mango cultivation. The varieties grown here are different from the famous Rajshahi mangoes: Katimon, Banana, and BARI-4 are the dominant types, each with distinct flavors, textures, and harvest windows.'
    },
    {
      type: 'paragraph',
      content: 'Green Leaf Agro Farm in Raniganj, Dinajpur, is a working mango farm with approximately 1,100 trees spread across four acres. It is not a tourist facility — it is a real farm that produces mangoes for market — but the owners welcome visitors who want to walk through the orchard, learn about the varieties, and taste the fruit during season. The trees are tall, the canopy is dense, and walking through an orchard in July, when the mangoes are ripe, is a sensory experience: the smell of the fruit, the shade of the leaves, the sticky sweetness on your fingers from a mango you just picked.'
    },
    {
      type: 'paragraph',
      content: 'Mango season runs from April through July. The early varieties (Banana and BARI-4) ripen in April and May, while the later ones (Katimon) peak in June and July. If you visit outside of mango season, the orchards are still green and interesting to walk through — the trees have a distinctive branching pattern, and the structure of a well-maintained orchard is geometric in a way that feels intentional even though it grew naturally.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Sunrise%2C_Dinajpur%2C_Bangladesh.jpg',
      alt: 'Sunrise over a mango garden in Dinajpur, Bangladesh with a monk walking through',
      caption: 'Sunrise through a mango garden in Dinajpur — the morning light filtering through the canopy of a mature mango orchard. Dinajpur district has over 7,100 mango orchards, making it one of the most significant mango-producing regions in Bangladesh. Photo: Wikimedia Commons, October 2012.'
    },
    {
      type: 'heading',
      content: 'The Fish Ponds'
    },
    {
      type: 'paragraph',
      content: 'Almost every village in northern Bangladesh has at least one pond — and in some areas, like the Chak-Chandira village in Naogaon district, there are said to be 365 ponds, one for every day of the year. These are not decorative water features. They are working aquaculture systems, producing tilapia, carp, rohu, and catfish that supply the local protein economy.'
    },
    {
      type: 'paragraph',
      content: 'The household aquaculture-horticulture model is particularly interesting. A family digs a pond, raises fish in it, and uses the pond banks to grow vegetables. The fish waste fertilizes the vegetables through water seepage, and the vegetable runoff provides nutrients for the pond ecosystem. It is a closed-loop system that has been practiced for generations — sustainable not because anyone designed it that way, but because it emerged from the practical need to maximize food production from limited land.'
    },
    {
      type: 'paragraph',
      content: 'If you are staying with a village family that has a pond, they may invite you to watch — or participate in — a fish harvest. The method is traditional: nets are dragged through the pond from both ends, the fish are corralled into the shallow edge, and then caught by hand or with smaller nets. It is messy, physical, and surprisingly fun. The fish you catch are cooked that evening, and the meal that follows is the most direct farm-to-table experience you can have in Bangladesh.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Women_operated_aquaculture.jpg',
      alt: 'Women managing a household aquaculture and horticulture system in Bangladesh',
      caption: 'A household aquaculture-horticulture system in Bangladesh — fish in the pond, vegetables on the banks, and a closed-loop cycle that has sustained rural families for generations. This integrated approach is the foundation of northern Bangladesh\'s food security. Photo: Wikimedia Commons, August 2012.'
    },
    {
      type: 'heading',
      content: 'The Jute Harvest'
    },
    {
      type: 'paragraph',
      content: 'If you are visiting between June and August — the monsoon season — you will encounter jute. Bangladesh is the world\'s second-largest jute producer after India, and the northern districts contribute significantly to the national output. Jute is a fiber crop that grows in standing water, and the harvesting process is one of the most visually striking agricultural activities in the country.'
    },
    {
      type: 'paragraph',
      content: 'Farmers wade into flooded fields and cut the jute stalks at the base using a saw-like spade. The stalks are bundled and then submerged in ponds for retting — a process where the fibers separate from the woody core through bacterial decomposition. After 10 to 15 days, the fibers are stripped from the stalks by hand, washed, and dried in the sun. The result is the golden fiber — raw jute that will eventually become sacks, rugs, textiles, and the famous satranji floor mats of Rangpur.'
    },
    {
      type: 'paragraph',
      content: 'Watching a jute harvest is a full sensory experience: the smell of the retting ponds (pungent, earthy, and unmistakable), the sight of the golden fibers drying in the sun on bamboo racks, the sound of the farmers stripping the fiber with practiced speed. It is also an activity that most Bangladeshis in cities have never seen — and for international visitors, it is a glimpse into the production chain of one of the country\'s most important exports.'
    },
    {
      type: 'heading',
      content: 'The Homestay Experience'
    },
    {
      type: 'paragraph',
      content: 'The heart of agro tourism is the homestay. Platforms like Agro Tourism Bangladesh (agrotourismbd.com) and Sofhor Tourism (sofhor.com) connect travelers with farming families who offer accommodation, meals, and the opportunity to participate in daily agricultural activities. The cost is approximately 3,000 to 5,000 BDT per night for local visitors — including food, accommodation, and guided farm activities.'
    },
    {
      type: 'paragraph',
      content: 'The homestay experience is not luxury. You sleep on a bed in a village home, eat what the family eats, wake up when they wake up, and spend the day either observing or helping with whatever agricultural activity is in season. The food is the highlight: rice you watched being transplanted, fish from the family pond, vegetables from the garden, and mustard oil pressed from the fields you walked through. It is the most direct connection between the land and the plate that exists in Bangladesh.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Rural_village%2C_Kurigram%2C_Bangladesh.jpg',
      alt: 'Rural village scene in Kurigram, Bangladesh with traditional houses and agricultural land',
      caption: 'A rural village in northern Bangladesh — the kind of setting where agro tourism homestays take place. The houses, the ponds, the surrounding fields, and the daily agricultural rhythm are not a tourist performance. They are the real life of the people who host you. Photo: Wikimedia Commons, August 2022.'
    },
    {
      type: 'heading',
      content: 'The Weekly Haat'
    },
    {
      type: 'paragraph',
      content: 'Every upazila in northern Bangladesh has a weekly haat — a traditional open-air market where farmers bring their produce, artisans sell their crafts, and the community gathers for commerce and conversation. The Dhelapir Weekly Haat in Saidpur, Nilphamari, is one of the most well-known, but every district has its own.'
    },
    {
      type: 'paragraph',
      content: 'The haat is where the agricultural economy comes alive. Farmers sell vegetables they harvested that morning. Fishermen bring their catch from the ponds. Women sell homemade pickles, dried fish, and traditional sweets. Bamboo artisans display baskets, trays, and household items. It is not a tourist market — it is a real market, and visitors who attend are participating in the actual economic life of the community, not watching a curated version of it.'
    },
    {
      type: 'heading',
      content: 'When to Go'
    },
    {
      type: 'paragraph',
      content: 'The agricultural calendar determines everything. Here is what to expect in each season.'
    },
    {
      type: 'paragraph',
      content: 'December through February is the mustard bloom season and Boro rice transplanting. The landscape is at its most colorful — yellow mustard fields, green rice seedlings, and the cool winter weather makes walking through fields comfortable. This is also the season when you can combine agro tourism with the Kanchenjunga Himalayan view from Panchagarh and the migratory birds at Ramsagar National Park in Dinajpur.'
    },
    {
      type: 'paragraph',
      content: 'March through May is the transition period. Mustard is harvested, rice paddies fill with water, and the early mango varieties begin to ripen. The weather warms rapidly — April and May are hot and humid, but the agricultural activity is at its peak, and the mango orchards are in full bloom and early fruit.'
    },
    {
      type: 'paragraph',
      content: 'June through August is monsoon season and jute harvest. The fields are flooded, the jute is cut and retted, and the landscape is intensely green. This is the most physically challenging time to visit — heat, humidity, and rain — but also the most rewarding for visitors who want to see the jute production process and experience the monsoon agriculture that defines the Bengali growing cycle.'
    },
    {
      type: 'paragraph',
      content: 'September through November is the Aman rice harvest and the post-monsoon landscape. The rice is golden, the harvest is in full swing, and the mustard is planted as the rice comes off the fields. This is also when Nabanna — the harvest festival — is celebrated in villages across the region, with traditional sweets, music, and community feasting.'
    },
    {
      type: 'callout',
      content: 'Agro tourism is not about watching farmers work. It is about understanding that the food on your plate is the result of someone standing knee-deep in mud at 6 AM, pushing rice seedlings into the earth, one handful at a time. When you participate in that work — even for an hour — you understand agriculture in a way that no visit to a supermarket can teach.',
      source: 'ESDO Agro Tourism Note, 2025'
    },
    {
      type: 'heading',
      content: 'Getting There'
    },
    {
      type: 'paragraph',
      content: 'From Dhaka, the agro tourism circuit is accessible via the same routes as the heritage and eco-tourism destinations. Buses to Dinajpur take 8 to 10 hours from Gabtoli terminal (৳1,200 to ৳1,800 AC). From Dinajpur town, local auto-rickshaws and vans connect to the mustard fields of Khansama (20 km), the mango orchards of Raniganj (30 km), and the village homestays arranged through Agro Tourism Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'For a complete agro-tourism experience, plan a minimum of 4 days: one day for the mustard fields and rice paddies around Dinajpur, one day for the mango orchards and fish ponds, one day for the weekly haat and village life, and one day for the Panchagarh tea gardens (80 km north of Dinajpur), which add the tea-picking dimension to the agricultural experience.'
    },
    {
      type: 'paragraph',
      content: 'Agro Tourism Bangladesh (agrotourismbd.com, phone: +880 9613000200) is the most organized platform for arranging homestays, guided farm visits, and hands-on agricultural experiences. Sofhor Tourism (sofhor.com, phone: 01707-500505) also offers rural experiences including tea garden tours and village stays.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'Agro tourism in northern Bangladesh is not a polished product. The roads are rough, the accommodation is basic, and there is no English-language signage at most farms. But what it lacks in infrastructure, it makes up for in authenticity. You are not visiting a farm that has been set up for tourists. You are visiting a farm that feeds a family, and the farmer is letting you into their life.'
    },
    {
      type: 'paragraph',
      content: 'The experience changes you — not in a dramatic, life-altering way, but in a quiet, persistent way. After you have stood in a rice paddy, walked through mustard fields, picked a mango from a tree, and eaten fish caught from a village pond, the food on your plate in Dhaka looks different. You know what it took to get there. And that knowledge, once acquired, does not go away.'
    },
    {
      type: 'paragraph',
      content: 'That is the value of agro tourism. Not that it is comfortable. Not that it is convenient. But that it is real. And in a world of curated experiences and managed tourist attractions, the real thing is increasingly rare.'
    },
    {
      type: 'callout',
      content: 'The best way to understand Bangladesh is not to visit its cities or its monuments. It is to stand in its fields. Because Bangladesh is, at its core, an agricultural civilization — and the fields are where that civilization lives, works, and feeds itself.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop',
      alt: 'Open agricultural landscape at golden hour in rural Bangladesh',
      caption: 'The agricultural landscape of northern Bangladesh at sunset — flat, open, and golden. This is the land that feeds a nation, and for visitors willing to slow down and participate, it offers an experience that no conventional tourism can match.'
    }
  ]
};

const idx = posts.findIndex(p => p.slug === 'agro-tourism-northern-bangladesh');
if (idx !== -1) {
  posts[idx] = newPost;
  console.log('Updated existing post');
} else {
  posts.push(newPost);
  console.log('Added new post');
}

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');

const s = newPost.sections;
console.log('Sections: ' + s.length);
console.log('Images: ' + s.filter(x => x.type === 'image').length);
console.log('Wikimedia real images: ' + s.filter(x => x.type === 'image' && x.src && x.src.includes('wikimedia')).length);
console.log('Unsplash images: ' + s.filter(x => x.type === 'image' && x.src && x.src.includes('unsplash')).length);
console.log('Paragraphs: ' + s.filter(x => x.type === 'paragraph' || x.type === 'lead').length);
console.log('Headings: ' + s.filter(x => x.type === 'heading').length);
console.log('Callouts: ' + s.filter(x => x.type === 'callout').length);
console.log('Tables/Charts: ' + s.filter(x => ['stats-grid','data-bar','comparison','feature-grid','steps'].includes(x.type)).length);
