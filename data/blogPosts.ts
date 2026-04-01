export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: BlogSection[];
  relatedSlugs: string[];
}

export interface BlogSection {
  type: 'paragraph' | 'h2' | 'list' | 'cta-inline';
  text?: string;
  items?: string[];
  href?: string;
  linkText?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-mow-lawn-brisbane',
    title: 'How Often Should You Mow Your Lawn in Brisbane?',
    metaDescription:
      "How often should Brisbane homeowners mow their lawn? SEQ Landscaping's expert guide to lawn mowing frequency for Brisbane's subtropical climate — by season and grass type.",
    excerpt:
      "Brisbane's subtropical climate means your lawn grows aggressively in summer and slows in winter. Here's our complete guide to mowing frequency by season and grass type.",
    date: 'March 2026',
    readingTime: '5 min read',
    relatedSlugs: [
      'garden-maintenance-vs-landscaping-brisbane',
      'brisbane-lawn-care-calendar',
    ],
    content: [
      {
        type: 'paragraph',
        text: "One of the most common questions we get from Brisbane homeowners is how often they should mow their lawn. The answer isn't one-size-fits-all — it depends on your grass variety, the season, and how much rain Brisbane has been getting. As a general rule, most Brisbane lawns need mowing every 1–2 weeks in the warmer months and every 3–4 weeks in winter. Here's our complete guide.",
      },
      {
        type: 'h2',
        text: "Brisbane's Climate and Lawn Growth",
      },
      {
        type: 'paragraph',
        text: "Brisbane's subtropical climate means lawns grow aggressively from October through April — the warm, humid growing season. During these months, lawns can grow several centimetres in a single week. From May to September, growth slows significantly as temperatures drop and rainfall decreases.",
      },
      {
        type: 'h2',
        text: 'Mowing Frequency by Season in Brisbane',
      },
      {
        type: 'list',
        items: [
          "Summer (December – February): Every 7–10 days. Brisbane's heat and humidity accelerate growth. Letting your lawn get too long in summer can lead to scalping damage when you do cut it.",
          'Spring (September – November): Every 10–14 days. Growth picks up from August onwards. This is also a good time for a lawn fertiliser application.',
          'Autumn (March – May): Every 14 days. Growth begins to slow as temperatures drop.',
          'Winter (June – August): Every 3–4 weeks. Most Brisbane grasses slow significantly in winter. Some varieties like kikuyu may virtually stop growing during cooler spells.',
        ],
      },
      {
        type: 'h2',
        text: 'Mowing Frequency by Grass Type',
      },
      {
        type: 'list',
        items: [
          "Sir Walter Buffalo: Every 10–14 days in summer. One of Brisbane's most popular lawn varieties — slower growing than kikuyu but needs consistent cutting to prevent thatch buildup.",
          'Kikuyu: Every 7–10 days in summer. The fastest-growing common Brisbane lawn variety. If neglected, kikuyu can become very difficult to manage.',
          'Couch Grass: Every 7–14 days in summer. Fine-bladed and fast-growing during the warm season.',
          "Zoysia: Every 14 days in summer. Slower growing than most, which is one reason it's gaining popularity with Brisbane homeowners who want less maintenance.",
        ],
      },
      {
        type: 'h2',
        text: 'Signs Your Brisbane Lawn Needs Mowing',
      },
      {
        type: 'list',
        items: [
          'Grass is taller than 5–7cm',
          'Lawn looks uneven or rough from the street',
          'You can see the grass bending over itself',
          "It's been more than 2 weeks during summer",
        ],
      },
      {
        type: 'h2',
        text: 'The One-Third Rule for Brisbane Lawns',
      },
      {
        type: 'paragraph',
        text: "Never remove more than one-third of the grass blade in a single mow. This applies particularly in Brisbane's summer — if you've let the lawn get long, don't scalp it in one cut. Take it down gradually over 2–3 mows spaced a few days apart.",
      },
      {
        type: 'h2',
        text: 'Professional Lawn Mowing in Brisbane',
      },
      {
        type: 'paragraph',
        text: "If keeping up with mowing in Brisbane's growing season is a challenge, a regular lawn mowing contract with SEQ Landscaping & Garden Maintenance makes it easy. We service all Brisbane Southside suburbs on a weekly or fortnightly schedule — keeping your lawn at the perfect height year-round. Call Sam on 0490 770 382 for a free quote.",
      },
    ],
  },
  {
    slug: 'garden-maintenance-vs-landscaping-brisbane',
    title: 'Garden Maintenance vs. Full Landscaping: What Does Your Brisbane Yard Need?',
    metaDescription:
      "Not sure whether you need garden maintenance or a full landscaping service? SEQ Landscaping explains the difference and helps Brisbane homeowners choose the right service.",
    excerpt:
      'Garden maintenance and landscaping are related but serve very different purposes. Here is a clear breakdown to help you choose the right service for your Brisbane yard.',
    date: 'March 2026',
    readingTime: '4 min read',
    relatedSlugs: [
      'how-often-mow-lawn-brisbane',
      'brisbane-lawn-care-calendar',
    ],
    content: [
      {
        type: 'paragraph',
        text: 'One of the most common points of confusion for Brisbane homeowners is the difference between garden maintenance and landscaping. The two are related but serve very different purposes — and choosing the right one (or the right combination) can save you time and money. Here\'s a clear breakdown from the team at SEQ Landscaping.',
      },
      {
        type: 'h2',
        text: 'What is Garden Maintenance?',
      },
      {
        type: 'paragraph',
        text: "Garden maintenance is the ongoing care of an existing garden. It keeps your outdoor space looking tidy and healthy — but doesn't fundamentally change the garden's structure or design. Garden maintenance in Brisbane typically includes:",
      },
      {
        type: 'list',
        items: [
          'Regular lawn mowing',
          'Weeding garden beds',
          'Pruning shrubs and plants',
          'Edging lawn borders',
          'Fertilising',
          'Removing dead plants and debris',
          'Mulch top-ups',
        ],
      },
      {
        type: 'h2',
        text: 'What is Landscaping?',
      },
      {
        type: 'paragraph',
        text: "Landscaping involves changing, improving, or creating a garden from the ground up. It's a more significant investment but can dramatically transform a property. Brisbane landscaping services include:",
      },
      {
        type: 'list',
        items: [
          'New garden bed design and installation',
          'Planting schemes',
          'Retaining walls and earthworks',
          'Turf laying',
          'Pathways and paving',
          'Water features and garden lighting',
          'Complete outdoor transformations',
        ],
      },
      {
        type: 'h2',
        text: 'How to Know What You Need',
      },
      {
        type: 'paragraph',
        text: 'You need garden maintenance if:',
      },
      {
        type: 'list',
        items: [
          'Your garden is reasonably established but needs regular upkeep',
          'You want to maintain a tidy, presentable outdoor space',
          "You don't have time to keep up with mowing, weeding, and pruning yourself",
          'You want a regular contract to keep things consistent',
        ],
      },
      {
        type: 'paragraph',
        text: 'You need landscaping if:',
      },
      {
        type: 'list',
        items: [
          "Your garden is overgrown, poorly designed, or you've just moved in",
          'You want to change the layout or design of your outdoor space',
          "You're preparing a property for sale and need a significant uplift",
          'You want to add new features — retaining walls, turf, paths, garden beds',
        ],
      },
      {
        type: 'paragraph',
        text: 'You might need both if:',
      },
      {
        type: 'list',
        items: [
          'You want a landscaping overhaul followed by ongoing maintenance',
          "You're starting from scratch on a new property",
        ],
      },
      {
        type: 'h2',
        text: 'The SEQ Landscaping Approach',
      },
      {
        type: 'paragraph',
        text: "At SEQ Landscaping & Garden Maintenance, we offer both services — and often the best solution is a combination. Many of our Brisbane clients start with a one-off landscaping project to get their garden to a great standard, then move to a regular maintenance contract to keep it that way. Call Sam on 0490 770 382 to discuss what your Brisbane garden needs — free, no-obligation advice.",
      },
    ],
  },
  {
    slug: 'brisbane-lawn-care-calendar',
    title: 'Brisbane Lawn Care Calendar: A Month-by-Month Guide',
    metaDescription:
      "Your complete Brisbane lawn care calendar — what to do each month to keep your lawn healthy in Brisbane's subtropical climate. Expert tips from SEQ Landscaping.",
    excerpt:
      "Brisbane's subtropical climate means lawn care tasks change throughout the year. Here's our month-by-month guide for Brisbane homeowners.",
    date: 'March 2026',
    readingTime: '6 min read',
    relatedSlugs: [
      'how-often-mow-lawn-brisbane',
      'garden-maintenance-vs-landscaping-brisbane',
    ],
    content: [
      {
        type: 'paragraph',
        text: "Brisbane's subtropical climate means lawn care tasks change throughout the year. Unlike cooler climates where lawns go dormant in winter, Brisbane lawns need year-round attention — just different types of attention depending on the season. Here's our month-by-month guide for Brisbane homeowners.",
      },
      {
        type: 'h2',
        text: 'Summer (December – February)',
      },
      {
        type: 'list',
        items: [
          "Mowing: Weekly or every 10 days. Apply the one-third rule — never scalp a lawn that's gotten long.",
          'Watering: Early morning, 2–3 times per week. Avoid evening watering — promotes fungal disease in humidity.',
          'Fertilising: Hold off in peak summer heat. Wait for temperatures to ease in February/March.',
          'Watch for: Lawn grubs, brown patch fungus, and drought stress in January–February dry spells.',
        ],
      },
      {
        type: 'h2',
        text: 'Autumn (March – May)',
      },
      {
        type: 'list',
        items: [
          'Mowing: Every 14 days as growth slows.',
          'Fertilising: March–April is the best time for a slow-release fertiliser application. This feeds the lawn through winter.',
          'Aeration: April–May — aerate compacted areas to improve drainage before winter.',
          'Watch for: Thatch buildup, particularly in buffalo lawns. Consider scarifying if thatch is heavy.',
        ],
      },
      {
        type: 'h2',
        text: 'Winter (June – August)',
      },
      {
        type: 'list',
        items: [
          'Mowing: Every 3–4 weeks. Many Brisbane lawns slow dramatically in winter.',
          'Watering: Reduce frequency significantly. Brisbane winters are typically dry — water only when lawn shows stress.',
          'Weed control: Winter is a good time for broadleaf weed treatment as lawn growth is slow.',
          'Watch for: Winter grass (Poa annua) invasion. Apply pre-emergent in late April to prevent it.',
        ],
      },
      {
        type: 'h2',
        text: 'Spring (September – November)',
      },
      {
        type: 'list',
        items: [
          'Mowing: Increase to fortnightly from September, then weekly by October.',
          'Fertilising: September–October is the second-best time to fertilise. Use a nitrogen-heavy fertiliser to boost spring growth.',
          'Top dressing: October is ideal for top dressing bare or uneven areas.',
          'Watch for: Rapid growth and the potential need to increase mowing frequency faster than expected.',
        ],
      },
      {
        type: 'h2',
        text: 'Let SEQ Landscaping Handle It',
      },
      {
        type: 'paragraph',
        text: "Keeping up with Brisbane's year-round lawn care calendar is a lot of work. Our regular lawn mowing and garden maintenance contracts across Brisbane Southside take the effort off your hands — we handle the scheduling, the equipment, and the expertise. Call Sam on 0490 770 382 for a free quote.",
      },
    ],
  },
];
