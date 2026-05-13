const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'kantajew-temple-santal-culture-dinajpur',
  title: 'The Temple Covered in 15,000 Stories: What 300 Years of Terracotta Tells Us About Bengal',
  slug: 'kantajew-temple-santal-culture-dinajpur',
  author: 'ESDO Eco Tourism',
  date: '2026-02-15',
  readTime: '14 min',
  category: 'Culture',
  featured: true,
  excerpt: 'In 1704, a Maharaja commissioned artisans to cover a temple in terracotta plaques depicting everyday life in Bengal — farming, hunting, European ships, village scenes. Three centuries later, those same plaques are one of South Asia\'s finest artistic achievements. Twenty kilometers away, the Santal people still live in villages that look almost exactly like the scenes those plaques depict.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Kantajew_Temple%2C_Dinajpur.jpg',
  tags: ['Kantajew Temple', 'Dinajpur', 'terracotta', 'Santal culture', 'indigenous Bangladesh', 'cultural tourism', 'heritage', 'Kantanagar', 'Baha Parab'],
  sections: [
    {
      type: 'lead',
      content: 'There is a temple in northern Bangladesh where every square inch of wall is covered in clay. Not paint — clay. Thousands of individually crafted terracotta plaques, baked in the 18th century, depicting scenes of everyday life: farmers plowing fields, hunters tracking deer, musicians playing flutes, women carrying water pots, European merchant ships with billowing sails. Approximately 15,000 plaques, each one a frozen moment of what Bengal looked like in 1720. And the people who made them — the artisans, the laborers, the farmers depicted in the clay — were the ancestors of the Santal people who still live in villages twenty kilometers away.'
    },
    {
      type: 'paragraph',
      content: 'The Kantajew Temple in Dinajpur is not just a religious monument. It is a visual archive of 18th-century Bengal — a civilization recorded not in words but in clay. And walking through it is like stepping into a history book where the illustrations are more vivid than the text.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Kantajew_Temple%2C_Dinajpur.jpg',
      alt: 'Kantajew Temple in Dinajpur with ornate terracotta plaques covering the walls',
      caption: 'The Kantajew Temple in Dinajpur, Bangladesh — built between 1704 and 1752, its exterior is covered in approximately 15,000 terracotta plaques depicting scenes from Hindu epics and everyday 18th-century Bengal life. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Temple'
    },
    {
      type: 'paragraph',
      content: 'The Kantajew Temple — also called Kantanagar Temple or Kantaji Mandir — sits in the village of Kantanagar, in Kaharol Upazila, about 20 kilometers north of Dinajpur town. It was commissioned in 1704 by Maharaja Pran Nath of Dinajpur and completed by his son Raja Ramnath in 1752. The construction took nearly five decades, and the result was a three-storey structure that became one of the most ornate Hindu temples in South Asia.'
    },
    {
      type: 'paragraph',
      content: 'The top storey collapsed in an earthquake — accounts vary between the 1897 Great Assam Earthquake and a later tremor — leaving the temple with its current two-storey profile. But what remains is what matters: the terracotta.'
    },
    {
      type: 'paragraph',
      content: 'The temple is built in the rekha-deul style — a curved tower form typical of Bengal temple architecture — but what sets it apart from every other temple in the region is the surface treatment. Instead of plain brick or stone, the entire exterior is covered in individually crafted terracotta plaques. Each plaque was shaped by hand from local clay, baked in kilns, and then set into the brickwork. The artisans who made them were not working from templates — each scene is unique, each face has different expressions, each animal has a different posture.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kantajew_Temple-front.jpg',
      alt: 'Front view of Kantajew Temple showing the entrance and terracotta-covered facade',
      caption: 'The front facade of Kantajew Temple — the entrance arch is flanked by terracotta panels depicting deities, floral motifs, and scenes from daily life. The level of detail in each individual plaque is remarkable for 18th-century craftsmanship. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'What the Plaques Show'
    },
    {
      type: 'paragraph',
      content: 'The plaques fall into two categories. The first is mythological — scenes from the Ramayana, Mahabharata, and other Hindu epics, depicting gods, goddesses, battles, and divine moments. These are what you expect to find on a Hindu temple.'
    },
    {
      type: 'paragraph',
      content: 'The second category is what makes this temple extraordinary. Interspersed among the religious scenes are depictions of everyday life in 18th-century Bengal: farmers plowing fields with oxen, hunters on horseback tracking deer through forests, women carrying water pots on their heads, musicians playing drums and bamboo flutes, European merchant ships with full sails arriving at Bengal ports, elephants and tigers and peacocks, village markets and domestic scenes.'
    },
    {
      type: 'paragraph',
      content: 'Think about what that means. The Maharaja who commissioned this temple could have filled every wall with gods and mythological figures. Instead, he chose to include the lives of ordinary people — the farmers, the hunters, the musicians, the traders — alongside the divine. The result is a temple that tells you as much about 18th-century Bengali society as it does about Hindu theology.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Finest_artwork_and_terracotta_of_Kantanagar_temple_06.jpg',
      alt: 'Close-up of intricate terracotta plaque artwork on Kantanagar Temple wall',
      caption: 'Close-up of the terracotta plaques on Kantanagar Temple — each plaque was individually shaped by hand from local clay, baked in kilns, and set into the brickwork. The detail includes individual facial expressions, clothing patterns, and natural elements like flowers and animals. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The European Ships'
    },
    {
      type: 'paragraph',
      content: 'Among the most striking plaques are the ones showing European merchant ships. This is not decorative — it is historical documentation. In the early 1700s, the British East India Company, Dutch East India Company, and French traders were all active in Bengal. The ships on the temple walls are European vessels with billowing sails, and their presence on a Hindu temple in rural Bengal is evidence that the Maharaja\'s court was aware of, and likely trading with, European merchants.'
    },
    {
      type: 'paragraph',
      content: 'These plaques are also among the few visual records of European maritime activity in Bengal from this period. Written records exist, but seeing a ship depicted in clay by an 18th-century Bengali artisan — working from descriptions, possibly from sailors or traders who visited the court — is a different kind of historical evidence. It is history as the people who lived it saw it.'
    },
    {
      type: 'heading',
      content: 'The Living Culture Nearby'
    },
    {
      type: 'paragraph',
      content: 'Twenty kilometers from the Kantajew Temple, in villages scattered across Dinajpur, Thakurgaon, and Panchagarh, the Santal people — one of Bangladesh\'s oldest indigenous communities — live in settlements that look remarkably like the scenes depicted on the temple walls. The same farming methods. The same bamboo flutes. The same connection to the land that the artisans captured in clay three centuries ago.'
    },
    {
      type: 'paragraph',
      content: 'The Santal are one of 50 officially recognized indigenous groups in Bangladesh, and among the oldest plain-dwelling Adibashi communities. Their villages are organized around a self-governing assembly called the Manjhi Baishi — essentially a village council that resolves disputes, organizes festivals, and maintains social order without any formal government involvement.'
    },
    {
      type: 'paragraph',
      content: 'Their cultural calendar revolves around the agricultural cycle. Baha Parab, the Flower Festival, is celebrated in late February or early March (Falgun-Chaitra in the Bengali calendar) and marks the arrival of spring with dancing, singing, and the gathering of wild flowers. Sohrai is a post-harvest cattle worship festival that includes the Jhumar dance — couples moving in synchronized steps to the rhythm of drums and flutes. Poush Parab, celebrated in mid-January, honors the harvest and the goddess Tusu, with unmarried girls decorating bamboo frames with flowers and colored thread.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Houses_in_a_Santal_village_3.jpg',
      alt: 'Traditional houses in a Santal village in Dinajpur district, Bangladesh',
      caption: 'A Santal village in Dinajpur district, Bangladesh. The Santal people are one of the oldest indigenous communities in northern Bangladesh, with a culture that predates most recorded history in the region. Their villages, festivals, and agricultural practices represent a living connection to the Bengal depicted on the Kantajew Temple walls. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Music'
    },
    {
      type: 'paragraph',
      content: 'Santal music is built around two instruments that are as old as the community itself. The Tirio is a bamboo flute with seven holes — simple, hand-carved, and producing a sound that carries across the village at dusk. The Dhodro Banam is a drum-like percussion instrument, hollowed from wood and struck with the hands during festivals and celebrations.'
    },
    {
      type: 'paragraph',
      content: 'If you visit a Santal village during Baha Parab or Poush Parab, you will hear these instruments. The flute melody is distinctive — not the classical raga tradition of urban Bengal, but something older, simpler, more connected to the natural rhythm of the seasons. The drums provide the heartbeat. The dancing is communal — not performed for an audience but participated in by everyone present.'
    },
    {
      type: 'paragraph',
      content: 'This is the same musical tradition that the temple artisans depicted in clay three centuries ago: musicians playing flutes, people dancing in circles, festivals that marked the turning of the agricultural year. The continuity between the plaques and the present is what makes the Kantajew Temple more than a monument — it is a bridge between two eras of Bengali civilization.'
    },
    {
      type: 'heading',
      content: 'UNESCO Recognition'
    },
    {
      type: 'paragraph',
      content: 'The Kantajew Temple is on UNESCO\'s Tentative List of World Heritage Sites (entry #6673: "Mughal and Colonial Temples of Bangladesh"). It is also registered as a protected monument under Bangladesh\'s heritage register (monument ID: BD-F-02894). The recognition is deserved but incomplete — the temple needs ongoing conservation work to prevent the terracotta plaques from deteriorating, and the surrounding area could benefit from better visitor facilities.'
    },
    {
      type: 'paragraph',
      content: 'The temple sits on the banks of the Dhepa River, and the approach to it passes through agricultural fields — paddy, jute, and mustard — that look almost exactly like the scenes depicted on the temple walls. The landscape has not changed in 300 years. The river is still there. The fields are still there. The temple is still there. And the people who farm those fields and celebrate in those seasons are the descendants of the people the temple was built to honor.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Kantanagar_Temple%2C_Dinajpur_%2802.03.2019%29.jpg',
      alt: 'Kantanagar Temple from distance showing the full structure and surrounding grounds',
      caption: 'The Kantanagar Temple and its surrounding grounds — set in the village of Kantanagar, Kaharol Upazila, on the banks of the Dhepa River. The approach to the temple passes through agricultural fields that have not changed in three centuries. Photo: Wikimedia Commons, March 2019.'
    },
    {
      type: 'heading',
      content: 'The Experience of Visiting'
    },
    {
      type: 'paragraph',
      content: 'The first thing you notice when you arrive at the Kantajew Temple is the scale. Photographs do not capture how much detail there is. Every wall, every corner, every archway is covered in plaques, and each one is different. You start by looking at the whole temple — the curved towers, the ornate entrance, the symmetry of the structure. Then you move closer, and you start looking at individual plaques, and you realize that each one tells a story.'
    },
    {
      type: 'paragraph',
      content: 'A farmer guiding two oxen through a furrow. A hunter drawing a bow at a deer. A woman balancing a water pot on her hip. A European ship with three masts and full sails. A peacock spreading its tail. A musician playing a flute while dancers circle around him. Each plaque is roughly the size of a book cover, and each one was made by hand — shaped, carved, baked, and set into the wall by artisans who had no photographs, no printed references, only their own observation of the world around them.'
    },
    {
      type: 'paragraph',
      content: 'The temple interior is simpler than the exterior — the inner sanctum houses the deity, and the walls are less densely decorated. But the outer walls are where the story lives. You can spend an hour walking around the perimeter and still miss plaques. The ones on the upper levels are harder to see from the ground, and the ones on the back of the temple get less attention than the front. But they are just as detailed, just as carefully made.'
    },
    {
      type: 'heading',
      content: 'Getting There'
    },
    {
      type: 'paragraph',
      content: 'From Dhaka, the Kantajew Temple is approximately 400 kilometers — a 7 to 10-hour bus or train journey to Dinajpur. Buses depart from Gabtoli and Saidabad terminals in Dhaka (Hanif, Shyamoli, and other operators — AC tickets approximately ৳1,200 to ৳1,800). The train option includes the Druto Jan and Ekota Express from Kamalapur Station.'
    },
    {
      type: 'paragraph',
      content: 'From Dinajpur town, the temple is 20 kilometers north — about 30 to 40 minutes by auto-rickshaw or local van (৳150-200). The road passes through agricultural villages and the approach to the temple is through fields, giving you a sense of the landscape that the temple was built within.'
    },
    {
      type: 'paragraph',
      content: 'There is an entry fee of ৳20 for Bangladeshi visitors and ৳200 for foreign nationals. The temple is open daily from sunrise to sunset. A visit takes 45 minutes to 1.5 hours depending on how closely you examine the plaques.'
    },
    {
      type: 'heading',
      content: 'Combining with Santal Village Visits'
    },
    {
      type: 'paragraph',
      content: 'The Kantajew Temple is best experienced as part of a broader cultural circuit in the Dinajpur-Thakurgaon region. After visiting the temple, you can drive to nearby Santal villages — several are accessible from Dinajpur Sadar and Parbatipur — where the living culture that the temple depicts is still practiced.'
    },
    {
      type: 'paragraph',
      content: 'Tracway, a community tourism operator, offers a 4-day/3-night Santal village homestay package in the Dinajpur-Rangpur area (BDT 30,000 local / USD 300 foreign, includes overnight stay, meals, and guide). This is the most structured way to experience Santal culture — living with a family, eating their food, participating in daily activities, and witnessing the musical and agricultural traditions firsthand.'
    },
    {
      type: 'paragraph',
      content: 'Alternatively, you can visit independently by hiring a local guide in Dinajpur town. The best time to coincide your visit with a Santal festival is mid-January for Poush Parab or late February-March for Baha Parab. During these festivals, the villages come alive with music, dance, and communal celebration — and the connection between the temple plaques and the living culture becomes impossible to ignore.'
    },
    {
      type: 'heading',
      content: 'When to Visit'
    },
    {
      type: 'paragraph',
      content: 'October through March is the best window. The weather is cool and dry, the mustard fields are in bloom (November-December creates a yellow landscape that is particularly photogenic), and the festival season runs from mid-November (Nabanna harvest festival) through March (Baha Parab). The temple itself is accessible year-round, but the outdoor experience — walking through the surrounding fields, visiting Santal villages, and attending festivals — is best in winter.'
    },
    {
      type: 'paragraph',
      content: 'Mid-January is the sweet spot: Poush Parab is being celebrated in Santal villages, the weather is at its coolest, and the temple grounds are comfortable for extended walking. Late February to early March is equally good: Baha Parab brings flower-gathering celebrations, the fields begin their spring growth, and the temperature is rising but not yet uncomfortable.'
    },
    {
      type: 'callout',
      content: 'The Kantajew Temple is not just a place to see. It is a place to read — to read the stories that 18th-century artisans carved into clay, and then to walk twenty kilometers and see the same stories being lived by the Santal people who still farm, dance, and celebrate in the way those plaques depict.',
      source: 'ESDO Cultural Heritage Note, 2025'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The Kantajew Temple is not the oldest temple in Bangladesh. It is not the largest. It is not even complete — the top storey is gone, and some plaques have deteriorated. But it is the most eloquent. No other monument in the country tells you as much about what life was like for ordinary people in 18th-century Bengal. The gods are on the walls, yes, but so are the farmers, the hunters, the musicians, the ships, the animals, the flowers, the everyday moments that most monuments ignore.'
    },
    {
      type: 'paragraph',
      content: 'And the fact that the Santal people — whose ancestors likely included the artisans who made those plaques and the farmers who were depicted in them — still live nearby, still farm the same fields, still play the same flutes, still celebrate the same festivals, makes the temple not a relic of a dead civilization but a living document of a culture that has persisted for three centuries.'
    },
    {
      type: 'paragraph',
      content: 'That is why you visit the Kantajew Temple. Not for the architecture alone — though the architecture is remarkable. Not for the religion alone — though the religious art is extraordinary. But for the story it tells: a story about a Maharaja who chose to honor the lives of ordinary people by making them permanent in clay, and about a community that has kept those same lives alive for 300 years.'
    },
    {
      type: 'callout',
      content: 'The best monuments are not the ones that glorify the powerful. They are the ones that remember the ordinary. The Kantajew Temple remembers the farmers, the musicians, the hunters, the traders — the people who made Bengal what it was, and what it still is.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop',
      alt: 'Golden hour over agricultural fields in rural Bangladesh',
      caption: 'The agricultural landscape surrounding the Kantajew Temple — fields that have been farmed the same way for centuries, by people whose ancestors are depicted in the temple\'s terracotta plaques. The river, the fields, and the seasons have not changed. The temple is the record of that continuity.'
    }
  ]
};

const idx = posts.findIndex(p => p.slug === 'kantajew-temple-santal-culture-dinajpur');
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
