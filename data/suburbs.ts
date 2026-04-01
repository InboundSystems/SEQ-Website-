export interface SuburbData {
  slug: string;
  name: string;
  postcode: string;
  description: string;
  nearbySuburbs: string[];
  localDetails: string;
}

export const suburbs: SuburbData[] = [
  {
    slug: 'tarragindi',
    name: 'Tarragindi',
    postcode: '4121',
    description: 'our home suburb',
    nearbySuburbs: ['Moorooka', 'Annerley', 'Greenslopes', 'Holland Park'],
    localDetails:
      "Tarragindi is a quiet, leafy suburb in Brisbane's inner south known for its character homes, large established gardens, and tree-lined streets. The mix of older homes and newer renovations creates strong demand for regular lawn maintenance and garden upgrades.",
  },
  {
    slug: 'greenslopes',
    name: 'Greenslopes',
    postcode: '4120',
    description: 'a nearby suburb we service regularly',
    nearbySuburbs: ['Tarragindi', 'Holland Park', 'Coorparoo', 'Stones Corner'],
    localDetails:
      "Greenslopes features a mix of post-war and contemporary homes with established gardens. The suburb's hilly terrain means many properties have tiered gardens and retaining walls that require specialist care.",
  },
  {
    slug: 'moorooka',
    name: 'Moorooka',
    postcode: '4105',
    description: 'a suburb we service regularly',
    nearbySuburbs: ['Tarragindi', 'Annerley', 'Rocklea', 'Salisbury'],
    localDetails:
      'Moorooka is a well-established Brisbane Southside suburb with a growing community of homeowners investing in their properties. The mix of renovated Queenslanders and newer homes creates diverse garden maintenance needs.',
  },
  {
    slug: 'mount-gravatt',
    name: 'Mount Gravatt',
    postcode: '4122',
    description: 'a suburb we service across Brisbane Southside',
    nearbySuburbs: ['Upper Mount Gravatt', 'Wishart', 'Mansfield', 'Coorparoo'],
    localDetails:
      "Mount Gravatt's elevated position and mix of property styles — from older homes to newer estates — creates varied landscaping needs. The hilly terrain is well suited to terraced gardens and retaining wall installations.",
  },
  {
    slug: 'coorparoo',
    name: 'Coorparoo',
    postcode: '4151',
    description: 'a popular inner-south suburb we service',
    nearbySuburbs: ['Greenslopes', 'Holland Park', 'Camp Hill', 'Norman Park'],
    localDetails:
      "Coorparoo is one of Brisbane's most popular inner-south suburbs, known for its Queenslander homes and character properties. Established gardens and hedged properties are common, creating strong demand for regular maintenance.",
  },
  {
    slug: 'holland-park',
    name: 'Holland Park',
    postcode: '4121',
    description: 'a suburb in our core service area',
    nearbySuburbs: ['Tarragindi', 'Greenslopes', 'Coorparoo', 'Robertson'],
    localDetails:
      'Holland Park features predominantly post-war homes with established gardens. The suburb has seen significant renovation activity in recent years, with many homeowners refreshing their gardens alongside home improvements.',
  },
  {
    slug: 'annerley',
    name: 'Annerley',
    postcode: '4103',
    description: 'an inner-south suburb we service regularly',
    nearbySuburbs: ['Moorooka', 'Tarragindi', 'Fairfield', 'Yeronga'],
    localDetails:
      "Annerley's heritage-listed Queenslander homes and established streetscapes require regular garden maintenance to complement the suburb's character. Many properties feature mature trees and established garden beds.",
  },
  {
    slug: 'sunnybank',
    name: 'Sunnybank',
    postcode: '4109',
    description: 'a suburb we service across Brisbane Southside',
    nearbySuburbs: ['Sunnybank Hills', 'Runcorn', 'Robertson', 'Acacia Ridge'],
    localDetails:
      "Sunnybank and Sunnybank Hills feature a mix of established homes and newer properties. The area's strong community and owner-occupier base creates consistent demand for regular garden maintenance services.",
  },
  {
    slug: 'camp-hill',
    name: 'Camp Hill',
    postcode: '4152',
    description: 'a popular Brisbane Southside suburb we service',
    nearbySuburbs: ['Coorparoo', 'Norman Park', 'Carindale', 'Morningside'],
    localDetails:
      "Camp Hill is known for its elevated position, prestige properties, and beautifully maintained gardens. The suburb's affluent character creates demand for high-quality landscaping and garden design services.",
  },
  {
    slug: 'upper-mount-gravatt',
    name: 'Upper Mount Gravatt',
    postcode: '4122',
    description: 'a suburb we regularly service',
    nearbySuburbs: ['Mount Gravatt', 'Wishart', 'Mansfield', 'Carindale'],
    localDetails:
      "Upper Mount Gravatt's established residential streets and mix of property sizes create varied landscaping needs. The suburb's proximity to Westfield Garden City makes it one of Brisbane's most active residential areas.",
  },
  {
    slug: 'yeronga',
    name: 'Yeronga',
    postcode: '4104',
    description: 'a riverside suburb we service',
    nearbySuburbs: ['Annerley', 'Fairfield', 'Moorooka', 'Rocklea'],
    localDetails:
      "Yeronga's riverside location and heritage homes make it one of Brisbane's most picturesque suburbs. Many properties feature established gardens that benefit from regular professional maintenance.",
  },
  {
    slug: 'fairfield',
    name: 'Fairfield',
    postcode: '4103',
    description: 'a suburb within our core service area',
    nearbySuburbs: ['Annerley', 'Yeronga', 'Moorooka', 'Dutton Park'],
    localDetails:
      'Fairfield is a quiet residential suburb with strong community character. The mix of older and newer properties creates varied garden styles, from traditional to contemporary low-maintenance designs.',
  },
  {
    slug: 'west-end',
    name: 'West End',
    postcode: '4101',
    description: 'an inner-city suburb we service',
    nearbySuburbs: ['Highgate Hill', 'South Brisbane', 'Dutton Park', 'Woolloongabba'],
    localDetails:
      "West End's inner-city location and urban character means many properties have smaller, high-impact gardens. The suburb's growing owner-occupier community is increasingly investing in garden design and maintenance.",
  },
  {
    slug: 'indooroopilly',
    name: 'Indooroopilly',
    postcode: '4068',
    description: 'a western suburb we service',
    nearbySuburbs: ['Taringa', 'Toowong', 'Chapel Hill', 'Chelmer'],
    localDetails:
      "Indooroopilly's prestige homes and large established properties create strong demand for professional landscaping and regular garden maintenance. The suburb's leafy character requires consistent professional care.",
  },
  {
    slug: 'logan',
    name: 'Logan',
    postcode: '4114',
    description: 'a regional area south of Brisbane we service',
    nearbySuburbs: ['Springwood', 'Underwood', 'Slacks Creek', 'Daisy Hill'],
    localDetails:
      "Logan's growing residential areas and mix of established and new properties create strong demand for lawn mowing and garden maintenance services. The area's larger block sizes mean more extensive lawn care requirements.",
  },
  {
    slug: 'ipswich',
    name: 'Ipswich',
    postcode: '4305',
    description: 'a regional city west of Brisbane we service',
    nearbySuburbs: ['Booval', 'Goodna', 'Springfield', 'Redbank Plains'],
    localDetails:
      "Ipswich's growing residential developments and established heritage homes create diverse landscaping needs. The city's strong growth means many new homeowners are establishing gardens for the first time.",
  },
  {
    slug: 'nathan',
    name: 'Nathan',
    postcode: '4111',
    description: 'a quiet suburban area we service on Brisbane Southside',
    nearbySuburbs: ['Salisbury', 'Moorooka', 'Mount Gravatt', 'Coopers Plains'],
    localDetails:
      "Nathan is a quiet residential suburb bordering Griffith University's Nathan campus. The area features a mix of established family homes and rental properties, with gardens that benefit from regular professional upkeep.",
  },
  {
    slug: 'salisbury',
    name: 'Salisbury',
    postcode: '4107',
    description: 'a suburb we service regularly on Brisbane Southside',
    nearbySuburbs: ['Moorooka', 'Nathan', 'Rocklea', 'Coopers Plains'],
    localDetails:
      "Salisbury is a well-established Brisbane Southside suburb with a strong owner-occupier community. The suburb's mix of post-war homes and newer builds creates consistent demand for lawn mowing, garden maintenance, and clean-up services.",
  },
  {
    slug: 'yeerongpilly',
    name: 'Yeerongpilly',
    postcode: '4105',
    description: 'a riverside suburb we service',
    nearbySuburbs: ['Moorooka', 'Yeronga', 'Tennyson', 'Rocklea'],
    localDetails:
      "Yeerongpilly is a quiet inner-south suburb bordered by the Brisbane River. Its heritage-style homes and established gardens make it an attractive area for homeowners investing in garden presentation and regular maintenance.",
  },
  {
    slug: 'coopers-plains',
    name: 'Coopers Plains',
    postcode: '4108',
    description: 'a suburb in our regular service area',
    nearbySuburbs: ['Salisbury', 'Sunnybank', 'Acacia Ridge', 'Moorooka'],
    localDetails:
      "Coopers Plains is a well-established residential suburb with a mix of older homes and newer developments. The area's large blocks and established gardens create ongoing demand for professional lawn mowing and garden care.",
  },
  {
    slug: 'robertson',
    name: 'Robertson',
    postcode: '4109',
    description: 'a suburb we service across Brisbane Southside',
    nearbySuburbs: ['Sunnybank', 'Macgregor', 'Holland Park', 'Tarragindi'],
    localDetails:
      "Robertson is a leafy residential suburb with predominantly post-war homes on generous blocks. Many properties feature mature trees and established garden beds, creating strong demand for regular professional garden maintenance.",
  },
  {
    slug: 'holland-park-west',
    name: 'Holland Park West',
    postcode: '4121',
    description: 'a suburb within our core service area',
    nearbySuburbs: ['Holland Park', 'Tarragindi', 'Greenslopes', 'Moorooka'],
    localDetails:
      "Holland Park West sits adjacent to Holland Park and shares its character of post-war homes with established gardens. The suburb has seen steady renovation activity, with homeowners upgrading both their homes and outdoor spaces.",
  },
  {
    slug: 'mount-gravatt-east',
    name: 'Mount Gravatt East',
    postcode: '4122',
    description: 'a suburb we service on Brisbane Southside',
    nearbySuburbs: ['Mount Gravatt', 'Coorparoo', 'Wishart', 'Carina'],
    localDetails:
      "Mount Gravatt East features a diverse mix of residential properties from Queenslander-style homes to contemporary builds. The suburb's varied terrain and garden styles create demand for everything from regular lawn mowing to full landscaping projects.",
  },
  {
    slug: 'wishart',
    name: 'Wishart',
    postcode: '4122',
    description: 'a suburb we service regularly',
    nearbySuburbs: ['Mount Gravatt', 'Upper Mount Gravatt', 'Mansfield', 'Carindale'],
    localDetails:
      "Wishart is a popular family suburb with well-maintained residential streets and a mix of established and newer homes. The suburb's owner-occupier community takes pride in their properties, creating strong demand for quality lawn and garden services.",
  },
  {
    slug: 'sunnybank-hills',
    name: 'Sunnybank Hills',
    postcode: '4109',
    description: 'a suburb we service across Brisbane Southside',
    nearbySuburbs: ['Sunnybank', 'Macgregor', 'Runcorn', 'Robertson'],
    localDetails:
      "Sunnybank Hills is a well-established suburb with a diverse community and a mix of property sizes. The area's larger blocks and established gardens make it an ideal location for regular lawn mowing and garden maintenance services.",
  },
  {
    slug: 'macgregor',
    name: 'Macgregor',
    postcode: '4109',
    description: 'a suburb we service on Brisbane Southside',
    nearbySuburbs: ['Sunnybank Hills', 'Robertson', 'Eight Mile Plains', 'Runcorn'],
    localDetails:
      "Macgregor is a quiet, family-friendly suburb with well-established residential streets. Many properties feature mature gardens that require regular professional attention to maintain their presentation.",
  },
  {
    slug: 'eight-mile-plains',
    name: 'Eight Mile Plains',
    postcode: '4113',
    description: 'a suburb we service in the south Brisbane corridor',
    nearbySuburbs: ['Upper Mount Gravatt', 'Macgregor', 'Runcorn', 'Wishart'],
    localDetails:
      "Eight Mile Plains is a growing suburban area with a mix of established homes and newer developments. The suburb's family-oriented character and owner-occupier base create consistent demand for lawn mowing and garden maintenance.",
  },
  {
    slug: 'runcorn',
    name: 'Runcorn',
    postcode: '4113',
    description: 'a suburb we service on Brisbane Southside',
    nearbySuburbs: ['Sunnybank Hills', 'Eight Mile Plains', 'Kuraby', 'Macgregor'],
    localDetails:
      "Runcorn features a mix of housing styles on varied block sizes. The suburb's growing residential community and strong owner-occupier base create steady demand for regular lawn care and garden maintenance services.",
  },
  {
    slug: 'kuraby',
    name: 'Kuraby',
    postcode: '4112',
    description: 'a southern suburb we service',
    nearbySuburbs: ['Runcorn', 'Eight Mile Plains', 'Calamvale', 'Stretton'],
    localDetails:
      "Kuraby is a quiet southern Brisbane suburb with a mix of established and newer residential properties. The area's larger blocks and family homes create ongoing demand for professional lawn mowing and garden upkeep.",
  },
  {
    slug: 'highgate-hill',
    name: 'Highgate Hill',
    postcode: '4101',
    description: 'an inner-city suburb we service',
    nearbySuburbs: ['West End', 'South Brisbane', 'Dutton Park', 'Woolloongabba'],
    localDetails:
      "Highgate Hill is a sought-after inner-city suburb known for its elevated position and stunning city views. Its heritage Queenslander homes and established gardens require skilled, careful maintenance to preserve their character and street appeal.",
  },
  {
    slug: 'dutton-park',
    name: 'Dutton Park',
    postcode: '4102',
    description: 'an inner-south suburb we service',
    nearbySuburbs: ['Highgate Hill', 'Woolloongabba', 'Fairfield', 'Annerley'],
    localDetails:
      "Dutton Park is a compact inner-south suburb with a growing owner-occupier community. Its character homes and smaller garden footprints suit targeted garden maintenance and design services focused on maximising limited outdoor space.",
  },
  {
    slug: 'woolloongabba',
    name: 'Woolloongabba',
    postcode: '4102',
    description: 'an inner-south suburb we service',
    nearbySuburbs: ['East Brisbane', 'Kangaroo Point', 'Dutton Park', 'Annerley'],
    localDetails:
      "Woolloongabba is a vibrant inner-south suburb undergoing significant transformation. Its mix of heritage homes and newer townhouses creates varied garden maintenance needs, from traditional Queenslander gardens to contemporary low-maintenance designs.",
  },
  {
    slug: 'kangaroo-point',
    name: 'Kangaroo Point',
    postcode: '4169',
    description: 'an inner-city suburb we service',
    nearbySuburbs: ['East Brisbane', 'Woolloongabba', 'South Brisbane', 'New Farm'],
    localDetails:
      "Kangaroo Point is a prestige inner-city suburb with stunning river views and a mix of heritage homes and modern apartments. Its compact but high-value gardens suit premium garden maintenance and design services.",
  },
  {
    slug: 'east-brisbane',
    name: 'East Brisbane',
    postcode: '4169',
    description: 'an inner-city suburb we service',
    nearbySuburbs: ['Kangaroo Point', 'Woolloongabba', 'Morningside', 'Coorparoo'],
    localDetails:
      "East Brisbane is a well-established inner suburb with a mix of character homes, townhouses, and established gardens. The suburb's central location and owner-occupier community create consistent demand for quality garden maintenance services.",
  },
  {
    slug: 'corinda',
    name: 'Corinda',
    postcode: '4075',
    description: 'a western suburb we service',
    nearbySuburbs: ['Sherwood', 'Graceville', 'Oxley', 'Chelmer'],
    localDetails:
      "Corinda is a well-established western suburb with generous block sizes and mature, leafy streetscapes. The suburb's predominantly post-war homes and established gardens create strong demand for regular lawn mowing and garden upkeep.",
  },
  {
    slug: 'sherwood',
    name: 'Sherwood',
    postcode: '4075',
    description: 'a leafy western suburb we service',
    nearbySuburbs: ['Corinda', 'Graceville', 'Indooroopilly', 'Rocklea'],
    localDetails:
      "Sherwood is one of Brisbane's most desirable western suburbs, known for its large blocks, heritage character homes, and beautifully maintained gardens. The suburb's prestige character creates strong demand for high-quality landscaping and regular professional garden care.",
  },
];
