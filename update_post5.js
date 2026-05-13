const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSections = [
  {
    "type": "lead",
    "content": "In a village outside Thakurgaon, a woman named Fatima Begum used to earn less than 3,000 taka a month selling vegetables at the local market. Today, she earns 15,000 taka monthly from her homestay — and that doesn't include the extra income from cooking traditional meals for guests, selling homemade pickles, or guiding visitors to the nearby Ramrai Dighi. She didn't take out a loan. She didn't move to Dhaka. She didn't learn English at a language school. She opened her home to visitors through ESDO's homestay program, and it changed everything."
  },
  {
    "type": "paragraph",
    "content": "Homestay-based eco-tourism is not a new concept globally. Japan's minshuku system has operated for centuries. Costa Rica's rural homestay network is the gold standard in Latin America. But in Bangladesh, homestay tourism is in its infancy — and that is precisely why the opportunity is so significant. Every family that joins ESDO's program becomes part of an ecosystem that didn't exist five years ago: trained hosts, certified local guides, conservation funding, organic farming, and heritage documentation, all working together."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=500&fit=crop",
    "alt": "Traditional homestay exterior with garden and natural surroundings",
    "caption": "ESDO's partner homestays in northern Bangladesh are not luxury resorts — they are family homes opened to visitors, offering authentic experiences that no hotel can replicate."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "200+", "label": "families in program", "sublabel": "across Thakurgaon, Panchagarh, and Dinajpur" },
      { "number": "৳15K", "label": "average monthly income", "sublabel": "up from ৳3K before joining the program" },
      { "number": "73%", "label": "women-led homestays", "sublabel": "managed primarily by women in the household" },
      { "number": "15%", "label": "conservation contribution", "sublabel": "of every booking goes to community conservation fund" }
    ]
  },
  {
    "type": "heading",
    "content": "How the Homestay Program Works"
  },
  {
    "type": "paragraph",
    "content": "The program is not simply about opening a spare room. ESDO's homestay initiative is a structured training and certification process that prepares families for hospitality while maintaining the authenticity that makes the experience valuable. The training covers four areas: hospitality standards, food safety, guest management, and cultural interpretation."
  },
  {
    "type": "steps",
    "title": "Homestay Certification Process",
    "items": [
      { "icon": "📋", "title": "Application and Assessment", "text": "Families apply through ESDO's local office. An assessment evaluates the home's condition, available space, and the family's commitment to the program. Basic infrastructure — clean rooms, safe water, functional sanitation — is required." },
      { "icon": "🎓", "title": "Training Program", "text": "A 3-day workshop covers hospitality standards (room preparation, guest communication), food safety (hygiene, storage, traditional recipe presentation), and cultural interpretation (how to share local history, farming practices, and community traditions with visitors)." },
      { "icon": "✅", "title": "Certification and Listing", "text": "Upon completing training, the homestay is certified and listed on ESDO's booking platform. Prices are set at 800-1,500 taka per night, making them accessible to both domestic and international visitors while providing meaningful income to families." },
      { "icon": "📊", "title": "Ongoing Monitoring", "text": "ESDO conducts quarterly reviews of each homestay, checking cleanliness, guest satisfaction, and conservation fund contributions. Families that consistently perform well receive priority for bookings and access to additional training programs." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=500&fit=crop",
    "alt": "Traditional village home interior with simple clean furnishings",
    "caption": "A typical homestay room in northern Bangladesh — simple, clean, and authentic. Guests sleep on traditional beds, eat home-cooked meals, and experience rural life exactly as local families live it."
  },
  {
    "type": "heading",
    "content": "The Economics of a Rural Homestay"
  },
  {
    "type": "paragraph",
    "content": "Let's look at the numbers. A family in rural Thakurgaon typically earns income from agriculture — rice, wheat, or vegetables — with annual yields that fluctuate based on weather, market prices, and input costs. The average annual income from farming a 2-acre plot in northern Bangladesh is approximately 60,000 to 80,000 taka. That's 5,000 to 6,700 taka per month, and it requires constant labor, investment in seeds and fertilizer, and carries weather-related risk."
  },
  {
    "type": "paragraph",
    "content": "Now consider the homestay. A family that hosts 10 guests per month at 1,000 taka per night earns 10,000 taka from room bookings alone. Add the income from meals (500-800 taka per guest per day), guided experiences (300-500 taka per tour), and local product sales (homemade pickles, handicrafts, organic produce), and the total monthly income reaches 15,000 to 20,000 taka. That is 2-3 times the income from farming, with lower physical labor requirements and no weather dependency."
  },
  {
    "type": "data-bar",
    "title": "Monthly Income Comparison: Farming vs Homestay (Northern Bangladesh)",
    "items": [
      { "label": "Subsistence Farming (2 acres)", "value": "৳5,000-6,700/month", "percent": 25, "color": "color-accent" },
      { "label": "Day Labor", "value": "৳3,000-4,000/month", "percent": 18, "color": "color-accent" },
      { "label": "Homestay (10 guests/month)", "value": "৳15,000-20,000/month", "percent": 75, "color": "color-primary" },
      { "label": "Homestay + Guide + Products", "value": "৳20,000-30,000/month", "percent": 100, "color": "color-primary-dark" }
    ],
    "source": "Source: ESDO Homestay Program Income Survey, 2024, Thakurgaon and Panchagarh districts"
  },
  {
    "type": "callout",
    "content": "The most important thing about homestay income is not the amount. It's the stability. Farming income comes once or twice a year, after harvest. Homestay income comes every month, week after week. For a family that has lived with seasonal uncertainty their entire lives, this stability is transformative. It means children can stay in school year-round. It means medical expenses don't require selling land. It means planning for the future is possible, not just surviving the present.",
    "source": "ESDO Community Development Report, 2024"
  },
  {
    "type": "heading",
    "content": "Women at the Center"
  },
  {
    "type": "paragraph",
    "content": "The most significant impact of the homestay program is not economic — it is social. 73% of ESDO's partner homestays are managed primarily by women. This is not an accident. It is a deliberate design choice rooted in the reality that women in rural Bangladesh have fewer income opportunities, less financial autonomy, and greater household responsibilities than men."
  },
  {
    "type": "paragraph",
    "content": "Homestay management aligns naturally with women's existing household roles — cooking, cleaning, guest hospitality — but transforms them from unpaid domestic labor into income-generating activities. A woman who cooks for her family every day is already doing the work that guests value. The homestay program adds the missing pieces: training, pricing, booking, and market access."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "73%", "label": "women-led homestays", "sublabel": "managed primarily by women in the household" },
      { "number": "৳12K", "label": "women's average earnings", "sublabel": "monthly income controlled by women homestay operators" },
      { "number": "89%", "label": "say they have more say", "sublabel": "in household financial decisions since joining program" },
      { "number": "45%", "label": "children's education improved", "sublabel": "better school attendance and supplies reported" }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=500&fit=crop",
    "alt": "Woman preparing traditional food in a rural kitchen",
    "caption": "Women homestay operators in northern Bangladesh are transforming traditional household skills — cooking, hospitality, child care — into income-generating activities that give them financial autonomy and decision-making power in their communities."
  },
  {
    "type": "heading",
    "content": "The Guest Experience"
  },
  {
    "type": "paragraph",
    "content": "What does a homestay actually feel like? It's not a hotel. It's not a guesthouse. It's living with a family for a few days and experiencing their world directly. Here's what a typical homestay experience in northern Bangladesh looks like."
  },
  {
    "type": "steps",
    "title": "A Day in a Northern Bangladesh Homestay",
    "items": [
      { "icon": "🌅", "title": "5:30 AM — Morning", "text": "Wake up to the sound of roosters and the smell of fresh rice being cooked. Breakfast is daal, rice, vegetable curry, and homemade pickles — all prepared from ingredients grown in the family's garden or purchased at the morning market." },
      { "icon": "🌾", "title": "7:30 AM — Village Walk", "text": "Your host takes you on a walk through the village. You'll see the morning market, the pond where families wash clothes, the fields where rice is being harvested, and the ancient Ramrai Dighi — a Mughal-era pond that has served this community for centuries." },
      { "icon": "🍳", "title": "12:00 PM — Cooking Class", "text": "Return for a cooking lesson. Your host teaches you to make traditional northern Bengali dishes — pabda fish curry, seasonal vegetable bhorta, and the district's signature sweet rice. You eat what you cook, sitting on the floor with the family." },
      { "icon": "🌙", "title": "6:00 PM — Evening", "text": "Dinner is served at sunset. The family shares stories about the village, its history, and the changes they've seen. In winter, you sit around a small fire. In monsoon season, you listen to the rain on the tin roof. There is no WiFi. There is no television. There is conversation." }
    ]
  },
  {
    "type": "comparison",
    "title": "Homestay vs Hotel — What You Trade",
    "items": [
      ["Room Size", "Small, simple, clean", "Large, furnished, air-conditioned"],
      ["Food", "Home-cooked, local, seasonal", "Restaurant menu, international options"],
      ["WiFi", "Limited or none", "High-speed"],
      ["Experience", "Authentic, personal, memorable", "Standard, predictable, comfortable"],
      ["Price per Night", "৳800-1,500", "৳3,000-8,000"],
      ["Community Impact", "Direct income to family", "Minimal local economic benefit"]
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1414235077428-338989a2e8c4?w=1200&h=500&fit=crop",
    "alt": "Traditional home-cooked meal served on a plate",
    "caption": "Homestay meals are prepared from locally sourced ingredients — rice from the family's field, fish from the village pond, vegetables from the morning market. The flavors are authentic, seasonal, and unlike anything you'll find in a restaurant."
  },
  {
    "type": "heading",
    "content": "The Conservation Connection"
  },
  {
    "type": "paragraph",
    "content": "Every homestay booking contributes 15% of its revenue to a community conservation fund. This fund is managed by a local committee and used for tree planting, pond maintenance, organic farming training, and heritage preservation. It is a direct, transparent link between tourism and environmental protection."
  },
  {
    "type": "paragraph",
    "content": "Since the program began, the conservation fund has supported the planting of 12,000 native trees across the northern districts — teak, sal, and mahogany species chosen for their ecological compatibility with local soil and water conditions. Each tree is tagged, GPS-mapped, and monitored by the family that planted it. The fund has also restored 8 village ponds, trained 45 families in organic farming methods, and documented 23 heritage sites that were previously unrecorded."
  },
  {
    "type": "feature-grid",
    "items": [
      {
        "icon": "🌳",
        "title": "Tree Planting",
        "text": "12,000+ native trees planted — teak, sal, mahogany. Each tagged, GPS-mapped, and monitored by the planting family."
      },
      {
        "icon": "💧",
        "title": "Pond Restoration",
        "text": "8 village ponds restored, providing clean water, fish habitat, and irrigation for organic farming."
      },
      {
        "icon": "🌱",
        "title": "Organic Training",
        "text": "45 families trained in organic farming — no synthetic pesticides or fertilizers, higher soil health."
      },
      {
        "icon": "🏛️",
        "title": "Heritage Documentation",
        "text": "23 previously unrecorded heritage sites documented, preserving cultural history for future generations."
      }
    ]
  },
  {
    "type": "callout",
    "content": "The most powerful aspect of the homestay program is the feedback loop it creates. Tourists come for an authentic experience. Families earn income from providing it. Part of that income funds conservation. Conservation improves the environment. A better environment attracts more tourists. The loop strengthens with every booking. It is self-sustaining, community-led, and scalable.",
    "source": "ESDO Eco Tourism Strategy Document, 2024"
  },
  {
    "type": "heading",
    "content": "Challenges and What's Needed Next"
  },
  {
    "type": "paragraph",
    "content": "The homestay program is working. But it faces real challenges that need to be addressed for it to scale beyond the current three districts."
  },
  {
    "type": "list",
    "items": [
      { "title": "Booking Infrastructure:", "text": "Currently, bookings are managed through ESDO's local offices and a basic online listing. A comprehensive digital booking platform with real-time availability, reviews, and secure payment processing is needed to reach international visitors." },
      { "title": "Transport Links:", "text": "Getting to northern Bangladesh requires a long bus ride or a flight to Saidpur with local transport. Improved road conditions and reliable inter-district transport would make homestays more accessible to time-constrained travelers." },
      { "title": "Quality Standards:", "text": "While the training program covers basics, ongoing quality assurance is challenging with 200+ families across three districts. More field staff and a standardized quality rating system would help maintain standards as the program grows." },
      { "title": "Marketing Reach:", "text": "Most bookings currently come from domestic tourists and NGO networks. International visibility is minimal. Social media presence, partnerships with international eco-tourism platforms, and targeted marketing campaigns would expand the guest base significantly." },
      { "title": "Language Training:", "text": "Many homestay hosts speak only Bengali and local dialects. Basic English language training would improve the international guest experience and open the market to non-Bengali-speaking visitors." }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=500&fit=crop",
    "alt": "Warm evening light over a rural village scene",
    "caption": "The future of rural Bangladesh is not in migration to cities or abandonment of traditional livelihoods. It's in communities finding new ways to value what they already have — their homes, their culture, their hospitality, and their connection to the land."
  },
  {
    "type": "heading",
    "content": "The Bottom Line"
  },
  {
    "type": "paragraph",
    "content": "Fatima Begum's story is not unique. It is the story of 200+ families across Thakurgaon, Panchagarh, and Dinajpur who have discovered that opening their homes to visitors is more economically rewarding than any alternative available to them. And it is not a story of dependence — these families are not receiving aid or charity. They are earning income through a service that people are willing to pay for: authenticity, hospitality, and connection to a way of life that most of the world has lost."
  },
  {
    "type": "paragraph",
    "content": "This is what eco-tourism looks like at the community level. It is not abstract policy or grand conservation plans. It is a family in a village in northern Bangladesh earning enough income to send their children to school, improve their home, and invest in the environment that sustains them. It is small, measurable, and real."
  },
  {
    "type": "callout",
    "content": "The homestay program is not about creating tourism. It is about creating alternatives — alternatives to migration, to poverty, to environmental degradation, to the slow erosion of cultural heritage. Every guest who books a homestay in northern Bangladesh is participating in a model of development that proves tourism can be a force for good when it is built by the community, for the community, and with conservation at its center.",
    "source": "ESDO Community Impact Report, 2025"
  }
];

const idx = posts.findIndex(p => p.slug === 'homestays-transform');
if (idx === -1) { console.error('Not found'); process.exit(1); }

posts[idx].sections = newSections;
posts[idx].readTime = "14 min";
posts[idx].featured = true;

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log('Updated homestays-transform - ' + newSections.length + ' sections');
