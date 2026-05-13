const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  "id": "ramrai-dighi-migratory-birds",
  "title": "Siberian Flamingos in a Bangladeshi Village Pond: The Winter Miracle of Ramrai Dighi",
  "slug": "ramrai-dighi-migratory-birds",
  "author": "ESDO Eco Tourism",
  "date": "2026-01-20",
  "readTime": "14 min",
  "category": "Wildlife",
  "featured": true,
  "excerpt": "A 42-acre village pond in Thakurgaon attracts birds from Siberia, Mongolia, Tibet, and Serbia every winter — including Greater Flamingos that surprised wildlife officials. You don't need to fly to Africa. You need a bus ticket to Thakurgaon.",
  "heroImage": "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=1600&h=700&fit=crop",
  "heroAlt": "Flock of flamingos standing in shallow water at sunrise",
  "sections": [
    {
      "type": "lead",
      "content": "In January 2025, a wildlife official in Thakurgaon spotted something that shouldn't exist in Bangladesh: a group of Greater Flamingos, standing knee-deep in the waters of Ramrai Dighi — a 42-acre village pond in Ranisankail Upazila, 500 kilometers from Dhaka. These birds had flown in from as far as Siberia, Mongolia, the Tibetan plateau, and Serbia to escape freezing winter temperatures. And they chose a pond in rural northern Bangladesh as their winter home."
    },
    {
      "type": "paragraph",
      "content": "Most Bangladeshis think you need to travel to Kenya, Sri Lanka, or the Rann of Kutch to see flamingos. They're wrong. Every winter, between December and February, a small village pond in Thakurgaon becomes one of the most remarkable bird sanctuaries in South Asia — and almost nobody from Dhaka knows about it."
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=1200&h=500&fit=crop",
      "alt": "Pink flamingos standing in shallow water at golden hour",
      "caption": "Greater Flamingos were spotted at Ramrai Dighi for the first time during the 2024-2025 winter season — an arrival that surprised local wildlife officials. A 42-acre village pond in Thakurgaon now hosts birds that typically visit only Africa's great rift valley lakes."
    },
    {
      "type": "stats-grid",
      "items": [
        { "number": "126+", "label": "bird species recorded", "sublabel": "34 species are migratory" },
        { "number": "42.2", "label": "acres of water", "sublabel": "900m × 400m reservoir" },
        { "number": "3,000+", "label": "kilometers flown", "sublabel": "from Siberia, Mongolia, Tibet, Serbia" },
        { "number": "Dec-Feb", "label": "peak season", "sublabel": "birds rest on water by day, lychee orchards by night" }
      ]
    },
    {
      "type": "heading",
      "content": "What Is Ramrai Dighi?"
    },
    {
      "type": "paragraph",
      "content": "Ramrai Dighi — also called Ranisagar, renamed in 2002 — is the largest and oldest reservoir in Thakurgaon district. Located in Uttargao village, just 4 kilometers from Ranisankail town, it measures roughly 900 meters by 400 meters and covers 42.2 acres. It's the second-largest ancient reservoir in the entire Varendra region of North Bengal."
    },
    {
      "type": "paragraph",
      "content": "But size alone doesn't make it special. What makes Ramrai Dighi extraordinary is what happens here every winter: thousands of migratory birds arrive from three continents to escape freezing temperatures, and the lake transforms into what locals call a 'festive look' — a surface dotted with white herons, wild ducks, and the occasional flash of pink from flamingos."
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
      "alt": "Misty morning over a calm lake surrounded by trees",
      "caption": "Winter mornings at Ramrai Dighi — mist rises from the still water, lychee orchards line the banks, and thousands of birds rest on the surface. The scene is described by visitors as 'a lake wearing a festive look' at dawn."
    },
    {
      "type": "heading",
      "content": "The Birds That Fly In"
    },
    {
      "type": "paragraph",
      "content": "The species list reads like an ornithologist's dream. Northern Pintail ducks from the Arctic tundra. Common Teal from Central Asian wetlands. Mallard ducks from European marshes. White Herons that travel from the Himalayan foothills. Sarus Cranes — the world's tallest flying bird, standing up to 1.8 meters tall. Common Snipe, Long-legged Buzzard, Pied Kingfishers, and dozens of wild duck species whose names most Bangladeshis have never heard."
    },
    {
      "type": "paragraph",
      "content": "The Greater Flamingo arrival in 2024-2025 was the surprise of the season. Wildlife officials didn't expect flamingos this far north in Bangladesh — they typically stay in coastal areas like the Sundarbans or migrate to India's western salt marshes. But Ramrai Dighi's calm waters, abundant fish, and protected location within lychee orchards created an unexpected haven."
    },
    {
      "type": "feature-grid",
      "title": "Species You'll Spot at Ramrai Dighi",
      "items": [
        {
          "icon": "🦩",
          "title": "Greater Flamingo",
          "text": "First spotted 2024-2025. The surprise arrival — these birds typically visit Africa and India's western coast, not northern Bangladesh wetlands."
        },
        {
          "icon": "🦆",
          "title": "Northern Pintail & Mallard",
          "text": "Arctic and European duck species that migrate 3,000+ km to spend Bangladesh's mild winter on these calm waters."
        },
        {
          "icon": "🦢",
          "title": "White Heron & Sarus Crane",
          "text": "The Sarus Crane is the world's tallest flying bird at 1.8m. White Herons turn the lake surface into a moving white landscape at dawn."
        },
        {
          "icon": "🦅",
          "title": "Long-legged Buzzard",
          "text": "A raptor from the Tibetan plateau and Central Asian steppes, circling above the reservoir on thermal currents during winter mornings."
        },
        {
          "icon": "🐦",
          "title": "Common Snipe & Pied Kingfisher",
          "text": "Small but spectacular — the kingfisher hovers before diving, and the snipe's camouflage makes it a challenge for experienced birders."
        },
        {
          "icon": "🌿",
          "title": "126+ Species Total",
          "text": "A scientific survey documented 126 bird species in the wider Ramrai Dighi region, with 34 being migratory visitors from other continents."
        }
      ]
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1480044965905-02098d43940d?w=1200&h=500&fit=crop",
      "alt": "Flock of white birds floating on calm lake water",
      "caption": "White herons and migratory ducks resting on the surface of Ramrai Dighi — by mid-morning, the lake's water is almost entirely covered with birds from Siberia, Mongolia, and Europe."
    },
    {
      "type": "heading",
      "content": "The Dawn Experience"
    },
    {
      "type": "paragraph",
      "content": "Birdwatchers who visit Ramrai Dighi describe one specific moment as the reason they come back: dawn. In the early morning, when winter mist rises from the still water and the first light hits the lake surface, the scene is described as 'the lake wearing a festive look.' Thousands of white herons stand in the shallows like sentinels. Wild ducks paddle in formation. The occasional pink flamingo wades through the reeds, its reflection creating a mirror image in the copper-gold water."
    },
    {
      "type": "paragraph",
      "content": "At night, the birds don't stay on the water. They move into the lychee orchards that line the banks — trees that provide shelter from wind and predators. The orchards become a living canopy of resting wings. In the morning, they return to the lake in a mass movement that birdwatchers say is worth the 10-hour bus journey from Dhaka alone."
    },
    {
      "type": "callout",
      "content": "The birds rest on Ramrai Dighi's water during the day and shelter in nearby lychee orchards at night. The trees provide natural protection from wind and predators — a symbiotic relationship between the ancient reservoir and the agricultural landscape that surrounds it.",
      "source": "Field observation reports, TBS News January 2025"
    },
    {
      "type": "heading",
      "content": "Why This Pond? Why Here?"
    },
    {
      "type": "paragraph",
      "content": "The question every visitor asks: why would birds fly 3,000 kilometers from Siberia to a village pond in Bangladesh instead of stopping at larger, more famous wetlands? The answer lies in a combination of factors that make Ramrai Dighi uniquely suited for winter migration."
    },
    {
      "type": "list",
      "items": [
        { "title": "Calm, Shallow Waters:", "text": "The reservoir is shallow enough for wading birds to stand and feed, but deep enough to support fish populations that attract piscivorous species like kingfishers and herons." },
        { "title": "Lychee Orchard Buffer:", "text": "The surrounding lychee orchards provide nighttime roosting habitat — a feature that most open lakes and rivers lack. Birds can rest on water by day and in trees by night." },
        { "title": "Minimal Human Disturbance:", "text": "Unlike the Tanguar Haor or the Sundarbans, Ramrai Dighi sees very few tourists. There are no entry fees, no crowds, no boat traffic. The birds are left undisturbed." },
        { "title": "Mild Winter Temperatures:", "text": "Northern Bangladesh's winter (12-20°C) is significantly warmer than the freezing temperatures these birds experience in Siberia, Mongolia, and Tibet — and milder than northern India, where cold snaps can be severe." },
        { "title": "Abundant Food Sources:", "text": "The reservoir supports fish, aquatic insects, mollusks, and plant matter — enough variety to sustain different species with different dietary needs." },
        { "title": "Geographic Position:", "text": "Ramrai Dighi sits along the Central Asian Flyway — a major migratory route that birds follow from their breeding grounds to winter destinations. It's a natural stopping point on a continental-scale journey." }
      ]
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1518173946687-a1e0e8e3c1e5?w=1200&h=500&fit=crop",
      "alt": "Close-up of a white egret standing in calm water",
      "caption": "White herons and egrets are among the most commonly seen resident birds at Ramrai Dighi, standing motionless in the shallows while migratory ducks paddle around them."
    },
    {
      "type": "heading",
      "content": "The Journey from Dhaka"
    },
    {
      "type": "paragraph",
      "content": "Getting to Ramrai Dighi is part of the experience. The journey from Dhaka to Thakurgaon is approximately 500 kilometers — an 8 to 10-hour bus ride that takes you through the changing landscape of central and northern Bangladesh. You leave the urban sprawl behind, pass through the wetland regions of Mymensingh and Jamalpur, cross the Jamuna River, and eventually enter the barind tract — the red-soil plateau region of North Bengal that looks and feels fundamentally different from the rest of the country."
    },
    {
      "type": "data-bar",
      "title": "How to Reach Ramrai Dighi from Dhaka",
      "items": [
        { "label": "Bus (Dhaka to Thakurgaon)", "value": "8-10 hours", "percent": 60, "color": "color-primary" },
        { "label": "Local transport (Thakurgaon to Ranisankail)", "value": "45 min", "percent": 8, "color": "color-primary-light" },
        { "label": "Rickshaw/auto (Ranisankail to Ramrai Dighi)", "value": "15 min", "percent": 4, "color": "color-accent" },
        { "label": "Total estimated travel time", "value": "10-11 hours", "percent": 100, "color": "color-primary-dark" }
      ],
      "source": "Source: ESDO Travel Guide, Thakurgaon District"
    },
    {
      "type": "stats-grid",
      "items": [
        { "number": "৳1,200", "label": "AC bus ticket", "sublabel": "Gabtoli terminal to Thakurgaon, one way" },
        { "number": "৳200", "label": "local transport", "sublabel": "auto-rickshaw Thakurgaon to Ramrai Dighi" },
        { "number": "৳0", "label": "entry fee", "sublabel": "no tickets, no crowds, no restrictions" },
        { "number": "500 km", "label": "total distance", "sublabel": "Dhaka to Ramrai Dighi via Thakurgaon" }
      ]
    },
    {
      "type": "heading",
      "content": "The Best Time to Visit"
    },
    {
      "type": "paragraph",
      "content": "Timing is everything at Ramrai Dighi. The migratory birds arrive in November and stay through February, but the experience varies significantly depending on when you visit."
    },
    {
      "type": "comparison",
      "title": "Month-by-Month Birdwatching Guide",
      "items": [
        ["December", "Early arrivals. Northern Pintail, Common Teal, and Mallards begin appearing. Moderate numbers. Crisp winter mornings with excellent visibility.", "Best for photographers who want fewer crowds and good light"],
        ["January", "Peak season. Maximum bird diversity. Greater Flamingos spotted in 2024-25. Thousands of herons, ducks, and waders. Lake 'wears a festive look.'", "Best overall experience — highest bird count and species diversity"],
        ["February", "Late season. Birds begin preparing for return migration. Still excellent numbers, but declining toward month-end. Warmer mornings.", "Good for last-minute visits; birds are still present but departing soon"],
        ["November", "First arrivals. Scout species begin appearing. Lower numbers but anticipation of the season ahead.", "For early birds — fewer visitors, first arrivals, quiet atmosphere"],
        ["March onwards", "Most migratory birds have departed. Resident species remain — herons, kingfishers, local waterfowl.", "Not recommended for migratory birdwatching"]
      ]
    },
    {
      "type": "callout",
      "content": "The absolute best time to visit Ramrai Dighi is early January, between 6:00 AM and 9:00 AM. This is when the maximum number of species are present, the morning mist creates the most dramatic photography conditions, and the birds are most active on the water before retreating to the lychee orchards for midday rest.",
      "source": "ESDO Field Guide — Ramrai Dighi Birdwatching"
    },
    {
      "type": "heading",
      "content": "What It Feels Like to Stand There"
    },
    {
      "type": "paragraph",
      "content": "There are no ticket counters. No entry gates. No tour guides with flags. You arrive by rickshaw from Ranisankail town, walk down a dirt path through lychee orchards, and suddenly the lake opens up before you — 42 acres of still water dotted with thousands of birds."
    },
    {
      "type": "paragraph",
      "content": "The first thing you notice is the sound. It's not loud — it's a low, constant murmur of bird calls, wing flaps, and water splashes. The second thing you notice is the scale. From photos, Ramrai Dighi looks like a large pond. Standing at its edge, you realize it's vast — the far bank is 400 meters away, and on a misty morning, the horizon seems to dissolve into the water."
    },
    {
      "type": "paragraph",
      "content": "Local villagers sit at the edge selling tea and snacks from small stalls. They've been watching these birds arrive every winter for decades. They can identify species by sight and will point out the flamingos, the cranes, and the ducks that arrived 'just yesterday.' Their knowledge is informal but remarkable — built through years of observation, not textbooks."
    },
    {
      "type": "steps",
      "title": "A Morning at Ramrai Dighi — What to Expect",
      "items": [
        { "icon": "🌅", "title": "6:00 AM — Arrive at Dawn", "text": "Reach the lake before sunrise. The morning mist is at its thickest, and the water is still. Birds are just beginning to stir on the surface. This is the golden hour for photography." },
        { "icon": "🔭", "title": "6:30 AM — Birds Become Active", "text": "As light increases, the lake transforms. Herons stretch their wings. Ducks begin paddling in groups. Flamingos wade through the shallows. The 'festive look' that locals describe becomes visible." },
        { "icon": "🍵", "title": "7:30 AM — Tea with Locals", "text": "Village tea stalls near the lake serve hot tea and simple snacks. The stall owners are informal guides — ask them what birds arrived recently. They know more than you'd expect." },
        { "icon": "📸", "title": "8:00 AM — Best Photography Light", "text": "The sun is up, mist is lifting, and the water turns copper-gold. This is when you get the shots that make people from Dhaka ask: 'Where is this?'" },
        { "icon": "🚶", "title": "9:00 AM — Walk the Banks", "text": "Walk along the lake's edge. Different sections attract different species. The northern bank near the lychee orchards is best for herons. The southern shallows attract ducks and waders." },
        { "icon": "🌳", "title": "10:00 AM — Visit the Orchards", "text": "By mid-morning, some birds have moved into the lychee orchards for shade. Walking through the orchards, you'll find birds resting in the branches — a different perspective from the lake itself." }
      ]
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&h=500&fit=crop",
      "alt": "Birds flying over a lake at sunrise with golden light",
      "caption": "Early morning at Ramrai Dighi — as sunlight lifts the mist, birds take flight over the water. The lake's 42-acre surface becomes a living canvas of movement, sound, and color."
    },
    {
      "type": "heading",
      "content": "Conservation Concerns"
    },
    {
      "type": "paragraph",
      "content": "Ramrai Dighi's growing popularity brings both opportunity and risk. The lake has no formal protected status — it's a village pond, not a national park or wildlife sanctuary. This means there are no rangers, no conservation budgets, and no legal framework to protect the birds or their habitat."
    },
    {
      "type": "paragraph",
      "content": "Local environmental groups have raised concerns about pesticide runoff from surrounding agricultural fields, plastic waste from increasing visitors, and the potential disturbance to birds if tourism grows without management. The flamingo sighting in 2024-2025 attracted media attention and more visitors — which is positive for awareness but creates pressure on an unmanaged ecosystem."
    },
    {
      "type": "callout",
      "content": "ESDO's position: Ramrai Dighi is exactly the kind of natural asset that eco-tourism should protect, not exploit. We encourage visitors to follow responsible practices — no littering, no disturbing the birds, no loud music, no plastic waste. The birds choose this pond because it's quiet and clean. If we lose those qualities, they will choose somewhere else.",
      "source": "ESDO Conservation Statement, 2025"
    },
    {
      "type": "heading",
      "content": "Combining with Other Thakurgaon Destinations"
    },
    {
      "type": "paragraph",
      "content": "Ramrai Dighi is best experienced as part of a broader Thakurgaon itinerary. The district offers several other attractions within a short distance, making a 2-3 day trip worthwhile."
    },
    {
      "type": "feature-grid",
      "title": "Nearby Attractions from Ramrai Dighi",
      "items": [
        {
          "icon": "🌳",
          "title": "Surjapuri Mango Tree (Baliadangi)",
          "text": "A 220-year-old mango tree covering half an acre — the largest in South Asia. 25 km from Ramrai Dighi. A living heritage site that defies belief until you stand inside it."
        },
        {
          "icon": "🍵",
          "title": "Ronbag Tea Garden (Baliadangi)",
          "text": "One of the few tea gardens outside Sylhet, near the India border. Rolling green terraces in a landscape where tea shouldn't grow. 30 km from Ramrai Dighi."
        },
        {
          "icon": "🏛️",
          "title": "Haripur Rajbari (Haripur)",
          "text": "A crumbling 1893 zamindar palace with lineage dating to 1400 CE. A disappearing heritage site — every year there's less of it left to see. 20 km from Ramrai Dighi."
        }
      ]
    },
    {
      "type": "heading",
      "content": "Practical Guide"
    },
    {
      "type": "list",
      "items": [
        { "title": "What to Bring:", "text": "Binoculars (essential for bird identification), a camera with zoom lens, warm clothing (December-January mornings are 8-12°C), a hat, drinking water, and a small backpack. No special equipment needed — just patience." },
        { "title": "Getting Around:", "text": "From Dhaka, take an AC bus to Thakurgaon (Hanif, Shyamoli, or other operators — ৳1,200-1,800). From Thakurgaon town, hire an auto-rickshaw to Ranisankail (৳150-200, 45 minutes). From Ranisankail, another auto or rickshaw to Ramrai Dighi (৳50-80, 15 minutes)." },
        { "title": "Accommodation:", "text": "Stay in Thakurgaon town — basic guesthouses and hotels are available. For a more authentic experience, book a homestay through ESDO's local office. Waking up in a village and driving to the lake for dawn is the ideal approach." },
        { "title": "Food:", "text": "Tea and snacks are available at stalls near the lake. For proper meals, eat at your homestay or in Ranisankail town. Local restaurants serve simple Bengali meals — daal, rice, vegetable curry, and fresh river fish." },
        { "title": "Best Photography Tips:", "text": "Arrive before sunrise. Use a telephoto lens (200mm+). Shoot in burst mode — birds move fast. The golden hour lasts roughly 30 minutes from 6:30 to 7:00 AM in January. Don't use flash — it disturbs the birds." },
        { "title": "What Not to Do:", "text": "Don't play bird calls from speakers to attract birds — it disrupts their natural behavior. Don't approach nesting areas. Don't leave plastic waste. Don't visit in large noisy groups. The lake's value is its quietness — protect it." }
      ]
    },
    {
      "type": "data-bar",
      "title": "Estimated Budget: Ramrai Dighi Day Trip from Thakurgaon",
      "items": [
        { "label": "Transport (auto rickshaw return)", "value": "৳300-400", "percent": 25, "color": "color-primary" },
        { "label": "Tea and snacks at lake", "value": "৳100-150", "percent": 10, "color": "color-primary-light" },
        { "label": "Homestay (one night)", "value": "৳500-800", "percent": 35, "color": "color-accent" },
        { "label": "Meals (homestay, 2 meals)", "value": "৳300-500", "percent": 20, "color": "color-primary" },
        { "label": "Total Day Trip Budget", "value": "৳1,200-1,850", "percent": 100, "color": "color-primary-dark" }
      ],
      "source": "Source: ESDO Eco Tourism Budget Guide, 2025"
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop",
      "alt": "Rural Asian village landscape with water body and green trees",
      "caption": "The landscape surrounding Ramrai Dighi — lychee orchards, agricultural fields, and the quiet rural life of northern Bangladesh. The lake exists within this ecosystem, not apart from it."
    },
    {
      "type": "heading",
      "content": "The Real Story"
    },
    {
      "type": "paragraph",
      "content": "The most remarkable thing about Ramrai Dighi isn't the birds. It's the fact that a 42-acre village pond — with no marketing, no infrastructure, no entry fee, and no international reputation — attracts wildlife from three continents every winter. The birds don't know about Bangladesh's tourism industry. They don't care about infrastructure ratings or TripAdvisor reviews. They know one thing: this water is clean, this place is quiet, and the lychee trees provide shelter."
    },
    {
      "type": "paragraph",
      "content": "That is the real value of Ramrai Dighi. It's not a developed tourist destination. It's a natural phenomenon that happens to exist in a village in Thakurgaon — and it will continue to exist as long as the water stays clean, the orchards remain standing, and visitors respect the silence."
    },
    {
      "type": "paragraph",
      "content": "The birds have been making this choice for decades. The question is whether we'll be smart enough to protect the place they've chosen."
    },
    {
      "type": "callout",
      "content": "Every winter, birds from Siberia, Mongolia, Tibet, and Serbia make a 3,000-kilometer journey to a village pond in Thakurgaon. They don't need luxury hotels or guided tours. They need clean water, quiet surroundings, and lychee trees to roost in. If we can provide those four things, the miracle will continue. If we can't, the birds will go somewhere else — and we'll have lost something we didn't even know we had.",
      "source": "ESDO Eco Tourism Vision Statement, 2025"
    },
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop",
      "alt": "Open landscape at golden hour with warm light over water and fields",
      "caption": "Ramrai Dighi at sunset — the water turns copper-gold, the lychee orchards cast long shadows, and the birds prepare for another night. This is a place that has existed for centuries, and will continue to exist if we let it."
    }
  ]
};

// Check if post already exists
const idx = posts.findIndex(p => p.slug === 'ramrai-dighi-migratory-birds');
if (idx !== -1) {
  posts[idx] = newPost;
  console.log('Updated existing post: ramrai-dighi-migratory-birds');
} else {
  posts.push(newPost);
  console.log('Added new post: ramrai-dighi-migratory-birds');
}

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log('Total posts: ' + posts.length);
