// Real job photos and clips from SEQ Landscaping & Garden Maintenance.
// Files live in /public/images/work. Plates, house numbers and GPS metadata are removed.

export type WorkCategory =
  | 'Lawn Mowing'
  | 'Hedge Trimming'
  | 'Garden Maintenance'
  | 'Mulching'
  | 'Tree Trimming';

export interface WorkMedia {
  type: 'image' | 'video';
  src: string;
  /** Poster frame for videos */
  poster?: string;
  alt: string;
  category: WorkCategory;
  orientation: 'portrait' | 'landscape';
}

const dir = '/images/work';

export const workMedia: WorkMedia[] = [
  // Hedge trimming
  { type: 'image', src: `${dir}/hedge-trimming-driveway-screen.jpg`, alt: 'Rounded hedge screen beside a driveway', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-with-trailer.jpg`, alt: 'Long hedge freshly trimmed, with the trailer loaded on the lawn', category: 'Hedge Trimming', orientation: 'landscape' },
  { type: 'video', src: `${dir}/hedge-trimming-walkthrough.mp4`, poster: `${dir}/hedge-trimming-walkthrough-poster.jpg`, alt: 'Walkthrough of a tall hedge cut flat and square', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-tall-screen.jpg`, alt: 'Tall privacy hedge squared off in front of townhouses', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-picket-fence.jpg`, alt: 'Hedge along a white picket fence trimmed level', category: 'Hedge Trimming', orientation: 'landscape' },
  { type: 'video', src: `${dir}/hedge-trimming-in-progress.mp4`, poster: `${dir}/hedge-trimming-in-progress-poster.jpg`, alt: 'Hedge trimmer resting on fresh clippings beside a just-cut hedge', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-backyard-screen.jpg`, alt: 'Backyard hedge screens trimmed around a lawn', category: 'Hedge Trimming', orientation: 'landscape' },
  { type: 'image', src: `${dir}/hedge-trimming-side-path.jpg`, alt: 'Low hedge trimmed along a brick path, clippings mid clean-up', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-street-corner.jpg`, alt: 'Corner hedge shaped along the footpath', category: 'Hedge Trimming', orientation: 'landscape' },
  { type: 'image', src: `${dir}/hedge-trimming-side-garden.jpg`, alt: 'Tall hedge trimmed along a side garden path', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-pool-fence.jpg`, alt: 'Hedge trimmed along a pool fence and lawn', category: 'Hedge Trimming', orientation: 'portrait' },
  { type: 'image', src: `${dir}/hedge-trimming-driveway-bins.jpg`, alt: 'Hedge block trimmed beside a driveway', category: 'Hedge Trimming', orientation: 'portrait' },


  // Garden maintenance
  { type: 'image', src: `${dir}/hedge-and-garden-front-path.jpg`, alt: 'Front path garden bed and creeper wall kept neat', category: 'Garden Maintenance', orientation: 'portrait' },
  { type: 'image', src: `${dir}/front-garden-and-lawn.jpg`, alt: 'Front garden bed, path and lawn maintained', category: 'Garden Maintenance', orientation: 'portrait' },
  { type: 'image', src: `${dir}/garden-bed-timber-edging.jpg`, alt: 'Garden bed with new timber edging against gravel', category: 'Garden Maintenance', orientation: 'landscape' },
  { type: 'image', src: `${dir}/lawn-and-shrubs-front-yard.jpg`, alt: 'Front yard shrubs shaped and lawn mowed', category: 'Garden Maintenance', orientation: 'landscape' },


  // Lawn mowing
  { type: 'image', src: `${dir}/lawn-mowing-backyard-stripes.jpg`, alt: 'Backyard lawn freshly mowed with stripes, whipper snipper still on the grass', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'video', src: `${dir}/lawn-mowing-moorooka.mp4`, poster: `${dir}/lawn-mowing-moorooka-poster.jpg`, alt: 'Walkthrough of a freshly mowed lawn and footpath in Moorooka', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'image', src: `${dir}/lawn-mowing-backyard-shed.jpg`, alt: 'Mowed backyard lawn with tidy edges along the path', category: 'Lawn Mowing', orientation: 'landscape' },
  { type: 'video', src: `${dir}/lawn-mowing-with-gear.mp4`, poster: `${dir}/lawn-mowing-with-gear-poster.jpg`, alt: 'Mower and blower on a just-finished lawn', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'image', src: `${dir}/lawn-mowing-front-yard.jpg`, alt: 'Front yard lawn mowed and edged', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'image', src: `${dir}/lawn-mowing-side-yard.jpg`, alt: 'Narrow side yard lawn mowed beside a unit block', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'video', src: `${dir}/lawn-mowing-backyard-walkthrough.mp4`, poster: `${dir}/lawn-mowing-backyard-walkthrough-poster.jpg`, alt: 'Large backyard lawn mowed in late-afternoon light', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'image', src: `${dir}/lawn-and-hedge-unit-block.jpg`, alt: 'Lawn and hedge kept tidy at a unit block', category: 'Lawn Mowing', orientation: 'portrait' },
  { type: 'video', src: `${dir}/footpath-verge-mowing.mp4`, poster: `${dir}/footpath-verge-mowing-poster.jpg`, alt: 'Footpath verge mowed and edged along the street', category: 'Lawn Mowing', orientation: 'portrait' },


  // Mulching
  { type: 'image', src: `${dir}/mulching-garden-bed.jpg`, alt: 'Fresh mulch laid around lomandras along a fence line', category: 'Mulching', orientation: 'portrait' },


  // Tree trimming
  { type: 'video', src: `${dir}/tree-pruning-cuttings.mp4`, poster: `${dir}/tree-pruning-cuttings-poster.jpg`, alt: 'Branches cut back from an overgrown tree, ready to be cleared', category: 'Tree Trimming', orientation: 'portrait' },
];

export const workCategories: WorkCategory[] = [
  'Hedge Trimming',
  'Garden Maintenance',
  'Lawn Mowing',
  'Mulching',
  'Tree Trimming',
];

/** Media for the given categories, grouped in the order the categories are listed */
export function workFor(...categories: WorkCategory[]): WorkMedia[] {
  return categories.flatMap((c) => workMedia.filter((m) => m.category === c));
}

export function workPhoto(name: string): string {
  return `${dir}/${name}.jpg`;
}

export function workItem(file: string): WorkMedia {
  const item = workMedia.find((m) => m.src === `${dir}/${file}`);
  if (!item) throw new Error(`Unknown work media: ${file}`);
  return item;
}
