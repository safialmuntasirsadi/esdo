const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPost = {
  id: 'banglabandha-zero-point-tetulia',
  title: 'Standing at 0°: The Day I Reached the Northernmost Point of Bangladesh',
  slug: 'banglabandha-zero-point-tetulia',
  author: 'ESDO Eco Tourism',
  date: '2025-12-10',
  readTime: '13 min',
  category: 'Adventure',
  featured: true,
  excerpt: 'Every country has an edge. Bangladesh’s is at Banglabandha Zero Point in Tetulia, where you can stand at the concrete marker and say: this is where my country ends. On a clear morning, the Himalayas are visible to the north.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Banglabandha_zero_point_%282%29_%2801.03.2019%29.jpg',
  tags: ['Banglabandha', 'Zero Point', 'Tetulia', 'Panchagarh', 'border', 'Himalayas', 'adventure travel', 'northernmost Bangladesh'],
  sections: [
    {
      type: 'lead',
      content: 'In November 2025, a 117-foot-tall flagpole was inaugurated at Banglabandha border in Panchagarh — the tallest flagpole in Bangladesh. A 30-by-18-foot red and green flag now flies above the northernmost point of the country. But before it was there, before the monument, before the land port was officially operationalized in 2011, there was simply a concrete marker at the edge of a field in Tetulia Upazila, and beyond it, India.'
    },
    {
      type: 'paragraph',
      content: 'Banglabandha Zero Point is not a developed tourist destination. It is a border. A line on the ground where one country ends and another begins. And standing there — at the literal northern edge of Bangladesh — is one of the most quietly powerful travel experiences available in the country.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Banglabandha_zero_point_%282%29_%2801.03.2019%29.jpg',
      alt: 'Banglabandha Zero Point monument in Tetulia, Panchagarh',
      caption: 'The Banglabandha Zero Point monument in Tetulia, Panchagarh. This is the northernmost point of Bangladesh — where the country ends and India begins. Photo: Wikimedia Commons, March 2019.'
    },
    {
      type: 'heading',
      content: 'The Road to the Edge'
    },
    {
      type: 'paragraph',
      content: 'The journey from Dhaka to Banglabandha is approximately 470 kilometers — a 10 to 12-hour bus ride that takes you through almost the entire length of Bangladesh. You start in the delta, pass through the floodplains of the Jamuna and the old Brahmaputra, cross the barind tract with its red soil and rolling terrain, and eventually enter the far north, where the landscape flattens again and the air changes — cooler, drier, closer to the Himalayan foothills.'
    },
    {
      type: 'paragraph',
      content: 'From Panchagarh town, it is another 50 to 55 kilometers north to Tetulia, and then a few more kilometers to Banglabandha itself. The road passes through tea gardens and agricultural fields — the Kazi & Kazi Tea Estate on one side, the Tetulia market on the other, and then open land that gets progressively emptier as you approach the border.'
    },
    {
      type: 'paragraph',
      content: 'The National Highway N5 literally ends at Banglabandha Zero Point. The road stops. There is a monument, a flagpole, and beyond it, the border — the Fulbari border crossing with India. The highway continues on the other side.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/End_of_N5_at_Banglabandha_zero_point_%2801.03.2019%29.jpg',
      alt: 'End of National Highway N5 at Banglabandha Zero Point',
      caption: 'The end of National Highway N5 at Banglabandha Zero Point. The road literally stops here — this is where Bangladesh ends. Photo: Wikimedia Commons, March 2019.'
    },
    {
      type: 'heading',
      content: 'The Marker'
    },
    {
      type: 'paragraph',
      content: 'The Zero Point itself is a concrete monument — simple, unadorned, functional. It marks the precise geographic point where Bangladesh and India meet. There is no grand structure, no elaborate installation. Just a marker that says: this is it. This is the edge.'
    },
    {
      type: 'paragraph',
      content: 'What makes it extraordinary is the context. You are standing at the northernmost point of a country of 170 million people. Behind you is everything Bangladesh is — the rivers, the delta, the villages, the cities, the tea gardens, the mango trees, the rice paddies, the fish ponds, the mosques and temples and ancient ruins. In front of you is the border, the Indian state of West Bengal, and beyond that — on a clear winter morning — the Kanchenjunga range of the Himalayas, rising 157 kilometers to the north.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Zero_point_of_Banglabandha.jpg',
      alt: 'Zero Point of Banglabandha - the border marker',
      caption: 'The Zero Point marker at Banglabandha. The concrete monument marking the precise geographic location where Bangladesh and India meet. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Daily Flag Ceremony'
    },
    {
      type: 'paragraph',
      content: 'Every day at approximately 4:30 PM, a flag-lowering ceremony takes place at the Banglabandha border. Border Guards Bangladesh (BGB) and the Indian Border Security Force (BSF) each lower their respective flags in a coordinated ceremony — a quieter, more intimate version of the famous Wagah border ceremony between India and Pakistan near Lahore.'
    },
    {
      type: 'paragraph',
      content: 'The Wagah ceremony is theatrical — with high kicks, stomping, and aggressive posturing designed for crowds and cameras. The Banglabandha ceremony is nothing like that. It is slow, deliberate, and almost peaceful. A few border guards on each side. A handful of visitors watching. The flag coming down at the end of the day. The border being secured for the night. It is not a performance. It is a daily ritual of sovereignty.'
    },
    {
      type: 'paragraph',
      content: 'The new 117-foot flagpole, inaugurated in November 2025, has added a visual dimension to the ceremony that did not exist before. The massive flag, visible from across the border area, creates a dramatic focal point against the flat northern plains. In the evening light, with the Himalayas potentially visible to the north, the flag ceremony becomes something more than routine — it becomes a moment of genuine geographic and emotional significance.'
    },
    {
      type: 'heading',
      content: 'The Himalayan View'
    },
    {
      type: 'paragraph',
      content: 'Here is the fact that most Bangladeshis do not know: on a clear morning between late October and mid-November, and again from December to January, you can see Mount Kanchenjunga — the world’s third-highest mountain at 8,586 meters — from the area around Banglabandha and Tetulia.'
    },
    {
      type: 'paragraph',
      content: 'The mountain is approximately 157 kilometers away, sitting on the Nepal-Sikkim border. The distance is significant, but the atmospheric conditions in northern Bangladesh during autumn and winter sometimes create a window of extraordinary visibility. The air is clear, the humidity is low, and the mountain rises above the horizon like a white wall against the sky.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Kanchenjunga_view_from_Bangladesh.jpg',
      alt: 'Kanchenjunga mountain range visible from Tetulia, Bangladesh',
      caption: 'Mount Kanchenjunga (8,586m) visible from Tetulia, Panchagarh, Bangladesh. The world’s third-highest mountain can be seen from Bangladesh on clear autumn and winter mornings. Photo: Wikimedia Commons.'
    },
    {
      type: 'paragraph',
      content: 'The Daily Star reported that Kanchenjunga views have been "drawing tourists to Tetulia" — people traveling from across Bangladesh specifically to see the Himalayas from what they assumed was a flat country. Social media is flooded with photos of the snow-capped peak rising above the northern Bangladesh plains, and the reactions are almost always the same: disbelief, followed by wonder.'
    },
    {
      type: 'paragraph',
      content: 'The best viewing spot is the Tetulia Dak Bungalow, built on elevated ground about 15 kilometers south of Banglabandha. On exceptionally clear days, the mountain can also be glimpsed from elevated areas near the border itself. The ideal time is early morning — dawn, when the light hits the peaks and creates a pink-orange glow against the snow.'
    },
    {
      type: 'paragraph',
      content: 'In November and December, Mount Everest (8,849m) also becomes visible from the same vantage points — making the northern tip of Bangladesh one of the few places in the country where you can see two of the world’s highest mountains from a single location.'
    },
    {
      type: 'heading',
      content: 'The Land Port'
    },
    {
      type: 'paragraph',
      content: 'Banglabandha is not just a geographic marker — it is also a functioning land port. Operationalized in 2011, it connects Bangladesh with India, and through India, with Nepal and Bhutan. Goods, people, and commerce flow through this border crossing, making it one of the most economically significant border points in northern Bangladesh.'
    },
    {
      type: 'paragraph',
      content: 'The land port area has been developing steadily — warehouses, customs facilities, and administrative buildings have been constructed. The road infrastructure has improved. The new flagpole is part of a broader effort to make Banglabandha not just a border crossing but a symbol of national identity and pride.'
    },
    {
      type: 'paragraph',
      content: 'For visitors, this means that the experience of Banglabandha is layered. You come for the geographic significance — the "I stood at the edge of my country" experience. But you also witness the working reality of a border: trucks loading and unloading, customs officials processing paperwork, the daily commerce that happens at the intersection of two nations.'
    },
    {
      type: 'heading',
      content: 'The Border Experience'
    },
    {
      type: 'paragraph',
      content: 'Standing at the border at Banglabandha is a strange experience. The line between the two countries is not marked by a wall or a fence — it is an invisible line drawn across flat agricultural land. You can see the Indian side: the same flat landscape, the same crops, the same sky. The only difference is a marker and a flag.'
    },
    {
      type: 'paragraph',
      content: 'The area has a frontier-town feel — a mix of border guards, customs workers, local traders, and occasional tourists. There are small tea stalls near the port where you can sit and watch the activity. The conversation at these stalls is a mix of Bengali spoken on both sides of the border — the same language, the same cultural references, just different flags.'
    },
    {
      type: 'paragraph',
      content: 'The Chicken’s Neck corridor — the narrow strip of Indian territory connecting the northeastern states to mainland India — passes just to the west of Banglabandha. The geography of this region is geopolitically significant: you are standing at a point where Bangladesh, India, Nepal, and Bhutan converge within a relatively small radius.'
    },
    {
      type: 'heading',
      content: 'When to Visit'
    },
    {
      type: 'paragraph',
      content: 'Banglabandha is accessible year-round, but the experience varies dramatically by season.'
    },
    {
      type: 'paragraph',
      content: 'October through November is the best time for mountain viewing. The skies are clearest after the monsoon, and Kanchenjunga (and sometimes Everest) is most likely to be visible. The weather is pleasant — not too hot, not too cold — and the surrounding tea gardens and agricultural fields are green and photogenic.'
    },
    {
      type: 'paragraph',
      content: 'December through February offers the coolest weather and the most comfortable conditions for spending time outdoors at the border. The mountain visibility is still good, though not as reliable as October-November. Winter mornings at the border can be cold — temperatures can drop to 8 to 10 degrees Celsius, so bring warm clothing.'
    },
    {
      type: 'paragraph',
      content: 'June through September is monsoon season. The border is still accessible, but the sky is usually overcast (no mountain views), the roads can be muddy, and the heat and humidity are significant. Not the ideal time to visit, but still possible.'
    },
    {
      type: 'heading',
      content: 'How to Get There'
    },
    {
      type: 'paragraph',
      content: 'From Dhaka, take an overnight AC bus to Panchagarh (Hanif, Shyamoli, or other operators — approximately ৳1,200 to ৳1,800). The journey takes 10 to 12 hours. From Panchagarh town, hire a local vehicle or auto-rickshaw to Tetulia (about 1 hour, ৳200-300). From Tetulia, another auto or van to Banglabandha (30-40 minutes, ৳150-200).'
    },
    {
      type: 'paragraph',
      content: 'Alternatively, from the Indian side: Banglabandha is only about 18 kilometers from Siliguri in West Bengal — approximately 40 to 50 minutes by road. For international travelers already in India, this is often the easier approach.'
    },
    {
      type: 'paragraph',
      content: 'There is no entry fee to visit the Zero Point monument. The land port area is open to visitors, though you should carry your National ID or passport, as border areas may require identification.'
    },
    {
      type: 'heading',
      content: 'Combining with the Panchagarh Circuit'
    },
    {
      type: 'paragraph',
      content: 'Banglabandha Zero Point is best visited as part of a broader Panchagarh itinerary. The district offers four major attractions that can be combined into a single 2-day circuit.'
    },
    {
      type: 'paragraph',
      content: 'From Banglabandha, drive south to the Kazi & Kazi Tea Estate in Tetulia — Bangladesh’s only internationally certified organic tea garden, about 15 kilometers away. Then continue to the Tetulia Dak Bungalow for the Kanchenjunga viewpoint. Finally, stop at the Panchagarh Rocks Museum — Bangladesh’s only rock museum, located in Panchagarh town — on your way back.'
    },
    {
      type: 'paragraph',
      content: 'This circuit — border, tea garden, mountain view, and geology museum — covers the full Panchagarh experience in a single day or two. The distances are short, the roads are good, and each destination is entirely different from the others.'
    },
    {
      type: 'image',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Banglabandha--Zero_Point_.jpg',
      alt: 'Banglabandha Zero Point - the famous monument at the northern border of Bangladesh',
      caption: 'The Banglabandha Zero Point monument and border area. This is one of the most visited landmarks in northern Bangladesh, attracting tourists who want to stand at the literal edge of the country. Photo: Wikimedia Commons.'
    },
    {
      type: 'heading',
      content: 'The Real Story'
    },
    {
      type: 'paragraph',
      content: 'The most powerful thing about Banglabandha Zero Point is not the monument. It is not the flagpole. It is not even the Himalayan view. It is the fact that you can stand at the northernmost point of your country and feel, very concretely, where it ends.'
    },
    {
      type: 'paragraph',
      content: 'Most people go through their lives never experiencing the edge of the place they call home. They live in the middle of it — in cities, in villages, in the center of things. But standing at Banglabandha, with the Indian border stretching out in front of you and everything you know stretching out behind you, you understand something that maps cannot convey: a country is not just an idea. It is a place. And it has edges.'
    },
    {
      type: 'paragraph',
      content: 'That is why people travel to Banglabandha. Not for the infrastructure. Not for the amenities. Not for the developed tourism experience. But for the geographic truth of standing at zero — at the point where Bangladesh stops being Bangladesh and starts being something else.'
    },
    {
      type: 'callout',
      content: 'The northernmost point of Bangladesh is not a tourist destination. It is a border. But borders, when you stand at them, tell you more about a country than anything you will find in its center.',
      source: 'ESDO Eco Tourism Vision Statement, 2025'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop',
      alt: 'Open flat landscape at golden hour - northern Bangladesh plains near the border',
      caption: 'The northern Bangladesh plains near Banglabandha at sunset — flat, open, and stretching to the horizon in every direction. The border runs through this landscape, invisible but real, dividing what looks like a single continuous land.'
    }
  ]
};

const idx = posts.findIndex(p => p.slug === 'banglabandha-zero-point-tetulia');
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
console.log('Stats/Data bars/Tables: ' + (s.filter(x => ['stats-grid','data-bar','comparison','feature-grid','steps'].includes(x.type)).length));
