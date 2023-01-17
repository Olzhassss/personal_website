import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    return {
        iLikeTexts: poem,
    }
}) satisfies PageLoad;

const poem = [
"Here is a sample list,",
"And not a short one",
"...........",
"I like, I love, who cares..?",
"Well, if you care, then listen:",
"I like ...",
"My husband, who is my main man and best friend.",
"Meeting people who inspire me with their spunk, spirit and passion – even when they don’t realise it!",
"The beach at sunset, breeze in the hair, waves lapping at the shore.",
"Learning new things.",
"Belly laughs.",
"A long, hot shower at the end of a long day.",
"Travel.",
"Sleep-ins and naps. This girl loves her sleep, and she loves to sleep in. She’s also not a morning person…some things will never change!",
"Comfy shoes. ",
"Having red hair. It took me long enough to like and love it!",
"Dogs.",
"Our home is old, cluttered and falling apart. However, it’s home, and I love it.",
"Singapore. I love the heat, the food, the people, and the culture. I can’t get enough of the place.",
"Well-fitting, comfortable underwear!",
"Writing.",
"A good book I can’t put down.",
"Bear hugs.",
"Having good skin because having suffered from eczema and acne over the last 38 years, I treasure having good skin.",
"Comfy pyjamas, which are all the better for sleeping in!",
"A nice hot cup of tea is the cure for almost anything.",
"My beloved fur-child of 16 years, may she rest in peace.",
"Our new fur child, Freya.",
"Cuddly animals.",
"Dishwashers. Because who has time for washing dishes?",
"My red car. It’s so battered and bruised and filthy, but it enables my independence and gives me a sense of freedom to go wherever I want when I want to.",
"A freshly made bed.",
"Freshly washed hair.",
"Yoga. When I make the time for it, that is.",
"Exploring my own city as a tourist. There’s so much to discover!",
"My hubby’s cooking. In fourteen years, he’s only had three failures. Every other meal has satisfied my belly immensely and warmed my heart.",
"Pleasant surprises.",
"Clothes washing. I know … weird, right!?",
"Taking my bra off at the end of the day.",
"Snuggling under a warm rug in front of the heater in winter.",
"Mentoring others.",
"White wine.",
"Watching my husband create his late piece of art. His talent astounds me, and I love how serene he looks when he is deep in concentration creating something stunning…and he doesn’t even realise any of it.",
"A comfy, well-fitted pair of blue jeans.",
"Italy.",
"Hanging out at the dog park with our dog.",
"Live music.",
"Seeing people living in the moment and genuinely happy.",
"Chocolate ice cream.",
"That feeling of anticipation before the plane takes off on your way to somewhere exciting…",
"Me-time. The introvert in me craves it, the thinker loves it, and my body, mind and soul need it.",
"Fulfilling your dreams, no matter how big or small.",
"Adult colouring books.",
"My tattoos.",
"Wearing boots in winter.",
"I have a day off during the week to do whatever I want!",
"Driving with the windows down, hair blowing in the wind and the music up really loud!",
"The moon and stars on a cloudless night.",
"The onset of the warmer weather (minus the pollen…).",
"A good, binge-worthy TV series. ",
"Being a step-mum.",
"Walking along a beach with the fine-grained sand massaging your feet as the sun sets slowly up above.",
"Weekends where I have nothing planned.",
"Music that touches the heart and the soul.",
"All things hygge.",
"Blogging. ",
"Clean towels fresh from the dryer.",
"Working with people who make me laugh and whom I can learn from.",
"Podcasts.",
"Salt and vinegar crisps.",
"Pub meals in a traditional English pub.",
"The innocence and beauty of childhood.",
"Family.",
"You can go a year without seeing those friends, but when you do see them, it’s like you saw them yesterday.",
"Road trips.",
"Burning scented candles, oils and incense.",
"Feeling sexy 🙂",
"Cushions and throws and making my house all cosy!",
"Pinterest. I mean, it’s how I planned my wedding and discovered a love for cooking! You can check out my fave recipes here.",
"A tasty, cheesy, saucy lasagne.",
"Succulents.",
"Dancing like no one’s watching.",
"A traditional English roast dinner with all of the trimmings.",
"Being an aunty.",
"A good, firm massage that hits all of the sore spots.",
"Tropical island getaways.",
"Gentle skin products that don’t make me want to scratch my face off.",
"Online shopping.",
"A clean house (it’s very rare!).",
"Having enough money to pay the bills.",
"A good night’s sleep where I wake up feeling rested.",
"Weddings.",
"Random acts of kindness.",
"Netflix, Amazon Prime. I love how streaming has opened up so much viewing goodness!",
"Christmas.",
"Decluttering our house.",
"Hot chips (well, anything potato, really…).",
"Going to the cinema.",
"Watching comedy specials that make me almost piss myself laughing 🙂",
"Date night.",
"Good customer service.",
"Bacon.",
"Gift giving. I haven’t had a lot of money to give gifts over the last few weeks, and yes, it’s the thought that counts…but I still like to give people little quirky gifts and books. I am the book lady, and I love finding books about things people are passionate about and surprising them with them.",
"Paris.",
"You.",
]