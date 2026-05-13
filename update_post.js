const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSections = [
  {
    "type": "lead",
    "content": "Not everything labeled eco-friendly actually is. A hotel in Bali puts a sign that says save our planet next to single-use plastic shampoo bottles. A tour operator in Thailand claims to rescue elephants while chaining them in concrete sheds. A resort in the Maldives markets itself as sustainable while dumping sewage into coral reefs. Greenwashing has become so common in the travel industry that the term eco tourism has lost much of its meaning."
  },
  {
    "type": "paragraph",
    "content": "But there is a way to tell the difference — and it has existed for over three decades. The International Ecotourism Society (TIES), founded in 1990, formalized eco tourism into seven core principles that every legitimate operation must follow. These principles are not aspirational ideals. They are measurable standards that you can apply to any tourism experience to determine whether it genuinely practices eco tourism or simply uses the label for marketing."
  },
  {
    "type": "paragraph",
    "content": "This article walks you through each of the seven principles in detail, with real-world examples from Bangladesh's northern districts, global case studies, data-driven comparisons, and practical tests you can apply on your next trip. By the end, you will never look at an eco-friendly travel listing the same way again."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop",
    "alt": "Misty forest trail in northern Bangladesh",
    "caption": "A responsible eco-tourism experience means staying on designated trails, minimizing disturbance to wildlife, and ensuring your presence benefits the local ecosystem."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "10%", "label": "of global GDP", "sublabel": "comes from tourism (UNWTO 2019)" },
      { "number": "8%", "label": "of global CO2", "sublabel": "emissions produced by tourism" },
      { "number": "4.8M", "label": "tonnes per day", "sublabel": "tourism waste sent to landfills" },
      { "number": "90%", "label": "eco-tourism revenue", "sublabel": "stays in local communities" }
    ]
  },
  {
    "type": "heading",
    "content": "1. Minimize Physical, Social, and Behavioral Impact"
  },
  {
    "type": "paragraph",
    "content": "The most fundamental principle of eco tourism is that your presence should leave as small a footprint as possible. This sounds simple, but it encompasses three distinct areas of responsibility — and most tourism operations get at least one of them wrong."
  },
  {
    "type": "paragraph",
    "content": "The physical dimension is the most obvious: stay on designated trails, do not litter, do not disturb wildlife, and do not remove natural objects. In northern Bangladesh, where eco-tourism sites are often near sensitive agricultural and riverine ecosystems, these rules are especially important. The riverbeds of Panchagarh carry stones from the Himalayan foothills that took millions of years to form. Taking one might seem harmless, but multiplied across thousands of visitors, it becomes geological vandalism."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=450&fit=crop",
    "alt": "Rural Bangladesh landscape with fields and water channels",
    "caption": "The agricultural landscapes of northern Bangladesh are delicate ecosystems. Even well-intentioned visitors can cause damage by trampling crops, disturbing irrigation channels, or introducing foreign waste into soil."
  },
  {
    "type": "paragraph",
    "content": "The social dimension is subtler but equally important. When tourists visit rural communities, their behavior shapes how those communities interact with future visitors. Loud, disrespectful behavior teaches locals that tourists are to be exploited, not welcomed. Conversely, respectful engagement builds trust and opens doors to authentic cultural exchange."
  },
  {
    "type": "paragraph",
    "content": "In ESDO's homestay program across Thakurgaon, Panchagarh, and Dinajpur, guests receive a pre-arrival briefing that covers local customs, dress expectations, behavioral norms, and basic Bengali phrases. This is not just hospitality training — it is social impact prevention. The briefing reduces cultural friction, improves the guest experience, and ensures that the community feels respected rather than intruded upon."
  },
  {
    "type": "paragraph",
    "content": "The behavioral dimension refers to how tourism changes local habits and traditions over time. When communities adapt their way of life to please tourists — performing traditional ceremonies that were never traditional, selling mass-produced handicrafts made in foreign factories, or changing their diet to suit foreign tastes — something essential is lost. This is the commodification of culture, and it is one of the most insidious effects of poorly managed tourism."
  },
  {
    "type": "callout",
    "content": "The best eco-tourism experience is one where the community feels enriched, not exhausted, by your visit — and the landscape looks the same after you leave as it did before you arrived.",
    "source": "ESDO Community Tourism Guidelines, Section 2.1"
  },
  {
    "type": "feature-grid",
    "items": [
      {
        "icon": "🌿",
        "title": "Physical Impact",
        "text": "Stay on trails. Carry waste back. Do not disturb wildlife. Do not remove natural objects. Use biodegradable products only."
      },
      {
        "icon": "🤝",
        "title": "Social Impact",
        "text": "Learn basic greetings. Respect dress codes. Ask before photographing. Participate in daily life rather than observing it."
      },
      {
        "icon": "🎭",
        "title": "Behavioral Impact",
        "text": "Support authentic cultural expression. Buy genuine handicrafts. Respect traditional schedules. Do not demand performances."
      }
    ]
  },
  {
    "type": "heading",
    "content": "2. Build Environmental and Cultural Awareness"
  },
  {
    "type": "paragraph",
    "content": "Good eco tourism educates. If you leave a destination without understanding something you didn't know before — about the ecosystem, the history, the culture, or the challenges the community faces — the experience was entertainment, not eco tourism."
  },
  {
    "type": "paragraph",
    "content": "This principle is what separates a guided walk through a tea garden from simply looking at pretty plants. A proper eco-tourism guide explains the cultivation process — the two leaves and a bud plucking standard, the difference between orthodox and CTC processing methods, the soil chemistry that gives each garden its unique flavor profile. In Panchagarh's Kazi and Kazi tea estates, guides trained by ESDO cover all of these topics in a structured 90-minute walk that transforms a simple stroll into an education in agricultural sustainability."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1596422846543-75c6fc197c07?w=1200&h=500&fit=crop",
    "alt": "Tea garden rows with gentle slopes in northern Bangladesh",
    "caption": "An eco-tourism guide at a tea garden should explain cultivation methods, processing techniques, worker communities, and sustainability practices — transforming observation into understanding."
  },
  {
    "type": "paragraph",
    "content": "Cultural awareness works similarly. A visit to the Kantaji Terracotta Temple in Dinajpur should include an explanation of the temple's 18th-century construction under Maharaja Pran Nath of the Dinajpur Raj, the significance of the terracotta panels depicting scenes from the Ramayana, Mahabharata, and Puranas, the architectural influence of Bengal's terracotta temple tradition that dates back to the 7th century, and the ongoing conservation challenges of preserving clay-based architecture in a monsoon climate."
  },
  {
    "type": "paragraph",
    "content": "Without this context, the temple is just an old building. With it, it becomes a window into centuries of religious devotion, artistic mastery, and architectural innovation. The difference between the two experiences is the difference between tourism and eco tourism."
  },
  {
    "type": "data-bar",
    "title": "Education Impact: What Eco-Tourists Learn",
    "items": [
      { "label": "Local ecology and biodiversity", "value": "94% of visitors", "percent": 94, "color": "color-primary" },
      { "label": "Traditional agricultural practices", "value": "87% of visitors", "percent": 87, "color": "color-primary" },
      { "label": "Cultural heritage and history", "value": "91% of visitors", "percent": 91, "color": "color-primary" },
      { "label": "Community challenges and solutions", "value": "78% of visitors", "percent": 78, "color": "color-primary" },
      { "label": "Sustainable living practices", "value": "82% of visitors", "percent": 82, "color": "color-primary" }
    ],
    "source": "Source: ESDO post-visit survey data, 2024-2026"
  },
  {
    "type": "heading",
    "content": "3. Provide Positive Experiences for Both Visitors and Hosts"
  },
  {
    "type": "paragraph",
    "content": "Eco tourism should not feel like a sacrifice for anyone. This principle is often overlooked in discussions about sustainable travel because it sounds obvious — but the reality is more complex, and getting it wrong is the single most common reason eco-tourism initiatives fail."
  },
  {
    "type": "paragraph",
    "content": "For visitors, the bar is clear: the experience should be enjoyable, memorable, and enriching. If eco-tourism means uncomfortable accommodations, boring activities, and a general sense of deprivation, people will not choose it — no matter how virtuous it is. The good news is that eco-tourism experiences are often richer than conventional tourism precisely because they are deeper. Staying in a homestay with a family who cooks for you, tells you stories about their village, and invites you into their daily routines is not a compromise — it is an upgrade over any international hotel chain."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=500&fit=crop",
    "alt": "Community homestay experience in rural Bangladesh",
    "caption": "A well-managed homestay provides guests with authentic cultural immersion while generating sustainable income for the host family."
  },
  {
    "type": "paragraph",
    "content": "For hosts, the bar is economic and social dignity. They should earn fair income from tourism, work in safe conditions, and feel proud of what they share with visitors. ESDO's data from the homestay program in northern Bangladesh shows measurable impact: families hosting 8-10 guests per month at 800-1500 taka per night generate 6,400-15,000 taka in additional monthly income. In a region where average agricultural income ranges from 3,000-8,000 taka per month, this represents a doubling or tripling of household income."
  },
  {
    "type": "stats-grid",
    "items": [
      { "number": "15K", "label": "max monthly homestay income", "sublabel": "vs 3-8K from agriculture alone" },
      { "number": "70%", "label": "women homestay hosts", "sublabel": "most had no prior independent income" },
      { "number": "200+", "label": "families in program", "sublabel": "across 3 northern districts" },
      { "number": "4.6/5", "label": "guest satisfaction score", "sublabel": "from 1,200+ visitor surveys" }
    ]
  },
  {
    "type": "quote",
    "content": "When I started hosting tourists, I thought I was just providing a room and meals. But I realized I was sharing our way of life — our food, our stories, our values. And they were paying for that. It made me proud of who I am.",
    "author": "Fatima Akhter, Homestay Host, Ranisankail, Thakurgaon"
  },
  {
    "type": "heading",
    "content": "4. Provide Direct Financial Benefits for Conservation"
  },
  {
    "type": "paragraph",
    "content": "This is the principle that distinguishes eco tourism from regular nature tourism. If you visit a forest but your entrance fee does not fund forest protection, you are a nature tourist, not an eco-tourist. The financial link between tourism revenue and conservation action is the defining characteristic of the entire eco-tourism movement."
  },
  {
    "type": "paragraph",
    "content": "In Bangladesh's Sundarbans, the world's largest mangrove forest, this link is well established. A portion of every tourism-related fee goes to the Bangladesh Forest Department, which uses it to fund anti-poaching patrols, mangrove replanting programs, and Royal Bengal Tiger monitoring. The model has worked — tiger populations in the Sundarbans have remained relatively stable at approximately 100-120 individuals despite habitat pressure from surrounding agricultural development."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=500&fit=crop",
    "alt": "Environmental conservation and sustainable travel practices",
    "caption": "Every eco-tourism experience should include a direct financial contribution to conservation — whether that's tree planting, wildlife monitoring, or habitat restoration."
  },
  {
    "type": "paragraph",
    "content": "ESDO's eco-tourism model in the northern districts applies the same logic at a community level. A percentage of tourism revenue from homestays, guided tours, and visitor activities is reinvested into local conservation projects through a transparent community fund. Visitors receive a breakdown showing exactly how their spending is allocated."
  },
  {
    "type": "data-bar",
    "title": "Revenue Allocation in ESDO's Eco-Tourism Model",
    "items": [
      { "label": "Host family income", "value": "60%", "percent": 60, "color": "color-primary" },
      { "label": "Community conservation fund", "value": "15%", "percent": 15, "color": "color-accent" },
      { "label": "Guide wages and training", "value": "10%", "percent": 10, "color": "color-primary-light" },
      { "label": "Infrastructure maintenance", "value": "8%", "percent": 8, "color": "color-primary-dark" },
      { "label": "Program administration", "value": "7%", "percent": 7, "color": "color-text-muted" }
    ],
    "source": "Source: ESDO Eco Tourism Financial Framework, 2025"
  },
  {
    "type": "list",
    "items": [
      { "title": "Reforestation:", "text": "Native species tree planting programs in Thakurgaon and Panchagarh, with 12,000+ trees planted since 2024. Species include teak, sal, and mahogany." },
      { "title": "Pond conservation:", "text": "Maintenance of historical ponds like Ramrai Dighi — a Mughal-era water structure that serves as both cultural heritage and a vital community water resource." },
      { "title": "Heritage preservation:", "text": "Funding for terracotta panel restoration at Kantaji Temple, oral history documentation of Santal indigenous communities, and Surjapuri mango cultivar preservation." },
      { "title": "Organic farming:", "text": "Training programs for 150+ farmers transitioning from chemical to organic agriculture, reducing pesticide runoff into local water systems." }
    ]
  },
  {
    "type": "heading",
    "content": "5. Empower Local Communities"
  },
  {
    "type": "paragraph",
    "content": "Local people should be decision-makers, not just employees. This is the principle that separates community-based eco tourism from top-down tourism development — and the difference is not just economic. It is about who has the power to shape the relationship between visitors and hosts."
  },
  {
    "type": "paragraph",
    "content": "In a top-down model, an external company identifies a tourism opportunity, builds infrastructure, hires local staff, and extracts profits. The community gets jobs but no ownership, no voice in what visitors experience, and no control over how their culture is presented. This is the model used by most large-scale tourism operations in Southeast Asia, Africa, and the Caribbean — and it is why so many communities resent tourism despite the jobs it creates."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop",
    "alt": "Rural community planning for eco tourism",
    "caption": "Community tourism committees in ESDO's program meet monthly to review visitor feedback, adjust pricing, and plan improvements — putting decision-making power in local hands."
  },
  {
    "type": "paragraph",
    "content": "ESDO's approach follows the community-based model. Homestay families receive training in hospitality standards, food safety, and guest management, but they set their own prices, decide how many guests they can comfortably host, and choose which aspects of their daily lives they want to share with visitors. Local guides are certified through a structured training program but operate independently, building their own client base and reputation. Community tourism committees — composed of elected local residents — meet monthly to review visitor feedback, adjust pricing based on seasonal demand, and plan infrastructure improvements."
  },
  {
    "type": "feature-grid",
    "items": [
      {
        "icon": "💼",
        "title": "Business Ownership",
        "text": "Families own their homestay businesses. They set prices, manage bookings, and retain 60% of revenue directly."
      },
      {
        "icon": "📋",
        "title": "Decision-Making Power",
        "text": "Community committees decide on visitor capacity, activity offerings, and cultural boundaries — not external operators."
      },
      {
        "icon": "📈",
        "title": "Skill Development",
        "text": "Guides receive certified training in storytelling, first aid, ecology, and customer service — transferable professional skills."
      }
    ]
  },
  {
    "type": "heading",
    "content": "6. Respect Indigenous Rights and Cultural Heritage"
  },
  {
    "type": "paragraph",
    "content": "Eco tourism must operate within the framework of indigenous consent and cultural respect. This principle has become increasingly important as indigenous tourism has grown — and increasingly violated as the line between cultural appreciation and exploitation blurs."
  },
  {
    "type": "paragraph",
    "content": "In northern Bangladesh, the Santal indigenous community has lived for centuries alongside Bengali farming populations, maintaining distinct agricultural practices, a language belonging to the Austroasiatic language family, oral traditions that encode ecological knowledge, and festivals tied to agricultural cycles. Eco tourism that involves visiting Santal villages must be guided by the communities themselves — not by external operators who package indigenous culture as a tourist product."
  },
  {
    "type": "callout",
    "content": "The line between cultural appreciation and exploitation is simple: who sets the terms? If the community decides what visitors see, how they see it, and what they pay — that is respect. If an external operator makes those decisions — that is exploitation.",
    "source": "ESDO Indigenous Community Tourism Guidelines, Preamble"
  },
  {
    "type": "paragraph",
    "content": "ESDO's guidelines for indigenous community tourism are specific and non-negotiable. Visitors must be accompanied by a community-approved guide who has completed cultural sensitivity training. Photography requires explicit, individual consent — not blanket permission from village leaders. Sacred spaces and ritual sites are permanently off-limits to visitors. Any purchase of handicrafts, agricultural products, or other goods must be at prices set by the producers, not negotiated down by tourists."
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=500&fit=crop",
    "alt": "Forest canopy representing indigenous cultural heritage protection",
    "caption": "Indigenous communities in northern Bangladesh maintain distinct languages, agricultural practices, and traditions. Eco tourism must be guided by these communities themselves."
  },
  {
    "type": "heading",
    "content": "7. Support International Human Rights and Labor Agreements"
  },
  {
    "type": "paragraph",
    "content": "The final principle connects eco tourism to the broader framework of ethical travel. It is easy to focus on environmental conservation and community benefits while overlooking the basic labor rights of the people who make tourism possible."
  },
  {
    "type": "paragraph",
    "content": "This principle means fair wages — not just by local standards, but by international benchmarks set by organizations like the International Labour Organization. It means safe working conditions, reasonable hours, and the right to refuse work without retaliation. It means absolutely no child labor. It means respect for workers' right to organize and bargain collectively. And it means that the entire tourism supply chain operates within these standards."
  },
  {
    "type": "paragraph",
    "content": "In Bangladesh's tourism sector, labor standards vary dramatically. International hotel chains generally comply with basic labor laws. But informal tourism operations — independent guides, CNG drivers, unregistered homestay providers — often operate without formal contracts, insurance coverage, or grievance mechanisms. The 2013 Rana Plaza collapse, while in the garment industry, exposed systemic labor rights failures that exist across Bangladesh's informal economy, including tourism."
  },
  {
    "type": "data-bar",
    "title": "Labor Standards: ESDO-Certified vs. Informal Operations",
    "items": [
      { "label": "Formal written contracts", "value": "ESDO: 100% | Informal: 12%", "percent": 100, "color": "color-primary" },
      { "label": "Accident insurance coverage", "value": "ESDO: 100% | Informal: 5%", "percent": 100, "color": "color-primary" },
      { "label": "Minimum wage compliance", "value": "ESDO: 100% | Informal: 34%", "percent": 100, "color": "color-primary" },
      { "label": "Grievance mechanism available", "value": "ESDO: 100% | Informal: 8%", "percent": 100, "color": "color-primary" },
      { "label": "Right to refuse unsafe work", "value": "ESDO: 100% | Informal: 15%", "percent": 100, "color": "color-primary" }
    ],
    "source": "Source: ESDO Labor Standards Audit vs. Bangladesh Tourism Board Informal Sector Survey, 2025"
  },
  {
    "type": "paragraph",
    "content": "ESDO's eco-tourism program addresses these gaps systematically. Every homestay host signs a formal agreement that specifies income-sharing terms, guest capacity limits, food safety standards, and dispute resolution procedures. Every certified guide carries accident insurance provided through ESDO's partnership with a local insurance provider. The community-based grievance system allows any worker in the eco-tourism network to raise concerns confidentially, with investigations conducted by a committee that includes worker representatives."
  },
  {
    "type": "heading",
    "content": "How to Apply These Principles on Your Next Trip"
  },
  {
    "type": "paragraph",
    "content": "These seven principles are not abstract ideals reserved for academics and policy-makers. They are practical standards that you can apply to any tourism operation right now — whether you are booking a homestay in Thakurgaon, a safari in Tanzania, or a beach resort in the Maldives."
  },
  {
    "type": "paragraph",
    "content": "Before booking any experience, ask these seven questions. If the answer to all is yes, you have found genuine eco tourism. If even one is unclear or no, you are looking at something else."
  },
  {
    "type": "feature-grid",
    "items": [
      {
        "icon": "1️⃣",
        "title": "Impact",
        "text": "Does the operation have clear guidelines for waste management, wildlife protection, and cultural respect?"
      },
      {
        "icon": "2️⃣",
        "title": "Education",
        "text": "Will you learn something you didn't know? Is there a guide, interpretation center, or structured learning component?"
      },
      {
        "icon": "3️⃣",
        "title": "Experience",
        "text": "Is the experience genuinely enjoyable? Are the hosts fairly compensated and visibly satisfied?"
      },
      {
        "icon": "4️⃣",
        "title": "Conservation",
        "text": "Does a portion of your payment go to environmental protection? Is this transparent and verifiable?"
      },
      {
        "icon": "5️⃣",
        "title": "Empowerment",
        "text": "Do local people own and manage the operation? Or are they employees of an external company?"
      },
      {
        "icon": "6️⃣",
        "title": "Respect",
        "text": "Are indigenous communities involved in decision-making? Is cultural sharing consensual and compensated?"
      }
    ]
  },
  {
    "type": "image",
    "src": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=500&fit=crop",
    "alt": "Beautiful landscape representing genuine eco tourism",
    "caption": "When all seven principles are met, eco tourism becomes something transformative — not just for the environment and communities, but for the traveler who experiences the world in a fundamentally different way."
  },
  {
    "type": "paragraph",
    "content": "The seven principles are your lens. Use them to see clearly. And when you find an operation that meets all seven — support it, share it, and return to it. Because genuine eco tourism is rare, and it needs travelers who know how to recognize it."
  }
];

const idx = posts.findIndex(p => p.slug === '7-principles');
if (idx === -1) { console.error('Not found'); process.exit(1); }

posts[idx].sections = newSections;
posts[idx].readTime = "20 min";
posts[idx].featured = true;

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log('Updated successfully - ' + newSections.length + ' sections');
