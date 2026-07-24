import type { Product, CollectionCategory, ShopRoom, InstagramPost } from '../types';

export const COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-1',
    title: 'Luxury Handwoven Carpets',
    tagline: 'Crafted from 100% organic New Zealand wool and natural jute.',
    description: 'Ultra-soft underfoot texture with subtle earthy tones designed for high-end sanctuaries.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
  },
  {
    id: 'col-2',
    title: 'Minimalist Accent Rugs',
    tagline: 'Organic geometry meets Scandinavian warmth.',
    description: 'Low-pile hand-knotted accent rugs perfect for entryways, living spaces, and study rooms.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
  },
  {
    id: 'col-3',
    title: 'Bespoke Wooden Furniture',
    tagline: 'Solid oak, ash, and hand-sanded linen upholstery.',
    description: 'Timeless seating and sculptural wooden tables built by Scandinavian artisans.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'furniture',
  },
  {
    id: 'col-4',
    title: 'Artisanal Home Decor',
    tagline: 'Hand-blown glass, stoneware ceramics, and copper accents.',
    description: 'Curated home accessories that subtly elevate everyday moments.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'decor',
  },
  {
    id: 'col-5',
    title: 'Linen & Wool Textiles',
    tagline: 'Washed European flax linens and tactile throws.',
    description: 'Naturally breathable blankets, cushions, and bed coverings in calming tones.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'textiles',
  },
  {
    id: 'col-6',
    title: 'Scandinavian Kitchen & Dining',
    tagline: 'Stoneware, olive wood boards, and linen table wraps.',
    description: 'Understated tableware for intimate dinners and cozy morning rituals.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'kitchen',
  },
];

export const ROOMS: ShopRoom[] = [
  {
    id: 'room-1',
    name: 'Serene Bedroom',
    tagline: 'Soft natural fibers & restful neutrals',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'bedroom',
  },
  {
    id: 'room-2',
    name: 'Living Room Sanctuary',
    tagline: 'Statement carpets & sculptural seating',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'living-room',
  },
  {
    id: 'room-3',
    name: 'Tactile Dining Space',
    tagline: 'Handwoven floor wraps & ceramic dining setups',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'dining',
  },
  {
    id: 'room-4',
    name: 'Minimalist Home Office',
    tagline: 'Focused simplicity & warm wooden textures',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'office',
  },
  {
    id: 'room-5',
    name: 'Nursery & Kids Room',
    tagline: 'Hypoallergenic plush organic cotton rugs',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'kids',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Astrid Organic Wool Area Carpet',
    category: 'carpets',
    categoryLabel: 'Luxury Carpets',
    price: 1450,
    originalPrice: 1680,
    rating: 4.9,
    reviewsCount: 48,
    primaryImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Un-dyed New Zealand Wool',
    availableMaterials: ['100% Un-dyed Wool', 'Wool & Silk Blend', 'Organic Jute Base'],
    sizes: ['200 x 300 cm', '250 x 350 cm', '300 x 400 cm', 'Bespoke Custom Size'],
    colors: [
      { name: 'Oatmeal & Soft Linen', hex: '#EFE7DC' },
      { name: 'Sage & Olive Gray', hex: '#69705A' },
      { name: 'Warm Terracotta', hex: '#B96A3C' }
    ],
    roomCategory: 'living-room',
    description: 'Hand-loomed by master artisans using un-dyed pure wool. The Astrid Carpet features a gentle high-low loop construction that imparts subtle tactile depth without overwhelming your interior.',
    careInstructions: [
      'Vacuum regularly with brush bar off.',
      'Spot clean immediately with mild wool detergent and cool water.',
      'Professional dry cleaning recommended annually.'
    ],
    shippingInfo: 'Complimentary global white-glove delivery within 5-7 business days.'
  },
  {
    id: 'p-2',
    name: 'Malmö Hand-Knotted Terracotta Rug',
    category: 'rugs',
    categoryLabel: 'Accent Rugs',
    price: 890,
    rating: 4.8,
    reviewsCount: 32,
    primaryImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: 'Natural Jute & Wool Micro-pile',
    availableMaterials: ['Natural Jute & Wool', '100% Organic Cotton'],
    sizes: ['160 x 230 cm', '200 x 300 cm', '240 x 320 cm'],
    colors: [
      { name: 'Terracotta Earth', hex: '#B96A3C' },
      { name: 'Burnt Clay', hex: '#A75D36' },
      { name: 'Desert Sand', hex: '#D9C5A7' }
    ],
    roomCategory: 'bedroom',
    description: 'Inspired by Scandinavian archipelagos, the Malmö Accent Rug weaves rich terracotta tones into a low-pile organic structure that warms any hardwood floor.',
    careInstructions: [
      'Rotate every 6 months to ensure even wear.',
      'Do not pull loose ends; clip carefully with scissors.'
    ],
    shippingInfo: 'Dispatched in 2 business days in eco-friendly protective linen wrapping.'
  },
  {
    id: 'p-3',
    name: 'Soren Solid Oak Sculptural Lounge Chair',
    category: 'furniture',
    categoryLabel: 'Bespoke Furniture',
    price: 2100,
    originalPrice: 2400,
    rating: 5.0,
    reviewsCount: 19,
    primaryImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: 'FSC-Certified Solid European Oak & Washed Linen',
    availableMaterials: ['Solid Oak / Cream Linen', 'Solid Ash / Sage Linen', 'Blackened Oak / Charcoal Linen'],
    sizes: ['Standard Lounge (W 82cm x D 85cm x H 74cm)'],
    colors: [
      { name: 'Natural Oak & Cream', hex: '#F4EEE6' },
      { name: 'Sage Ash', hex: '#69705A' }
    ],
    roomCategory: 'living-room',
    description: 'Hand-carved curves and generous bouclé linen cushions make the Soren Armchair the architectural centerpiece of modern living spaces.',
    careInstructions: [
      'Wipe wooden frame with damp soft cloth.',
      'Cushions are removable and dry-cleanable.'
    ],
    shippingInfo: 'Delivered pre-assembled by two-person white glove logistics team.'
  },
  {
    id: 'p-4',
    name: 'Koben Stoneware Ceramic Vessel & Pedestal',
    category: 'decor',
    categoryLabel: 'Artisanal Decor',
    price: 340,
    rating: 4.7,
    reviewsCount: 56,
    primaryImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: false,
    isNewArrival: true,
    material: 'Hand-thrown Stoneware & Matte Mineral Glaze',
    availableMaterials: ['Sand Matte Ceramic', 'Deep Olive Glaze'],
    sizes: ['Medium (H 32cm)', 'Large (H 45cm)'],
    colors: [
      { name: 'Warm Taupe Sand', hex: '#D9C5A7' },
      { name: 'Chalk White', hex: '#FAF8F5' }
    ],
    roomCategory: 'dining',
    description: 'Each Koben vessel displays organic asymmetry achieved through hand-thrown techniques in our Copenhagen workshop studio.',
    careInstructions: [
      'Handwash with mild warm soap water.',
      'Safe for dry botanical displays or fresh blooms.'
    ],
    shippingInfo: 'Custom double-boxed protective foam packaging.'
  },
  {
    id: 'p-5',
    name: 'Elise French Flax Linen Duvet & Throw',
    category: 'textiles',
    categoryLabel: 'Linen Textiles',
    price: 460,
    rating: 4.9,
    reviewsCount: 88,
    primaryImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Washed European Flax Linen',
    availableMaterials: ['Stone-washed Flax Linen', 'Linen-Cashmere Blend'],
    sizes: ['Queen (230 x 230 cm)', 'King (260 x 230 cm)', 'Super King (290 x 240 cm)'],
    colors: [
      { name: 'Linen Warm Cream', hex: '#F4EEE6' },
      { name: 'Sage Meadow', hex: '#69705A' },
      { name: 'Copper Earth', hex: '#C37A4A' }
    ],
    roomCategory: 'bedroom',
    description: 'Stone-washed for incredible softness, the Elise linen bedding breathes naturally, staying cool in summer and comforting in winter.',
    careInstructions: [
      'Machine wash cool on gentle cycle.',
      'Tumble dry low or line dry in shade for relaxed texture.'
    ],
    shippingInfo: 'Comes packed in reusable linen drawstring tote.'
  },
  {
    id: 'p-6',
    name: 'Nordic Olive Wood & Stoneware Serving Set',
    category: 'kitchen',
    categoryLabel: 'Kitchenware',
    price: 280,
    rating: 4.9,
    reviewsCount: 41,
    primaryImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: false,
    isNewArrival: true,
    material: 'Reclaimed Olive Wood & Matte Ceramic',
    availableMaterials: ['Reclaimed Olive Wood', 'Smoked Oak'],
    sizes: ['Set of 6 Pieces'],
    colors: [
      { name: 'Natural Grain & Sand', hex: '#D9C5A7' }
    ],
    roomCategory: 'dining',
    description: 'Crafted from sustainable reclaimed olive wood featuring natural grain variations paired with four artisanal stoneware serving bowls.',
    careInstructions: [
      'Oil wooden boards periodically with organic food-grade mineral oil.',
      'Handwash only.'
    ],
    shippingInfo: 'Gift-wrapped in custom craft box.'
  },
  {
    id: 'p-7',
    name: 'Hague High-Pile Sage Tufted Carpet',
    category: 'carpets',
    categoryLabel: 'Luxury Carpets',
    price: 1650,
    originalPrice: 1850,
    rating: 4.95,
    reviewsCount: 27,
    primaryImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: 'Organic Tibetan Wool & Silk',
    availableMaterials: ['Tibetan Wool & Silk', 'Pure Organic Merino Wool'],
    sizes: ['200 x 300 cm', '250 x 350 cm', '300 x 400 cm'],
    colors: [
      { name: 'Sage Green', hex: '#69705A' },
      { name: 'Deep Olive', hex: '#505744' },
      { name: 'Soft Cream', hex: '#F4EEE6' }
    ],
    roomCategory: 'living-room',
    description: 'A luxurious plush pile carpet featuring hand-carded Tibetan wool in serene sage green tones. Radiates comforting warmth and tactile luxury.',
    careInstructions: [
      'Professional cleaning recommended.',
      'Blot spills immediately with white cotton cloth.'
    ],
    shippingInfo: 'White-glove indoor placement included.'
  },
  {
    id: 'p-8',
    name: 'Freja Woven Leather & Ash Bench',
    category: 'furniture',
    categoryLabel: 'Bespoke Furniture',
    price: 1250,
    rating: 4.85,
    reviewsCount: 14,
    primaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: false,
    isNewArrival: true,
    material: 'Saddle Leather & Solid Ash Wood',
    availableMaterials: ['Cognac Saddle Leather / Ash', 'Black Leather / Smoked Ash'],
    sizes: ['L 140cm x W 42cm x H 45cm'],
    colors: [
      { name: 'Cognac Terracotta', hex: '#B96A3C' },
      { name: 'Warm Oak', hex: '#96714D' }
    ],
    roomCategory: 'office',
    description: 'Hand-woven saddle leather straps integrated into an ash wood frame. Ideal for dining seating, bed-foot accents, or serene entryway styling.',
    careInstructions: ['Treat leather with natural beeswax balm once annually.'],
    shippingInfo: 'Dispatched within 3 days.'
  }
];

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'Morning light across the Astrid Organic Carpet in Copenhagen',
    roomName: 'Living Room Sanctuary',
    likes: 1420,
    taggedProducts: [PRODUCTS[0], PRODUCTS[2]]
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    title: 'Restful bedroom styling with Elise Washed Linen Bedding',
    roomName: 'Serene Bedroom',
    likes: 980,
    taggedProducts: [PRODUCTS[4]]
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    title: 'Organic stoneware setup for weekend brunching',
    roomName: 'Tactile Dining Space',
    likes: 1150,
    taggedProducts: [PRODUCTS[3], PRODUCTS[5]]
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    title: 'Warm wooden accents & low pile terracotta rug in quiet study',
    roomName: 'Minimalist Office',
    likes: 870,
    taggedProducts: [PRODUCTS[1], PRODUCTS[7]]
  }
];
