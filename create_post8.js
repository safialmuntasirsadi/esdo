const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'surjapuri-mango-tree-baliadangi',
  title: 'The 220-Year-Old Mango Tree That Covers Half an Acre: Walking Inside a Living Giant',
  slug: 'surjapuri-mango-tree-baliadangi',
  author: 'ESDO Eco Tourism',
  date: '2025-06-15',
  readTime: '11 min',
  category: 'Heritage',
  featured: true,
  excerpt: 'In a quiet village on the Bangladesh-India border, a single mango tree older than the British Raj spreads its branches across half an acre. You can walk inside it. You can stand beneath it. And you will feel very, very small.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/150_years_old_and_the_biggest_mango_tree_in_asia_situated_at_Thakurgaon_in_bangladesh.png',
  tags: ['Surjapuri mango tree', 'Baliadangi', 'Thakurgaon', 'ancient trees', 'heritage', 'natural wonder', 'offbeat travel'],
  sections: [
    {
      type: 'lead',
      content: 'In Mandumala village, on the Harinmari border of Baliadangi Upazila, Thakurgaon, there is a mango tree so large that people standing beneath it look like tiny figures under a green ceiling. It is approximately 220 years old — older than the British colonial rule in Bengal, older than any living person in the district, older than the village itself. It has more than 19 main branches, some so thick they have formed their own secondary trunks where they touch the ground and take root. And it is, by most accounts, the largest mango tree in South Asia.'
    },
    {
      type: 'paragraph',
      content: 'There is no sign at the roadside. No ticket counter. No paved path. You turn off the main road near Baliadangi town, drive through agricultural fields for about 15 minutes, and then you see it — a canopy so wide it looks like a small forest until you realize it is a single tree.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/150_years_old_and_the_biggest_mango_tree_in_asia_situated_at_Thakurgaon_in_bangladesh.png',
      alt: 'The Surjapuri mango tree in Baliadangi, Thakurgaon - the biggest mango tree in Asia',
      caption: 'The Surjapuri mango tree in Baliadangi, Thakurgaon. This 220-year-old tree is widely considered the largest mango tree in Asia. Image: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Inside the Tree'
    },
    {
      type: 'paragraph',
      content: 'The first time you approach the Surjapuri mango tree, your brain does not immediately register that it is one tree. The canopy is too wide, the trunk system too complex, the branches too many. It looks like a grove — a cluster of trees growing together. Only when someone tells you does it become clear: every branch, every trunk, every leaf belongs to a single organism.'
    },
    {
      type: 'paragraph',
      content: 'The tree stands roughly 90 feet tall. Its canopy covers more than two bighas of land — approximately half an acre, or about 0.6 acres depending on how you measure. The 19 main branches spread in all directions like the ribs of a green cathedral, and several of them have grown so large and heavy that they have touched the ground and rooted themselves, creating what look like separate trunks but are technically part of the same tree.'
    },
    {
      type: 'paragraph',
      content: 'When you walk under it, the temperature drops. The canopy is so dense that direct sunlight barely reaches the ground. The air feels cooler, more humid, and smells faintly of earth and old wood. Your footsteps become quieter. Even your voice sounds different — softer, as if you are inside a building rather than outdoors.'
    },
    {
      type: 'paragraph',
      content: 'During mango season, the ground beneath the tree is covered with fruit. Not dozens — hundreds. The Lata Surjapuri variety, each weighing 200 to 250 grams, drops from branches so high that you cannot see the fruits hanging from the top. Local villagers collect them, and the mangoes from this specific tree are sold at a premium — not because they taste significantly better than Surjapuri mangoes from other trees, but because they carry the story. "Mangoes from the big tree" is a selling point in itself.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photos/giant-tree-trunk-with-lush-green-leaves-overhead-YxXA8DtB-2M?w=1200&h=500&fit=crop',
      alt: 'Looking up into the massive green canopy of an ancient tree from below',
      caption: 'Looking up from beneath a giant tree — the Surjapuri mango tree\'s canopy is so dense that standing underneath it feels like entering a room with a green ceiling. The interlocking branches create natural arches that have existed for more than two centuries.'
    },
    {
      type: 'heading',
      content: 'Nobody Knows Who Planted It'
    },
    {
      type: 'paragraph',
      content: 'Here is the most surprising thing about this tree: there are no written records of when it was planted, who planted it, or why. Its age — estimated at 200 to 230 years — comes entirely from oral tradition passed down through generations of villagers. A Financial Express feature in January 2024 and a TBS News article both covered the tree, and both relied on local oral history rather than documented records.'
    },
    {
      type: 'paragraph',
      content: 'Think about what that means. A living organism older than most countries, older than most institutions, older than most written records — and the only evidence of its history is the memory of the people who live near it. An elderly villager tells a younger villager: "My grandfather told me this tree was already big when he was a child." And that is how history survives in rural Bangladesh — not in books, but in conversation.'
    },
    {
      type: 'paragraph',
      content: 'The Surjapuri mango variety itself is named after this tree or the area around it — "Surjapuri" being the local name for the region. The variety has since been cultivated across northern Bangladesh and even into West Bengal, India. But the original tree — the one that started it all — is still here, still producing fruit, still growing, still defying the idea that a mango tree is just a mango tree.'
    },
    {
      type: 'heading',
      content: 'The Surjapuri Mango'
    },
    {
      type: 'paragraph',
      content: 'The Lata Surjapuri mango produced by this tree is distinctive. Each fruit weighs between 200 and 250 grams — medium-sized but with a deep, rich sweetness that locals describe as different from any other mango variety. The flesh is fibrous but tender, the skin thin and golden-yellow when ripe, and the stone small relative to the fruit size.'
    },
    {
      type: 'paragraph',
      content: 'Mango season runs from June to August. During these months, the tree becomes a local attraction — villagers bring children to see it, travelers from Thakurgaon town make the 25-kilometer detour, and occasionally a journalist or researcher arrives to write about it. The tree produces over 100 mangoes per year — not a massive yield for its size, but each fruit carries the weight of its origin story.'
    },
    {
      type: 'paragraph',
      content: 'Outside of mango season, the tree is still worth visiting. The canopy is evergreen, the trunk system is a geological formation in itself, and the experience of standing inside something that has been growing since the early 1800s does not depend on whether there is fruit.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photos/an-enormous-tree-with-exposed-impressive-roots-OnOtPDVlXNM?w=1200&h=500&fit=crop',
      alt: 'Massive ancient tree with sprawling branches and exposed roots in a forest',
      caption: 'Ancient trees like the Surjapuri mango tree develop root systems and trunk structures that take centuries to form. The exposed roots and branching patterns are a physical record of two hundred years of growth, weather, and survival.'
    },
    {
      type: 'heading',
      content: 'Why It Has No Heritage Protection'
    },
    {
      type: 'paragraph',
      content: 'Despite being widely described as the largest mango tree in South Asia, the Surjapuri mango tree has no formal heritage protection status. It is not a declared monument. It is not managed by the Department of Archaeology. It is not listed as a protected natural landmark. It sits on what is essentially private or community agricultural land, maintained by the goodwill of the villagers around it.'
    },
    {
      type: 'paragraph',
      content: 'This is not unusual in Bangladesh. The country has a complicated relationship with its living heritage — trees, ponds, orchards, and sacred groves that have existed for centuries but exist outside any formal preservation framework. They survive because the local community values them, not because a government department has allocated a budget for their maintenance.'
    },
    {
      type: 'paragraph',
      content: 'The risk is obvious: if the land changes hands, if the village develops, if the agricultural pattern shifts, the tree could be lost without anyone having the legal authority to prevent it. That is the vulnerability of living heritage — it depends entirely on the people who happen to live near it at any given moment.'
    },
    {
      type: 'callout',
      content: 'The Surjapuri mango tree has survived 220 years without legal protection because the people who live near it have always valued it. But "always" is not a guarantee. Heritage that depends on goodwill is heritage that can disappear when goodwill changes hands.',
      source: 'ESDO Heritage Conservation Note, 2025'
    },
    {
      type: 'heading',
      content: 'The Journey to the Tree'
    },
    {
      type: 'paragraph',
      content: 'Reaching the Surjapuri mango tree is part of the experience. From Dhaka, it is approximately a 500-kilometer journey — the same overnight bus ride to Thakurgaon that takes you to Ramrai Dighi, Ronbag Tea Garden, and the other attractions of northern Bangladesh. The bus passes through Tangail, Jamalpur, and Rangpur while you sleep, and you wake up in a landscape that looks fundamentally different from the flat floodplains of central Bangladesh — red soil, rolling terrain, and the barind tract stretching to the horizon.'
    },
    {
      type: 'paragraph',
      content: 'From Thakurgaon town, it is about 25 kilometers to Mandumala village in Baliadangi Upazila, near the Harinmari border with India. An auto-rickshaw or local van will take you there in about an hour. The last few kilometers pass through agricultural fields — paddy, jute, and vegetable plots — and then the road narrows, and you enter the village.'
    },
    {
      type: 'paragraph',
      content: 'There is no entrance fee. The tree is on open land. You walk up to it, and it is there — impossible to miss, impossible to fully comprehend until you are standing beneath it.'
    },
    {
      type: 'heading',
      content: 'Combining with Other Baliadangi Attractions'
    },
    {
      type: 'paragraph',
      content: 'The Surjapuri mango tree is in the same upazila as two other remarkable destinations, making Baliadangi one of the most unusual tourism circuits in Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'Ronbag Tea Garden and the Beurjhari Tea Resort are about 15 kilometers from the mango tree — one of the few tea gardens in Bangladesh outside the Sylhet and Chittagong hill tracts. The rolling green terraces near the India border create a landscape that visitors describe as "Kashmir-like" — an unexpected sight in the flat northern plains.'
    },
    {
      type: 'paragraph',
      content: 'Together, these three destinations — a 220-year-old mango tree, a border tea garden, and the Haripur Rajbari (a crumbling 1893 zamindar palace nearby) — form a half-day circuit through some of the most offbeat heritage and natural sites in northern Bangladesh.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photos/massive-tree-roots-arching-over-a-dense-jungle-canopy-JVSAtX9QbSY?w=1200&h=500&fit=crop',
      alt: 'Massive tree canopy with thick branches arching overhead in a green landscape',
      caption: 'The Surjapuri mango tree\'s branches create natural arches that visitors describe as walking inside a green cathedral — a space that feels more like architecture than nature.'
    },
    {
      type: 'heading',
      content: 'When to Visit'
    },
    {
      type: 'paragraph',
      content: 'The tree is accessible year-round — it is outdoors, on open land, with no gates or restrictions. But the experience varies depending on the season.'
    },
    {
      type: 'paragraph',
      content: 'June through August is mango season, when the tree is fruiting and the canopy is at its densest and greenest. This is when you get the full experience — the tree at its most productive, the ground covered with fallen fruit, the air thick with the smell of ripening mangoes. It is also the hottest and most humid time of year, so bring water and wear light clothing.'
    },
    {
      type: 'paragraph',
      content: 'November through February offers the most comfortable weather — cool, dry winter mornings that are ideal for photography. The canopy is slightly less dense but still impressive, and the surrounding agricultural landscape is at its most photogenic with mustard fields and winter crops.'
    },
    {
      type: 'paragraph',
      content: 'The best approach: combine a visit to the Surjapuri mango tree with Ronbag Tea Garden and Ramrai Dighi (for birdwatching in winter) in a single 2-3 day Thakurgaon trip.'
    },
    {
      type: 'heading',
      content: 'What to Do When You Are There'
    },
    {
      type: 'paragraph',
      content: 'There is no formal activity list for visiting a tree. But here is what people who visit the Surjapuri mango tree actually do:'
    },
    {
      type: 'paragraph',
      content: 'They walk around the perimeter first, trying to understand the full size of the canopy. Then they walk inside it, standing at different points and looking up at the branches. They take photographs — drone shots are particularly striking because they reveal the tree\'s footprint, which looks like a building from above. They talk to local villagers about the tree\'s history and the Surjapuri mango variety. If it is mango season, they buy or taste the fruit. And then they sit under one of the branches for a while — because sitting under a 220-year-old tree is, in itself, the point of the visit.'
    },
    {
      type: 'paragraph',
      content: 'There are no facilities at the tree — no restrooms, no food stalls, no souvenir shops. The nearest refreshments are in Baliadangi town, about 15 kilometers away. Plan accordingly.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The Surjapuri mango tree is not a tourist attraction in the conventional sense. It does not have a management plan, a visitor center, or a marketing budget. It is a living thing — an organism that has been growing in the same spot for more than two centuries, producing fruit that carries its name, sheltering people who stand beneath it, and existing entirely outside the systems that Bangladesh uses to define and protect its heritage.'
    },
    {
      type: 'paragraph',
      content: 'That is what makes it worth visiting. Not because it is the largest mango tree in South Asia — though it is. Not because it is 220 years old — though it is. But because it exists without trying to be anything other than what it is: a tree that has been growing since before anyone alive today was born, and will continue to grow as long as the people around it let it.'
    },
    {
      type: 'paragraph',
      content: 'In a world of developed tourist destinations, curated experiences, and managed heritage sites, the Surjapuri mango tree is something increasingly rare: a place that is exactly what it appears to be, nothing more and nothing less.'
    },
    {
      type: 'callout',
      content: 'Some of the most important things in the world are not monuments. They are living organisms that have been growing quietly for centuries, unnoticed by the systems that decide what deserves protection. The Surjapuri mango tree is one of them.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photos/large-banyan-tree-with-hanging-roots-in-a-park-s-fXtixYxuw?w=1200&h=500&fit=crop',
      alt: 'Large ancient tree with thick trunk and sprawling canopy in a rural setting',
      caption: 'The Surjapuri mango tree at dusk — when the light fades, the canopy becomes a silhouette against the northern Bangladesh sky, and the tree looks even larger than it is. It has been doing this every evening for more than two centuries.'
    }
  ]
};

// Check if post exists
const idx = posts.findIndex(p => p.slug === 'surjapuri-mango-tree-baliadangi');
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
console.log('Paragraphs: ' + s.filter(x => x.type === 'paragraph' || x.type === 'lead').length);
console.log('Headings: ' + s.filter(x => x.type === 'heading').length);
console.log('Callouts: ' + s.filter(x => x.type === 'callout').length);
console.log('Stats grids: ' + s.filter(x => x.type === 'stats-grid').length);
console.log('Data bars: ' + s.filter(x => x.type === 'data-bar').length);
console.log('Tables: ' + s.filter(x => x.type === 'comparison').length);
