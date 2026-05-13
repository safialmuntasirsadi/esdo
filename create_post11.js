const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'panchagarh-rocks-museum',
  title: 'The Museum of Ancient Rocks in a Country Made of Mud: Panchagarh\'s Geological Secret',
  slug: 'panchagarh-rocks-museum',
  author: 'ESDO Eco Tourism',
  date: '2025-11-05',
  readTime: '11 min',
  category: 'Heritage',
  featured: true,
  excerpt: 'Bangladesh is a delta — alluvial silt, river deposits, mud. But in Panchagarh, at the country\'s northernmost edge, there is a museum of ancient rocks, petrified wood, and volcanic stones. Why? Because this is where the Himalayan rock cycle meets the Bengal basin.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Rocks_Museum_of_Panchagarh_%281%29.jpg',
  tags: ['Panchagarh', 'Rocks Museum', 'petrified wood', 'geology', 'geology tourism', 'northern Bangladesh', 'Himalayan rocks'],
  sections: [
    {
      type: 'lead',
      content: 'Bangladesh is a country made of water and mud. It sits on the largest river delta in the world — the Ganges-Brahmaputra-Meghna delta — and almost everything beneath its surface is alluvial silt, clay, and river sediment. Rocks — real, hard, geological rocks — are something you find in mountains, not in Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'Except in one place. In Panchagarh, at the northernmost edge of the country, there is a museum of ancient rocks, petrified wood, volcanic stones, and 300-year-old boats. It is the only rocks museum in Bangladesh, and it exists for a geological reason: Panchagarh sits at the point where the Himalayan rock cycle meets the Bengal basin. Stones from Tibet, Bhutan, and Darjeeling have traveled thousands of kilometers by river to end up on a college campus in the smallest district of Bangladesh.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Rocks_Museum_of_Panchagarh_%281%29.jpg',
      alt: 'Rocks Museum of Panchagarh - outdoor stone display with large ancient boulders',
      caption: 'The outdoor stone display at the Rocks Museum of Panchagarh. Large ancient boulders, petrified logs, and geological specimens are arranged across the campus of Panchagarh Government Women\'s College. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Museum'
    },
    {
      type: 'paragraph',
      content: 'The Panchagarh Rocks Museum is located on the campus of Panchagarh Government Women\'s College, about half a kilometer east of Panchagarh town. It was established in 1997 and operates as both an educational facility for college students and a tourist attraction for visitors who want to see something that exists nowhere else in Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'The museum has two sections. The outdoor gallery greets you as you enter the campus — large ancient boulders, petrified logs, and massive stones arranged in a garden setting. The indoor gallery houses smaller specimens in glass cases: petrified wood with preserved grain patterns, volcanic and sedimentary rocks, twelve types of sand, limestone, basalt, quartzite, clay-rock, and wavy flat stones from the Teesta riverbed.'
    },
    {
      type: 'paragraph',
      content: 'Among the most striking exhibits are a pair of 300-year-old boats displayed outdoors — wooden vessels that have survived three centuries and now sit alongside geological specimens that are millions of years old. The contrast between the boats and the rocks tells the story of Panchagarh itself: a place where deep geological time meets human history.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Rocks_Museum_of_Panchagarh_%284%29.jpg',
      alt: 'Rocks Museum of Panchagarh - collection of ancient stones and geological specimens',
      caption: 'The collection at the Rocks Museum of Panchagarh includes petrified wood, volcanic rocks, sedimentary stones, and specimens from the Teesta riverbed — materials that originated in the Himalayas and traveled thousands of kilometers by river to reach northern Bangladesh. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Where the Rocks Come From'
    },
    {
      type: 'paragraph',
      content: 'The rocks in this museum did not form in Panchagarh. They formed in the Himalayas — in Tibet, Bhutan, Sikkim, and Darjeeling — millions of years ago. The Himalayan mountains are being eroded constantly by rivers, and the material they carry south includes rocks, boulders, and stones of all sizes. The Teesta River, which flows from the Himalayas through Sikkim and West Bengal into northern Bangladesh, is the primary transport mechanism.'
    },
    {
      type: 'paragraph',
      content: 'When the Teesta reaches the flat plains of northern Bangladesh, it slows down and drops its heaviest material — the rocks you see in the museum. These are not river stones in the ordinary sense. They are granite from Tibet, gneiss from Bhutan, quartzite from Darjeeling, volcanic rock from ancient eruptions, and petrified wood that was buried underground 1,400 years ago and slowly mineralized into stone.'
    },
    {
      type: 'paragraph',
      content: 'Some of the silica stones and sedimentary rocks in the collection are estimated to be 20 million years old. The petrified wood specimens retain visible grain patterns — you can see the texture of wood that existed before the Pyramids of Giza were built, now turned to stone by geological processes that took millennia to complete.'
    },
    {
      type: 'heading',
      content: 'Why This Museum Is Important'
    },
    {
      type: 'paragraph',
      content: 'The Panchagarh Rocks Museum is important for two reasons. First, it is the only place in Bangladesh where you can see Himalayan geology up close. In a country that is almost entirely composed of river sediment and alluvial soil, the presence of ancient hard rocks — granite, basalt, volcanic stone, petrified wood — is a geological anomaly. The museum exists precisely because Panchagarh is where the Himalayan detritus meets the Bengal basin, and that convergence is unique.'
    },
    {
      type: 'paragraph',
      content: 'Second, the museum is an educational resource that is underutilized. College-affiliated guides are available to explain the specimens, and the knowledge they share is informal but detailed — built through years of studying the collection and understanding the geology of the region. A visitor who spends 30 to 45 minutes with one of these guides will learn more about the geological history of northern Bangladesh than they would from any textbook.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Burnt_clay_bricks_at_the_Rocks_Museum_in_Panchagarh.jpg',
      alt: 'Ancient burnt clay bricks and artifacts displayed at the Rocks Museum in Panchagarh',
      caption: 'Ancient clay artifacts and bricks displayed at the Rocks Museum in Panchagarh. The museum houses not only geological specimens but also archaeological materials including 2,000 to 3,000-year-old brick and stone sculptures. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Experience of Visiting'
    },
    {
      type: 'paragraph',
      content: 'Walking into the Rocks Museum is a surreal experience. You are on a college campus — students are walking to class, bicycles are parked near the gate, the sounds of a Bangladeshi educational institution fill the air — and then you are confronted with rocks that are older than human civilization. The juxtaposition is jarring in the best possible way.'
    },
    {
      type: 'paragraph',
      content: 'The outdoor collection is the most impressive part. The stones are large — some are boulders that would take two people to lift — and they are arranged without glass cases or labels, lying in the grass like they have been dropped there by a giant. In a sense, they have been: dropped there by the Teesta River, which carried them from the Himalayas and deposited them on the plains of northern Bangladesh when the river\'s energy was no longer sufficient to transport them further.'
    },
    {
      type: 'paragraph',
      content: 'The indoor collection is smaller but more detailed. The petrified wood specimens are in glass cases, and their preserved grain patterns are visible even to non-geologists. The twelve types of sand are displayed in small containers, each with a different color and texture. The clay-rock specimens and wavy flat stones from the Teesta riverbed demonstrate the variety of geological material that has accumulated in this region over millions of years.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Mileage_at_Rocks_Museum%2C_Panchagarh.jpg',
      alt: 'Mileage sign and entrance area at the Rocks Museum, Panchagarh',
      caption: 'The entrance area at the Rocks Museum in Panchagarh. The museum is easily accessible — located on the campus of Panchagarh Government Women\'s College, just half a kilometer from Panchagarh town. Entry is free or nominal. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Entry and Access'
    },
    {
      type: 'paragraph',
      content: 'The Rocks Museum is free or charges a nominal entry fee. It is located on the campus of Panchagarh Government Women\'s College, easily accessible by rickshaw or on foot from Panchagarh town. The museum does not have fixed opening hours — it is generally accessible during college hours, and the guards on campus will direct you to the collection.'
    },
    {
      type: 'paragraph',
      content: 'A visit takes 30 to 60 minutes depending on your interest level. For geology enthusiasts, an hour is barely enough. For casual visitors, 30 minutes gives you enough time to see the outdoor boulders, walk through the indoor gallery, and ask the guard or a college student to explain the most interesting specimens.'
    },
    {
      type: 'heading',
      content: 'The Geology of Northern Bangladesh'
    },
    {
      type: 'paragraph',
      content: 'To understand why the Rocks Museum exists, you need to understand the geology of northern Bangladesh. The region sits on the barind tract — an ancient geological plateau that is significantly older than the floodplains that make up most of the country. The barind tract is composed of red lateritic soil (rich in iron and aluminum) and is one of the few areas in Bangladesh where the surface geology is fundamentally different from the surrounding delta.'
    },
    {
      type: 'paragraph',
      content: 'Panchagarh\'s position at the northernmost edge of the barind tract means it is the first point where Himalayan river material enters Bangladesh. The Teesta River, the Mahananda River, and the Karatoya River all flow through or near Panchagarh, and all of them carry material from the Himalayas. The rocks in the museum are the heaviest material that these rivers could transport before losing the energy to carry them further south.'
    },
    {
      type: 'paragraph',
      content: 'This is why Panchagarh has rocks and the rest of Bangladesh does not. The rivers drop their heavy material here, at the edge of the delta, and continue south carrying only the finer sediment — silt, clay, and sand — that creates the flat landscape of central and southern Bangladesh.'
    },
    {
      type: 'heading',
      content: 'Combining with Other Panchagarh Attractions'
    },
    {
      type: 'paragraph',
      content: 'The Rocks Museum is in Panchagarh town itself, making it the easiest attraction to visit on a Panchagarh itinerary. It pairs naturally with the other major destinations in the district.'
    },
    {
      type: 'paragraph',
      content: 'Banglabandha Zero Point is 50 to 55 kilometers north of Panchagarh town — about an hour\'s drive. The Kazi & Kazi Tea Estate in Tetulia is roughly the same distance. The Kanchenjunga viewpoint at Tetulia Dak Bungalow is on the same route. A full Panchagarh day trip would start with the Rocks Museum in town, drive north to the tea garden, continue to the Zero Point, and return via the Dak Bungalow for a potential Himalayan view in the early morning light.'
    },
    {
      type: 'heading',
      content: 'When to Visit'
    },
    {
      type: 'paragraph',
      content: 'The Rocks Museum is accessible year-round — it is on a college campus with no seasonal restrictions. The indoor gallery is sheltered, so rain is not a problem. However, the best time to visit is November through February, when the weather is cool and you can combine the museum visit with the other Panchagarh attractions in comfortable conditions.'
    },
    {
      type: 'paragraph',
      content: 'October and November are particularly good months because they offer the clearest skies for Kanchenjunga viewing — meaning you can see the Himalayas in the morning and then visit the museum to understand the geology of the rocks that came from those same mountains.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The Panchagarh Rocks Museum is not a grand institution. It is a college campus collection — modest, underfunded, and largely unknown outside northern Bangladesh. But it holds something that no other place in the country can offer: a physical connection between Bangladesh and the Himalayas.'
    },
    {
      type: 'paragraph',
      content: 'Every rock in that museum traveled thousands of kilometers by river to get here. Granite from Tibet. Gneiss from Bhutan. Quartzite from Darjeeling. Petrified wood that was buried underground 1,400 years ago and slowly turned to stone. These are not local stones. They are travelers — geological migrants that began their journey in the highest mountains on Earth and ended up on a college campus in the smallest district of Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'That is the story of the Panchagarh Rocks Museum. Not that it has rocks. But that these rocks came from somewhere else — from mountains so far away that you cannot see them most days — and they ended up here, on a campus in Panchagarh, waiting for someone to walk through the gate and ask: how did this get here?'
    },
    {
      type: 'callout',
      content: 'The best museums are not the ones with the most elaborate exhibits. They are the ones that answer a question you didn\'t know you had. The Panchagarh Rocks Museum answers one question: where does the mountain end and the delta begin? The answer is: right here.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=500&fit=crop',
      alt: 'Misty morning over a green landscape — northern Bangladesh plains',
      caption: 'The landscape of northern Bangladesh — where the Himalayan rivers slow down, drop their stones, and continue south carrying only mud. The Rocks Museum exists because of this geological process.'
    }
  ]
};

const idx = posts.findIndex(p => p.slug === 'panchagarh-rocks-museum');
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
