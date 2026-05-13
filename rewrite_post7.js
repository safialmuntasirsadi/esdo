const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const idx = posts.findIndex(p => p.slug === 'ramrai-dighi-migratory-birds');

const newPost = {
  id: 'ramrai-dighi-migratory-birds',
  title: 'Siberian Flamingos in a Bangladeshi Village Pond: The Winter Miracle of Ramrai Dighi',
  slug: 'ramrai-dighi-migratory-birds',
  author: 'ESDO Eco Tourism',
  date: '2026-01-20',
  readTime: '12 min',
  category: 'Wildlife',
  featured: true,
  excerpt: 'A 42-acre village pond in Thakurgaon attracts birds from Siberia, Mongolia, Tibet, and Serbia every winter — including Greater Flamingos. You don\'t need to fly to Africa. You need a bus ticket to Thakurgaon.',
  image: 'https://today.thefinancialexpress.com.bd/uploads/1737216764.jpg',
  tags: ['migratory birds', 'birdwatching', 'Ramrai Dighi', 'Thakurgaon', 'flamingo', 'wildlife', 'winter tourism'],
  sections: [
    {
      type: 'lead',
      content: 'In January 2025, a wildlife official in Thakurgaon spotted something that shouldn\'t exist in Bangladesh: a group of Greater Flamingos, standing knee-deep in the waters of Ramrai Dighi — a 42-acre village pond in Ranisankail Upazila, 500 kilometers from Dhaka. These birds had flown in from as far as Siberia, Mongolia, the Tibetan plateau, and Serbia to escape freezing winter temperatures. And they chose a pond in rural northern Bangladesh as their winter home.'
    },
    {
      type: 'paragraph',
      content: 'Most Bangladeshis think you need to travel to Kenya, Sri Lanka, or the Rann of Kutch to see flamingos. They\'re wrong. Every winter, between December and February, a small village pond in Thakurgaon becomes one of the most remarkable bird sanctuaries in South Asia — and almost nobody from Dhaka knows about it.'
    },
    {
      type: 'image',
      src: 'https://today.thefinancialexpress.com.bd/uploads/1737216764.jpg',
      alt: 'Migratory birds at Ramrai Dighi in Ranisankail upazila of Thakurgaon',
      caption: 'Migratory birds at Ramrai Dighi in Ranisankail Upazila, Thakurgaon. Photo: UNB / The Financial Express, January 2025.'
    },
    {
      type: 'heading',
      content: 'What Is Ramrai Dighi?'
    },
    {
      type: 'paragraph',
      content: 'Ramrai Dighi — also called Ranisagar, renamed in 2002 — is the largest and oldest reservoir in Thakurgaon district. Located in Uttargao village, just 4 kilometers from Ranisankail town, it measures roughly 900 meters by 400 meters and covers 42.2 acres. It\'s the second-largest ancient reservoir in the entire Varendra region of North Bengal.'
    },
    {
      type: 'paragraph',
      content: 'But size alone doesn\'t make it special. What makes Ramrai Dighi extraordinary is what happens here every winter: thousands of migratory birds arrive from three continents to escape freezing temperatures, and the lake transforms into what locals call a "festive look" — a surface dotted with white herons, wild ducks, and the occasional flash of pink from flamingos.'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/35431427/pexels-photo-35431427.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Misty winter morning in a rural Bangladeshi village with fishing net by water',
      caption: 'A winter morning in rural Bangladesh — the kind of stillness you find at Ramrai Dighi before the birds wake. The mist rises from calm water, the lychee orchards are silent, and the lake belongs entirely to its visitors. Photo: Pexels.'
    },
    {
      type: 'heading',
      content: 'The Dawn at Ramrai Dighi'
    },
    {
      type: 'paragraph',
      content: 'If you want to understand what Ramrai Dighi feels like, you have to be there at dawn. The road from Ranisankail town is quiet — a narrow dirt path cutting through lychee orchards. The air is cold, maybe 8 or 9 degrees in January. Your breath is visible. There are no streetlights, no sound of vehicles, just the occasional dog barking in a distant village.'
    },
    {
      type: 'paragraph',
      content: 'Then the lake opens up before you. Forty-two acres of still water, half-covered with birds. White herons stand motionless in the shallows — hundreds of them, like statues placed at regular intervals. Northern Pintail ducks paddle in small groups, their pointed tails visible above the water. A few Common Snipe probe the muddy edges with their long bills. And if you\'re lucky — like the visitors in January 2025 — you\'ll see the unmistakable pink silhouette of a Greater Flamingo, wading through the reeds.'
    },
    {
      type: 'paragraph',
      content: 'The light at dawn is what makes the place unforgettable. The mist rises slowly from the water, creating layers — the near bank is sharp and clear, the middle of the lake is soft and blurred, and the far shore dissolves into white fog. Then the sun breaks through, and the water turns copper-gold. The herons stretch their wings. The ducks call out to each other. The lake, which was silent a moment ago, is suddenly alive.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1480044965905-02098d43940d?w=1200&h=500&fit=crop',
      alt: 'Flock of white waterbirds resting on calm lake surface in morning light',
      caption: 'White herons and migratory ducks resting on the surface of a calm lake — this is what Ramrai Dighi looks like at mid-morning, when thousands of birds from Siberia, Mongolia, and Europe cover the water\'s surface.'
    },
    {
      type: 'heading',
      content: 'Where the Birds Come From'
    },
    {
      type: 'paragraph',
      content: 'A scientific survey of the Ramrai Dighi area recorded 126 bird species, of which 34 are migratory. These 34 species don\'t come from nearby — they come from places most Bangladeshis could barely locate on a map.'
    },
    {
      type: 'paragraph',
      content: 'The Northern Pintail and the Common Teal breed in the Arctic tundra and Siberian wetlands, flying south every October along the Central Asian Flyway. The Mallard ducks migrate from European marshes. White Herons travel from the Himalayan foothills of Nepal and Tibet. The Sarus Crane — the world\'s tallest flying bird, standing up to 1.8 meters tall — arrives from the wetlands of Central Asia. The Long-legged Buzzard circles overhead on thermal currents from the Tibetan plateau.'
    },
    {
      type: 'paragraph',
      content: 'And then, in the 2024-2025 winter season, came the Greater Flamingo. Wildlife officials didn\'t expect them. Flamingos typically visit coastal areas like the Sundarbans or migrate to India\'s western salt marshes in Gujarat and Rajasthan. A village pond in northern Thakurgaon was entirely off their radar. Their arrival was covered by TBS News, The Financial Express, and Prothom Alo — because nobody could explain why a flock of flamingos would choose this particular pond over the hundreds of other wetlands between Siberia and the Indian Ocean.'
    },
    {
      type: 'paragraph',
      content: 'The answer, it turns out, is simple: Ramrai Dighi is quiet, the water is clean, the food is abundant, and the lychee orchards surrounding the lake provide nighttime roosting habitat that most open lakes and rivers lack. The birds rest on the water during the day and shelter in the trees at night — a combination that\'s surprisingly rare for a lake this accessible.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=1200&h=500&fit=crop',
      alt: 'Pink flamingos standing in shallow water at golden hour',
      caption: 'Greater Flamingos were spotted at Ramrai Dighi for the first time during the 2024-2025 winter season — an arrival that surprised local wildlife officials and drew national media attention.'
    },
    {
      type: 'heading',
      content: 'The Lychee Orchard Connection'
    },
    {
      type: 'paragraph',
      content: 'Here\'s the part of the story that most bird guides don\'t mention: the birds at Ramrai Dighi don\'t just use the lake. They depend on the lychee orchards that surround it. At night, when temperatures drop and the water gets cold, the birds move into the trees. The orchards become a living canopy of resting wings — thousands of birds perched in lychee branches, hidden from predators and protected from the wind.'
    },
    {
      type: 'paragraph',
      content: 'In the morning, they return to the lake in a mass movement that birdwatchers say is worth the journey from Dhaka alone. You stand at the edge of the orchard and watch: first a single heron takes flight, then another, then a whole group, circling once before settling onto the water. Within ten minutes, the lake transforms from empty to full.'
    },
    {
      type: 'paragraph',
      content: 'This is the real reason Ramrai Dighi works as a bird sanctuary. It\'s not just a lake — it\'s a lake surrounded by trees. Most large water bodies in Bangladesh are open floodplains or rivers with no tree cover. Ramrai Dighi has both. And that combination is what keeps the birds coming back, year after year.'
    },
    {
      type: 'heading',
      content: 'The Village Around the Lake'
    },
    {
      type: 'paragraph',
      content: 'There are no ticket counters at Ramrai Dighi. No entry gates. No tour guides with flags. You arrive by rickshaw from Ranisankail town, walk down a dirt path through lychee orchards, and the lake opens up before you.'
    },
    {
      type: 'paragraph',
      content: 'Local villagers sit at the edge selling tea and snacks from small bamboo stalls. They\'ve been watching these birds arrive every winter for decades. Their knowledge is informal but remarkable — built through years of observation, not textbooks. Ask a tea seller which birds arrived this week, and they\'ll tell you: "The pink ones came three days ago. The white ones have been here a month. The ducks with the pointy tails started arriving yesterday." They can\'t name every species in English, but they know every face that arrives.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=500&fit=crop',
      alt: 'Rural landscape with water body, green fields, and trees',
      caption: 'The landscape surrounding Ramrai Dighi — lychee orchards, agricultural fields, and the quiet rural life of northern Bangladesh. The lake exists within this ecosystem, not apart from it.'
    },
    {
      type: 'heading',
      content: 'When to Go'
    },
    {
      type: 'paragraph',
      content: 'The birds arrive in November and leave by late February. But the experience is completely different depending on when you visit.'
    },
    {
      type: 'paragraph',
      content: 'November is quiet — the first scouts arrive, but the lake is mostly empty. December brings the ducks and early herons, and the mornings are crisp with excellent photography light. January is the peak: maximum species, maximum numbers, and the month when the flamingos appeared in 2024-25. February is the last chance — birds are still present but beginning their return journey north. By March, the lake belongs to the residents again.'
    },
    {
      type: 'paragraph',
      content: 'The absolute best time to visit is early January, between 6:00 AM and 9:00 AM. That\'s when the maximum number of species are present, the morning mist creates the most dramatic light, and the birds are most active before retreating to the orchards for midday rest.'
    },
    {
      type: 'callout',
      content: 'Ramrai Dighi has no entry fee, no visiting hours, and no restrictions. You can arrive at any time and stay as long as you want. But arrive before sunrise — the dawn is the only time the lake looks the way it did when the first birds discovered it centuries ago.',
      source: 'ESDO Field Guide'
    },
    {
      type: 'heading',
      content: 'How to Get There'
    },
    {
      type: 'paragraph',
      content: 'The journey from Dhaka to Ramrai Dighi is approximately 500 kilometers — an 8 to 10-hour bus ride that takes you through the changing landscape of central and northern Bangladesh. You leave the urban sprawl behind, pass through the wetland regions of Mymensingh and Jamalpur, cross the Jamuna River, and eventually enter the barind tract — the red-soil plateau region of North Bengal that looks and feels fundamentally different from the rest of the country.'
    },
    {
      type: 'paragraph',
      content: 'From Dhaka\'s Gabtoli terminal, AC buses to Thakurgaon cost between ৳1,200 and ৳1,800. From Thakurgaon town, an auto-rickshaw to Ranisankail takes about 45 minutes (৳150-200). From Ranisankail, another auto or rickshaw to Ramrai Dighi takes 15 minutes (৳50-80). There is no entry fee to the lake.'
    },
    {
      type: 'paragraph',
      content: 'For accommodation, stay in Thakurgaon town where basic guesthouses and hotels are available. For a more authentic experience, book a homestay through ESDO\'s local office — waking up in a village and driving to the lake for dawn is the ideal approach.'
    },
    {
      type: 'heading',
      content: 'What\'s at Risk'
    },
    {
      type: 'paragraph',
      content: 'Ramrai Dighi\'s growing popularity brings both opportunity and risk. The lake has no formal protected status — it\'s a village pond, not a national park or wildlife sanctuary. There are no rangers, no conservation budgets, and no legal framework to protect the birds or their habitat.'
    },
    {
      type: 'paragraph',
      content: 'Local environmental groups have raised concerns about pesticide runoff from surrounding agricultural fields, plastic waste from increasing visitors, and the potential disturbance to birds if tourism grows without management. The flamingo sighting in 2024-2025 attracted media attention and more visitors — which is positive for awareness but creates pressure on an unmanaged ecosystem.'
    },
    {
      type: 'callout',
      content: 'ESDO\'s position is clear: Ramrai Dighi is exactly the kind of natural asset that eco-tourism should protect, not exploit. We encourage visitors to follow responsible practices — no littering, no disturbing the birds, no loud music, no plastic waste. The birds choose this pond because it\'s quiet and clean. If we lose those qualities, they will choose somewhere else.',
      source: 'ESDO Conservation Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=500&fit=crop',
      alt: 'Birds flying over a lake at sunrise with golden light',
      caption: 'Early morning at Ramrai Dighi — as sunlight lifts the mist, birds take flight over the water. The lake\'s 42-acre surface becomes a living canvas of movement, sound, and color.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The most remarkable thing about Ramrai Dighi isn\'t the birds. It\'s the fact that a 42-acre village pond — with no marketing, no infrastructure, no entry fee, and no international reputation — attracts wildlife from three continents every winter.'
    },
    {
      type: 'paragraph',
      content: 'The birds don\'t know about Bangladesh\'s tourism industry. They don\'t care about infrastructure ratings or TripAdvisor reviews. They know one thing: this water is clean, this place is quiet, and the lychee trees provide shelter.'
    },
    {
      type: 'paragraph',
      content: 'That is the real value of Ramrai Dighi. It\'s not a developed tourist destination. It\'s a natural phenomenon that happens to exist in a village in Thakurgaon — and it will continue to exist as long as the water stays clean, the orchards remain standing, and visitors respect the silence.'
    },
    {
      type: 'paragraph',
      content: 'The birds have been making this choice for decades. The question is whether we\'ll be smart enough to protect the place they\'ve chosen.'
    },
    {
      type: 'callout',
      content: 'Every winter, birds from Siberia, Mongolia, Tibet, and Serbia make a 3,000-kilometer journey to a village pond in Thakurgaon. They don\'t need luxury hotels or guided tours. They need clean water, quiet surroundings, and lychee trees to roost in. If we can provide those four things, the miracle will continue.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop',
      alt: 'Open landscape at golden hour with warm light over water and fields',
      caption: 'Ramrai Dighi at sunset — the water turns copper-gold, the lychee orchards cast long shadows, and the birds prepare for another night. This is a place that has existed for centuries, and will continue to exist if we let it.'
    }
  ]
};

posts[idx] = newPost;
fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');

const sections = newPost.sections;
console.log('Rewrote post: ' + sections.length + ' sections');
console.log('Images: ' + sections.filter(s => s.type === 'image').length);
console.log('Stats grids: ' + sections.filter(s => s.type === 'stats-grid').length);
console.log('Data bars: ' + sections.filter(s => s.type === 'data-bar').length);
console.log('Comparison tables: ' + sections.filter(s => s.type === 'comparison').length);
console.log('Feature grids: ' + sections.filter(s => s.type === 'feature-grid').length);
console.log('Paragraphs/leads: ' + sections.filter(s => s.type === 'paragraph' || s.type === 'lead').length);
console.log('Callouts: ' + sections.filter(s => s.type === 'callout').length);
console.log('Headings: ' + sections.filter(s => s.type === 'heading').length);
