const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'experience-based-tourism-northern-bangladesh',
  title: 'Five Days of Doing — Not Seeing: The Northern Bangladesh Experience Loop',
  slug: 'experience-based-tourism-northern-bangladesh',
  author: 'ESDO Eco Tourism',
  date: '2026-04-05',
  readTime: '14 min',
  category: 'Experience',
  featured: true,
  excerpt: 'Don\'t visit northern Bangladesh to see things. Go to do them. Cycle between temples, boat across ancient lakes, watch the Himalayas turn red at sunrise, walk through a 150-year-old railway workshop, and cross bamboo bridges that have been holding since the monsoon — experiences that no guided tour, no museum, and no monument can replicate.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ramsagar_National_Park%2C_Dinajpur.jpg',
  tags: ['experiential tourism', 'cycling Bangladesh', 'boating Dinajpur', 'Saidpur railway', 'bamboo bridge', 'village walk', 'Tetulia sunrise', 'Ramsagar', 'adventure tourism', 'northern Bangladesh'],
  sections: [
    {
      type: 'lead',
      content: 'The first time you cycle through a Bangladeshi village, you understand something that no bus ride, no train journey, and no guided tour can teach you. On a bicycle, at 15 kilometers per hour, you are moving at the speed of daily life. You see the woman drawing water from the tube well. You hear the rooster calling from behind the bamboo fence. You smell the wood smoke from a morning fire. You pass the rice paddy, the pond, the mosque, the banyan tree — and between each one, there is space, and in that space, there is the landscape of a country that has been living at this pace for thousands of years.'
    },
    {
      type: 'paragraph',
      content: 'Experience-based tourism in northern Bangladesh is not about visiting destinations. It is about doing things: cycling, boating, walking, watching, participating. The landscape is flat, the roads are quiet, the rivers are navigable, and the activities are available to anyone who is willing to slow down and engage with the place rather than simply pass through it.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ramsagar_National_Park%2C_Dinajpur.jpg',
      alt: 'Ramsagar National Park lake in Dinajpur with surrounding greenery',
      caption: 'Ramsagar National Park in Dinajpur — the largest man-made lake in northern Bangladesh. Boating on this 28-hectare lake is one of the most accessible water-based experiences in the region, with both motorized and pedal boats available. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Day One: Cycling and Boating in Dinajpur'
    },
    {
      type: 'paragraph',
      content: 'Start in Dinajpur town. Rent a bicycle — there are local shops near the bus stand and the Saidpur road that rent simple single-speed bikes for ৳200 to ৳300 per day. The road south from Dinajpur town to Ramsagar National Park is 8 kilometers of flat, paved road through agricultural fields. The morning air is cool, the traffic is light, and the landscape is a mix of paddy fields, ponds, and village houses.'
    },
    {
      type: 'paragraph',
      content: 'Ramsagar is a 28-hectare man-made lake, dug in the mid-18th century by Raja Ramanath Roy of Dinajpur. The lake is surrounded by trees and parkland, and there are boats available — one motorized and one pedal boat, though availability is intermittent, so arrive early. The boating experience is simple: you get on the boat, the boatman pushes off, and you glide across open water with the historic Ramsagar temple visible on the shore. On the return cycle ride, detour through the village roads that run parallel to the main road — narrower paths, quieter, where you pass houses, ponds, and the occasional water buffalo lying in the shade.'
    },
    {
      type: 'paragraph',
      content: 'In the afternoon, cycle north from Dinajpur town to the Kantajew Temple — 20 kilometers through flat countryside. The temple itself is a cultural destination, but the ride there is the experience: passing through villages, crossing small bridges, watching the landscape shift from paddy to mustard to mango orchard depending on the season.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Village_Road_in_Bangladesh.jpg',
      alt: 'Narrow village road in rural Bangladesh lined with trees and houses',
      caption: 'A village road in rural Bangladesh — the kind of path you follow on a bicycle tour through Dinajpur. These narrow, quiet routes connect temples, lakes, orchards, and villages, offering a ground-level experience of the landscape that no vehicle can match. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Day Two: Sunrise at the Edge of the World'
    },
    {
      type: 'paragraph',
      content: 'Leave Dinajpur for Panchagarh — 50 kilometers north, about 1.5 hours by local bus or auto-rickshaw. The goal is Tetulia, the northernmost upazila in Bangladesh, where on a clear winter morning you can watch Mount Kanchenjunga — the world\'s third-highest mountain at 8,586 meters — turn red in the dawn light, 150 kilometers away.'
    },
    {
      type: 'paragraph',
      content: 'The sunrise viewing experience requires planning. You need to arrive at Tetulia before dawn — which means waking up at 4:30 AM in winter, when the temperature can be 8 to 10 degrees Celsius. The viewing spot is the Tetulia Dak Bungalow, built on elevated ground, or the banks of the Mahananda River nearby. The experience is simple: you stand in the cold, in the dark, facing north, and you wait. Then, as the light changes, the mountain appears — a white peak rising above the flat northern plains, catching the first rays of sun and turning from white to pink to gold. It lasts about 15 minutes, and it is one of the most visually improbable experiences available in Bangladesh: a Himalayan peak, visible from a flat country, at dawn.'
    },
    {
      type: 'paragraph',
      content: 'After the sunrise, walk through the nearby tea gardens — the flat-land tea estates of Tetulia, where the bushes are at eye level rather than on hillsides. The walking paths between the rows are narrow and muddy, and the experience of moving through them is different from walking on a road: you are surrounded by green on both sides, the bushes are at chest height, and the only sound is the wind through the leaves.'
    },
    {
      type: 'heading',
      content: 'Day Three: Walking Through History at Saidpur'
    },
    {
      type: 'paragraph',
      content: 'Drive from Panchagarh to Saidpur in Nilphamari — approximately 60 kilometers, 2 hours. Saidpur is home to the largest railway workshop in Bangladesh, established in 1870 by the British colonial government. The complex covers several hectares and contains massive red-brick buildings, operational machinery, and ongoing repair work on Bangladesh Railway equipment.'
    },
    {
      type: 'paragraph',
      content: 'Walking through the Saidpur Railway Workshop is like stepping into a living industrial museum. There are no guided tours, no audio guides, no entrance fees — just a working railway facility where locomotives, carriages, and components are being repaired and manufactured using methods that have changed very little in a century. You walk through workshops where men are welding steel, machining parts, painting carriages, and assembling components. The noise is industrial — the clang of metal on metal, the hiss of steam, the rumble of machinery — and the scale is impressive: buildings that are 100 meters long, ceilings 10 meters high, and equipment that weighs several tons.'
    },
    {
      type: 'paragraph',
      content: 'After the workshop, cycle through the village roads that connect Saidpur to the surrounding countryside. These are dirt paths, narrow and quiet, passing through houses where cows are tethered outside the door, where children play cricket in the yard, where the smell of cooking rice and fish curry fills the air. The cycling is slow — not because the roads are difficult, but because there is so much to see that you want to stop frequently.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/%E0%A6%B8%E0%A7%88%E0%A6%AF%E0%A6%BC%E0%A6%A6%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%B0%E0%A7%87%E0%A6%B2%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87_%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%96%E0%A6%BE%E0%A6%A8%E0%A6%BE.jpg',
      alt: 'Saidpur Railway Workshop monument and historic buildings in Nilphamari',
      caption: 'The Saidpur Railway Workshop in Nilphamari — established in 1870, this is the largest railway maintenance facility in Bangladesh. Walking through the complex is an industrial heritage experience: massive brick buildings, operational machinery, and a century of manufacturing history visible in every workshop. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Day Four: Rivers and Bamboo Bridges'
    },
    {
      type: 'paragraph',
      content: 'Drive from Saidpur to Rangpur — 75 kilometers, 2 hours. The Ghaghat River runs through Rangpur, and boat rides are available from several points along the riverbank. The boats are small, wooden, and operated by local boatmen who know every bend, every fishing spot, and every village along the river. The experience is slow — the boat moves at the pace of the current, and the landscape unfolds gradually: riverbanks lined with trees, fishermen casting nets, children bathing in the shallows, and the occasional bamboo bridge spanning the water.'
    },
    {
      type: 'paragraph',
      content: 'The bamboo bridges are temporary structures — built each year after the monsoon recedes, using bamboo poles lashed together with rope. They are narrow, flexible, and surprisingly sturdy. Crossing one is an experience in itself: the bridge flexes under your weight, the water is visible through the gaps between the bamboo poles, and the sensation is a mix of thrill and trust — trust in the builder\'s skill, and thrill in the knowledge that you are walking on a bridge made entirely of natural materials, held together by nothing more complex than rope and tension.'
    },
    {
      type: 'paragraph',
      content: 'In the late afternoon, cycle to the Kellaband Bridge area on the Teesta River, where the river is wide and the sunset creates a golden reflection on the water. The Teesta is one of the major rivers of northern Bangladesh — it flows from the Himalayas through Sikkim and West Bengal before entering Bangladesh and joining the Brahmaputra. Standing on the bridge at sunset, with the river flowing beneath you and the flat landscape stretching in every direction, you understand why the Teesta is called the lifeline of northern Bangladesh.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Single-span_bamboo_bridge.jpg',
      alt: 'Single-span bamboo bridge over a river in Bangladesh',
      caption: 'A bamboo bridge in Bangladesh — built after the monsoon recedes, using bamboo poles lashed together with rope. Crossing these temporary bridges is one of the most distinctive physical experiences available to visitors in northern Bangladesh: the bridge flexes, the water is visible below, and the sensation is unlike any modern structure. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'Day Five: Village Walks and Photography'
    },
    {
      type: 'paragraph',
      content: 'The final day is open — no scheduled activity, no destination. Just walking. The village roads of northern Bangladesh are among the most rewarding walking routes available to any visitor who is willing to slow down. The paths connect houses, ponds, fields, markets, mosques, and temples. The pace is walking pace — 5 kilometers per hour — and at that speed, you notice things that you miss on a bicycle: the pattern of the mud on a pond bank, the way the light filters through a banyan tree, the sound of a loom weaving inside a house, the smell of mustard oil being pressed in a village mill.'
    },
    {
      type: 'paragraph',
      content: 'Photography is a natural companion to walking. The landscape of northern Bangladesh is endlessly photogenic — not because it is dramatic, but because it is honest. The light is golden in the early morning and late afternoon. The colors are saturated — green paddy, yellow mustard, red brick, blue sky. The compositions are simple: a road, a tree, a pond, a house. And within that simplicity, there is an endless variety of detail.'
    },
    {
      type: 'paragraph',
      content: 'If you are interested in architecture, the METI Handmade School near Dinajpur is worth visiting. It is a mud-and-bamboo building designed by German architect Anna Heringer in collaboration with local craftsmen, and it won the Aga Khan Award for Architecture in 2007. The building is a physical demonstration of what can be achieved using only local materials and traditional techniques — mud walls, bamboo structure, and a roof that was built by the community itself.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Boat_in_river%2C_Bangladesh.jpg',
      alt: 'Small wooden boat on a river in Bangladesh with riverbank vegetation',
      caption: 'A small wooden boat on a river in northern Bangladesh — the kind of vessel used for river rides on the Ghaghat in Rangpur and the Tangon in Thakurgaon. These boats move at the pace of the current, and the landscape unfolds gradually: riverbanks, fishermen, villages, and the occasional bamboo bridge. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'What to Pack'
    },
    {
      type: 'paragraph',
      content: 'For the cycling portions: bring or rent a bicycle with functioning brakes and a comfortable seat. A helmet is recommended but not commonly worn in Bangladesh. Water bottles are essential — the humidity is high, and you will dehydrate faster than you expect.'
    },
    {
      type: 'paragraph',
      content: 'For the sunrise at Tetulia: warm clothing. Winter mornings at the Bangladesh-India border can be 8 to 10 degrees Celsius, and you will be standing still in the dark for 30 minutes waiting for the mountain to appear. A flashlight or phone light is useful for the pre-dawn walk.'
    },
    {
      type: 'paragraph',
      content: 'For the village walks: comfortable shoes, sun protection, and a camera. The paths can be dusty in the dry season and muddy after rain. A small backpack with water, snacks, and a rain jacket is sufficient.'
    },
    {
      type: 'heading',
      content: 'When to Go'
    },
    {
      type: 'paragraph',
      content: 'November through February is the ideal window. The weather is cool and dry, the roads are passable, the Himalayan views from Tetulia are clearest, and the mustard fields (in December-February) add a golden dimension to the cycling and walking routes. The rivers are calm and navigable, and the bamboo bridges are in place after the monsoon.'
    },
    {
      type: 'paragraph',
      content: 'March through April is still good for cycling and walking, but the heat rises rapidly, and the Kanchenjunga views become less reliable as atmospheric haze increases. The tea gardens are at their greenest during this period.'
    },
    {
      type: 'paragraph',
      content: 'May through September is monsoon season. Village roads become muddy, cycling is difficult, boating is risky on smaller rivers, and the Himalayan views are obscured by clouds. Not recommended for the experience loop.'
    },
    {
      type: 'callout',
      content: 'Experiential tourism is not about what you see. It is about what you do. Cycling through a village, boating on an ancient lake, watching a mountain turn red at dawn, crossing a bamboo bridge — these are experiences that you feel in your body, not just register with your eyes. And they stay with you longer than any photograph.',
      source: 'ESDO Experiential Tourism Note, 2025'
    },
    {
      type: 'heading',
      content: 'Getting There'
    },
    {
      type: 'paragraph',
      content: 'From Dhaka, the experience loop is accessible via the same routes as the other northern Bangladesh destinations. Bus to Dinajpur (8-10 hours, ৳1,200-1,800 AC) or train (Parjatan Express or Rangpur Express, 10-12 hours). From Dinajpur, the loop proceeds north to Panchagarh, east to Saidpur, south to Rangpur, and back to Dinajpur — approximately 300 kilometers total over five days.'
    },
    {
      type: 'paragraph',
      content: 'Several tour operators offer guided experiential tourism packages in northern Bangladesh. Photo Tour Bangla and Image Tours offer photography-focused 5-day extensions. ITS Holidays Ltd offers Rangpur-Dinajpur packages at ৳3,500-6,000 per day. For independent travelers, the loop is entirely doable on public transport and rented bicycles.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The most important thing about experience-based tourism in northern Bangladesh is not the activities themselves. It is the pace. When you cycle, you move at 15 kilometers per hour. When you walk, you move at 5. When you boat, you move at the speed of the current. All of these are slower than the speed of modern life — and that slowness is the point.'
    },
    {
      type: 'paragraph',
      content: 'At 15 kilometers per hour, you see the landscape differently than at 80. You notice the woman drawing water. You hear the rooster. You smell the wood smoke. You pass the pond and the mosque and the banyan tree, and between each one, there is space. And in that space, you begin to understand what it means to live in a country that has been moving at this pace for thousands of years.'
    },
    {
      type: 'paragraph',
      content: 'That is the value of experiential tourism. Not that it is adventurous. Not that it is challenging. But that it is slow. And in a world that is moving faster every day, slowness is increasingly rare — and increasingly valuable.'
    },
    {
      type: 'callout',
      content: 'The best way to experience a place is not to visit its landmarks. It is to move through it at the speed of the people who live there. In northern Bangladesh, that speed is walking pace, cycling pace, and boat pace — and each one reveals a different layer of the landscape.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sunset_over_a_river%2C_Bangladesh.jpg',
      alt: 'Golden sunset over a wide river in Bangladesh with silhouettes',
      caption: 'Sunset over a river in northern Bangladesh — the kind of golden light you find at the end of a day spent cycling, boating, and walking through the landscape. The Teesta River at Kellaband Bridge, the Ghaghat in Rangpur, or any of the smaller rivers in the region offer this same view when the light is right. Photo: Wikimedia Commons.'
    }
  ]
};

const idx = posts.findIndex(p => p.slug === 'experience-based-tourism-northern-bangladesh');
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
