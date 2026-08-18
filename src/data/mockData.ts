import type { Product, CollectionCategory, ShopRoom, InstagramPost } from '../types';

export const GENERAL_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-gen-1',
    title: 'Luxury Handwoven Carpets',
    tagline: 'Crafted from 100% organic New Zealand wool and natural jute.',
    description: 'Ultra-soft underfoot texture with subtle earthy tones designed for high-end sanctuaries.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
    section: 'general'
  },
  {
    id: 'col-gen-2',
    title: 'Minimalist Accent Rugs',
    tagline: 'Organic geometry meets Scandinavian warmth.',
    description: 'Low-pile hand-knotted accent rugs perfect for entryways, living spaces, and study rooms.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
    section: 'general'
  },
  {
    id: 'col-gen-3',
    title: 'Bespoke Wooden Furniture',
    tagline: 'Solid oak, ash, and hand-sanded linen upholstery.',
    description: 'Timeless seating and sculptural wooden tables built by Scandinavian artisans.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'furniture',
    section: 'general'
  },
  {
    id: 'col-gen-4',
    title: 'Artisanal Home Decor',
    tagline: 'Hand-blown glass, stoneware ceramics, and copper accents.',
    description: 'Curated home accessories that subtly elevate everyday moments.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'decor',
    section: 'general'
  },
  {
    id: 'col-gen-5',
    title: 'Linen & Wool Textiles',
    tagline: 'Washed European flax linens and tactile throws.',
    description: 'Naturally breathable blankets, cushions, and bed coverings in calming tones.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'textiles',
    section: 'general'
  },
  {
    id: 'col-gen-6',
    title: 'Scandinavian Kitchen & Dining',
    tagline: 'Stoneware, olive wood boards, and linen table wraps.',
    description: 'Understated tableware for intimate dinners and cozy morning rituals.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'kitchen',
    section: 'general'
  }
];

export const KIDS_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-kids-1',
    title: 'Kinderteppiche & Spielwelten',
    tagline: 'Lillifee, Felix, Sharky, T-Rex & viele mehr — 100% schadstoffgeprüft.',
    description: 'Zauberhafte Motive, spürbar weicher Flor und kindersichere Materialien für kleine Entdecker und gemütliche Kinderzimmer.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
    section: 'kids'
  },
  {
    id: 'col-kids-2',
    title: 'Echte Naturfelle & Lammfelle',
    tagline: '100% natürliche Lamm- und Rinderfelle, unvergleichlich weich & wärmend.',
    description: 'Naturbelassene Unikate für wohlige Kuschelecken, Babybetten und stilvolle Akzente im modernen Wohnraum.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'naturfelle',
    section: 'kids'
  },
  {
    id: 'col-kids-3',
    title: 'Shaggy Hochflor-Teppiche',
    tagline: 'Kuscheliger Hochflor in 9 brillanten Farbtönen.',
    description: 'Dichter, samtiger Mikrofaser-Flor für ultimative Gemütlichkeit und luxuriösen Komfort unter den Füßen.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'shaggy',
    section: 'kids'
  },
  {
    id: 'col-kids-4',
    title: 'Wohnteppiche & Modern Living',
    tagline: 'Zeitlose Eleganz und strapazierfähige Webkunst.',
    description: 'Harmonische Designs und edle Texturen für behagliche Wohn- und Schlafzimmer.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
    section: 'kids'
  }
];

export const COLLECTIONS = GENERAL_COLLECTIONS;

export const GENERAL_ROOMS: ShopRoom[] = [
  {
    id: 'room-gen-1',
    name: 'Serene Bedroom',
    tagline: 'Soft natural fibers & restful neutrals',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'bedroom',
    section: 'general'
  },
  {
    id: 'room-gen-2',
    name: 'Living Room Sanctuary',
    tagline: 'Statement carpets & sculptural seating',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'living-room',
    section: 'general'
  },
  {
    id: 'room-gen-3',
    name: 'Tactile Dining Space',
    tagline: 'Handwoven floor wraps & ceramic dining setups',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'dining',
    section: 'general'
  },
  {
    id: 'room-gen-4',
    name: 'Minimalist Home Office',
    tagline: 'Focused simplicity & warm wooden textures',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    roomSlug: 'office',
    section: 'general'
  }
];

export const KIDS_ROOMS: ShopRoom[] = [
  {
    id: 'room-kids-1',
    name: 'Dreamy Baby Nursery',
    tagline: 'Cloud-soft wool carpets, gentle pastels & soothing lighting',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'kids',
    section: 'kids'
  },
  {
    id: 'room-kids-2',
    name: 'Play & Create Room',
    tagline: 'Spill-safe washable playmats & low Montessori seating',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'living-room',
    section: 'kids'
  },
  {
    id: 'room-kids-3',
    name: 'Storybook Reading Nook',
    tagline: 'Floor cushions, warm wall lamps & tactile wool rugs',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'office',
    section: 'kids'
  },
  {
    id: 'room-kids-4',
    name: 'Cozy Toddler Bedroom',
    tagline: 'Hypoallergenic organic bedding & plush bedside runners',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'bedroom',
    section: 'kids'
  },
  {
    id: 'room-kids-5',
    name: 'Family Craft & Snack Corner',
    tagline: 'Wipe-clean wooden tables & natural fiber floor protectors',
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'dining',
    section: 'kids'
  }
];

export const ROOMS = GENERAL_ROOMS;

export const GENERAL_PRODUCTS: Product[] = [
  {
    id: 'PO-1068',
    plentyVariationId: 1068,
    name: 'Astrid Organic Wool Area Carpet',
    section: 'general',
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
    sizes: ['200 x 300 cm', '250 x 350 cm', '300 x 400 cm'],
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
    shippingInfo: 'Complimentary global white-glove delivery within 2-4 business days.',
    stockInfo: {
      physicalStock: 18,
      netStock: 15,
      inStock: true,
      statusLabel: 'In Stock (15 units at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 3,
      deliveryText: 'Standard Dispatch: 2–4 Business Days',
      estimatedDateRange: 'Aug 20 – Aug 23',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1069',
    plentyVariationId: 1069,
    name: 'Malmö Hand-Knotted Terracotta Rug',
    section: 'general',
    category: 'rugs',
    categoryLabel: 'Accent Rugs',
    price: 890,
    originalPrice: 1050,
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
    shippingInfo: 'Dispatched in 2 business days in eco-friendly protective linen wrapping.',
    stockInfo: {
      physicalStock: 12,
      netStock: 9,
      inStock: true,
      statusLabel: 'In Stock (9 units at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 3,
      deliveryText: 'Standard Dispatch: 2–4 Business Days',
      estimatedDateRange: 'Aug 20 – Aug 23',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1070',
    plentyVariationId: 1070,
    name: 'Soren Solid Oak Sculptural Lounge Chair',
    section: 'general',
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
    shippingInfo: 'Delivered pre-assembled by two-person white glove logistics team.',
    stockInfo: {
      physicalStock: 6,
      netStock: 4,
      inStock: true,
      statusLabel: 'Low Stock (Only 4 available)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 4,
      deliveryText: 'White-Glove Freight: 3–5 Business Days',
      estimatedDateRange: 'Aug 21 – Aug 24',
      carrier: 'White-Glove Courier'
    }
  },
  {
    id: 'PO-1071',
    plentyVariationId: 1071,
    name: 'Koben Stoneware Ceramic Vessel & Pedestal',
    section: 'general',
    category: 'decor',
    categoryLabel: 'Artisanal Decor',
    price: 340,
    originalPrice: 420,
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
    shippingInfo: 'Custom double-boxed protective foam packaging.',
    stockInfo: {
      physicalStock: 24,
      netStock: 20,
      inStock: true,
      statusLabel: 'In Stock (20 units at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Express Dispatch: 1–3 Business Days',
      estimatedDateRange: 'Aug 19 – Aug 21',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1073',
    plentyVariationId: 1073,
    name: 'Elise French Flax Linen Duvet & Throw',
    section: 'general',
    category: 'textiles',
    categoryLabel: 'Linen Textiles',
    price: 460,
    originalPrice: 520,
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
    shippingInfo: 'Comes packed in reusable linen drawstring tote.',
    stockInfo: {
      physicalStock: 30,
      netStock: 28,
      inStock: true,
      statusLabel: 'In Stock (28 sets at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Express Dispatch: 1–3 Business Days',
      estimatedDateRange: 'Aug 19 – Aug 21',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1074',
    plentyVariationId: 1074,
    name: 'Nordic Olive Wood & Stoneware Serving Set',
    section: 'general',
    category: 'kitchen',
    categoryLabel: 'Kitchenware',
    price: 280,
    originalPrice: 320,
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
    shippingInfo: 'Gift-wrapped in custom craft box.',
    stockInfo: {
      physicalStock: 14,
      netStock: 11,
      inStock: true,
      statusLabel: 'In Stock (11 sets at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 3,
      deliveryText: 'Standard Dispatch: 2–4 Business Days',
      estimatedDateRange: 'Aug 20 – Aug 23',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1075',
    plentyVariationId: 1075,
    name: 'Hague High-Pile Sage Tufted Carpet',
    section: 'general',
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
    shippingInfo: 'White-glove indoor placement included.',
    stockInfo: {
      physicalStock: 8,
      netStock: 6,
      inStock: true,
      statusLabel: 'In Stock (6 units at Dülmen Depot)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 3,
      deliveryText: 'Standard Dispatch: 2–4 Business Days',
      estimatedDateRange: 'Aug 20 – Aug 23',
      carrier: 'DHL / DPD Freight White-Glove'
    }
  },
  {
    id: 'PO-1076',
    plentyVariationId: 1076,
    name: 'Freja Woven Leather & Ash Bench',
    section: 'general',
    category: 'furniture',
    categoryLabel: 'Bespoke Furniture',
    price: 1250,
    originalPrice: 1450,
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
    shippingInfo: 'Dispatched within 3 days.',
    stockInfo: {
      physicalStock: 5,
      netStock: 3,
      inStock: true,
      statusLabel: 'Low Stock (Only 3 left)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 4,
      deliveryText: 'White-Glove Freight: 3–5 Business Days',
      estimatedDateRange: 'Aug 21 – Aug 24',
      carrier: 'White-Glove Courier'
    }
  }
];

export const KIDS_PRODUCTS: Product[] = [
  {
    id: 'PO-175',
    plentyVariationId: 175,
    name: 'Prinzessin Lillifee Spielteppich Zauberhaft',
    section: 'kids',
    category: 'carpets',
    categoryLabel: 'Kinderteppiche',
    price: 89,
    originalPrice: 119,
    rating: 5.0,
    reviewsCount: 64,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401-2.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/175/middle/LK-401-2.jpg'
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: '100% Weicher Soft-Polyacryl Flor, OEKO-TEX® Standard 100',
    availableMaterials: ['100% Weicher Soft-Polyacryl Flor'],
    sizes: ['100 x 120 cm', '150 x 120 cm'],
    colors: [
      { name: 'Rosa Pastel', hex: '#F8BBD0' },
      { name: 'Zartweiß', hex: '#FFFFFF' }
    ],
    roomCategory: 'kids',
    description: 'Der offizielle Prinzessin Lillifee Spielteppich verwandelt jedes Kinderzimmer in ein märchenhaftes Schloss. Schadstoffgeprüft nach OEKO-TEX® Standard 100.',
    careInstructions: [
      'Regelmäßig mit handelsüblichem Staubsauger absaugen.',
      'Punktuelle Flecken mit mildem Tuch entfernen.',
      'Geeignet für Fußbodenheizung.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand direkt aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 25,
      netStock: 22,
      inStock: true,
      statusLabel: 'Auf Lager (22 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum (Industriestr. 23)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'PO-197',
    plentyVariationId: 197,
    name: 'Echtes Neuseeland Natur-Lammfell',
    section: 'kids',
    category: 'naturfelle',
    categoryLabel: 'Naturfelle',
    price: 69,
    originalPrice: 89,
    rating: 4.9,
    reviewsCount: 92,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-02.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-02.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-01.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/197/middle/FE-2192-03.jpg'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Echtes Neuseeland-Lammfell',
    availableMaterials: ['100% Echtes Medizinisches Lammfell', '100% Echtes Neuseeland-Lammfell'],
    sizes: ['Naturmaß (ca. 100-110 cm)'],
    colors: [],
    roomCategory: 'bedroom',
    description: 'Samtweiches, echtes Natur-Lammfell für unvergleichliche Gemütlichkeit und wohlige Wärme im Baby- und Wohnbereich. Temperaturausgleichend und schadstofffrei.',
    careInstructions: [
      'Regelmäßig an der frischen Luft ausschütteln und sanft lüften.',
      'Mit einer weichen Fellbürste sanft in Wuchsrichtung aufkämmen.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand direkt aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 40,
      netStock: 35,
      inStock: true,
      statusLabel: 'Auf Lager (35 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum (Industriestr. 23)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'PO-146',
    plentyVariationId: 146,
    name: 'Shaggy Hochflor-Teppich Flausch',
    section: 'kids',
    category: 'carpets',
    categoryLabel: 'Shaggy Teppiche',
    price: 59,
    originalPrice: 79,
    rating: 4.85,
    reviewsCount: 38,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310-2.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310-2.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/146/middle/SH-310-3.jpg'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Soft-Touch Hochflor Polypropylen / Mikrofaser',
    availableMaterials: ['100% Soft-Touch Hochflor Mikrofaser'],
    sizes: ['60 x 110 cm', '80 x 150 cm', '120 x 170 cm', '160 x 230 cm'],
    colors: [
      { name: 'weiß', hex: '#FFFFFF' },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'aubergine', hex: '#4A154B' },
      { name: 'mocca', hex: '#5C3D2E' }
    ],
    roomCategory: 'living-room',
    description: 'Kuschelweicher Hochflor-Shaggy mit ca. 30-35 mm Florhöhe für maximalen Komfort unter den Füßen. Ideal für Wohnzimmer und Spielzimmer.',
    careInstructions: [
      'Regelmäßig ausschütteln und mit glatter Düse absaugen.',
      'Fußbodenheizungsgeeignet und extrem strapazierfähig.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand direkt aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 19,
      netStock: 16,
      inStock: true,
      statusLabel: 'Auf Lager (16 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum (Industriestr. 23)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  }
];

export const PRODUCTS = [...GENERAL_PRODUCTS, ...KIDS_PRODUCTS];

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'Morning light across the Astrid Organic Carpet in Copenhagen',
    roomName: 'Living Room Sanctuary',
    likes: 1420,
    taggedProducts: [GENERAL_PRODUCTS[0], GENERAL_PRODUCTS[2]]
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    title: 'Restful bedroom styling with Elise Washed Linen Bedding',
    roomName: 'Serene Bedroom',
    likes: 980,
    taggedProducts: [GENERAL_PRODUCTS[4]]
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    title: 'Organic stoneware setup for weekend brunching',
    roomName: 'Tactile Dining Space',
    likes: 1150,
    taggedProducts: [GENERAL_PRODUCTS[3], GENERAL_PRODUCTS[5]]
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    title: 'Warm wooden accents & low pile terracotta rug in quiet study',
    roomName: 'Minimalist Office',
    likes: 870,
    taggedProducts: [GENERAL_PRODUCTS[1], GENERAL_PRODUCTS[7]]
  }
];
