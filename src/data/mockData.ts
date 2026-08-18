import type { Product, CollectionCategory, ShopRoom, InstagramPost } from '../types';

export const GENERAL_COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-gen-1',
    title: 'Handgewebte Luxusteppiche',
    tagline: 'Gefertigt aus 100% Bio-Schurwolle und edlen Naturfasern.',
    description: 'Samtweicher Trittkomfort, meisterhafte Knotung und zeitlose Eleganz für anspruchsvolles Wohnen.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
    section: 'general'
  },
  {
    id: 'col-gen-2',
    title: 'Echte Naturfelle & Lammfelle',
    tagline: '100% naturbelassene Lamm- und Rinderfelle für wohligen Komfort.',
    description: 'Unvergleichlich weiche Unikate für gemütliche Wohnräume, Sessel und behagliche Schlafzimmer.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'naturfelle',
    section: 'general'
  },
  {
    id: 'col-gen-3',
    title: 'Shaggy Hochflor-Teppiche',
    tagline: 'Kuschelweicher Hochflor in eleganten Farbnuancen.',
    description: 'Dichter, samtiger Mikrofaser-Flor für ultimative Gemütlichkeit und luxuriösen Komfort unter den Füßen.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'shaggy',
    section: 'general'
  },
  {
    id: 'col-gen-4',
    title: 'Moderne Wohnteppiche',
    tagline: 'Organische Webstrukturen und harmonische Naturtöne.',
    description: 'Flachflor- und Strukturteppiche, ideal für Wohnzimmer, Essbereich und behagliche Lounge-Zonen.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
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
    title: 'Babyfelle & Kuschelmatten',
    tagline: '100% schadstofffreie Lammfelle, unvergleichlich weich & wärmend.',
    description: 'Naturbelassene Babyfelle für wohlige Kuschelecken, Krabbelwelten und das Kinderbett.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'naturfelle',
    section: 'kids'
  },
  {
    id: 'col-kids-3',
    title: 'Bunte Kinder-Shaggys',
    tagline: 'Kuscheliger Hochflor in fröhlichen Farben.',
    description: 'Wolkenweicher, pflegeleichter Flor für kleine Füße und fröhliche Kinderzimmer.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'shaggy',
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
    id: 'lux-astrid-101',
    plentyVariationId: 106801,
    name: 'Astrid Handgewebter Bio-Schurwolle Teppich',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Luxusteppiche',
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
    material: '100% Ungefärbte Neuseeland Schurwolle',
    availableMaterials: ['100% Neuseeland Bio-Schurwolle', 'Wolle & Seide Blend', 'Organische Jute Basis'],
    sizes: ['160 x 230 cm', '200 x 300 cm', '250 x 350 cm', '300 x 400 cm'],
    colors: [
      { name: 'Oatmeal & Soft Linen', hex: '#EFE7DC' },
      { name: 'Sage & Olive Gray', hex: '#69705A' },
      { name: 'Warm Terracotta', hex: '#B96A3C' }
    ],
    roomCategory: 'living-room',
    description: 'Handgewebt von Meisterhand aus ungefärbter reiner Bio-Schurwolle. Der Astrid Teppich zeichnet sich durch seine sanfte High-Low-Struktur und samtweichen Trittkomfort aus.',
    careInstructions: [
      'Regelmäßig mit glatter Düse absaugen.',
      'Punktuelle Flecken sofort mit mildem Wollwaschmittel abtupfen.',
      'Geeignet für Fußbodenheizung.'
    ],
    shippingInfo: 'Kostenlose Premium-Lieferung direkt aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 18,
      netStock: 15,
      inStock: true,
      statusLabel: 'Auf Lager (15 Stück in Dülmen)',
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
    id: 'lux-malmo-102',
    plentyVariationId: 106901,
    name: 'Malmö Handgeknüpfter Terrakotta Naturteppich',
    section: 'general',
    category: 'rugs',
    categoryLabel: 'Wollteppiche',
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
    material: 'Natürliche Jute & Schurwoll-Mikroflor',
    availableMaterials: ['Natürliche Jute & Wolle', '100% Bio-Baumwolle'],
    sizes: ['160 x 230 cm', '200 x 300 cm', '240 x 320 cm'],
    colors: [
      { name: 'Terracotta Earth', hex: '#B96A3C' },
      { name: 'Burnt Clay', hex: '#A75D36' },
      { name: 'Desert Sand', hex: '#D9C5A7' }
    ],
    roomCategory: 'bedroom',
    description: 'Der Malmö Akzentteppich vereint warme Terrakotta-Töne mit einer flach gewebten Struktur für jedes Parkett.',
    careInstructions: [
      'Alle 6 Monate um 180 Grad drehen.',
      'Nicht an losen Fäden ziehen, vorsichtig abschneiden.'
    ],
    shippingInfo: 'Kostenlose Lieferung direkt aus Dülmen.',
    stockInfo: {
      physicalStock: 12,
      netStock: 9,
      inStock: true,
      statusLabel: 'Auf Lager (9 Stück in Dülmen)',
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
    id: 'lux-kobenhavn-103',
    plentyVariationId: 107001,
    name: 'Kobenhavn Shaggy Hochflor-Teppich Naturweiß',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Shaggy Teppiche',
    price: 380,
    originalPrice: 480,
    rating: 5.0,
    reviewsCount: 62,
    primaryImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000&auto=format&fit=crop'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Soft-Touch Hochflor Mikrofaser & Schurwolle',
    availableMaterials: ['100% Soft-Touch Hochflor', 'Mikrofaser & Schurwolle'],
    sizes: ['120 x 170 cm', '160 x 230 cm', '200 x 290 cm'],
    colors: [
      { name: 'weiß', hex: '#FFFFFF' },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'mocca', hex: '#5C3D2E' },
      { name: 'beige', hex: '#D9C5A7' }
    ],
    roomCategory: 'living-room',
    description: 'Extrem dichter, samtiger Hochflor mit ca. 35 mm Florhöhe. Bringt unvergleichliche Gemütlichkeit und luxuriösen Komfort ins Wohnzimmer.',
    careInstructions: [
      'Regelmäßig ausschütteln und mit glatter Düse absaugen.',
      'Geeignet für Fußbodenheizung.'
    ],
    shippingInfo: 'Kostenlose Express-Lieferung aus Dülmen.',
    stockInfo: {
      physicalStock: 20,
      netStock: 18,
      inStock: true,
      statusLabel: 'Auf Lager (18 Stück in Dülmen)',
      warehouseName: 'KS Sales Depot (Industriestr. 23, 48249 Dülmen)'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Express Dispatch: 1–3 Business Days',
      estimatedDateRange: 'Aug 19 – Aug 21',
      carrier: 'DHL / DPD Freight'
    }
  },
  {
    id: 'lux-hague-104',
    plentyVariationId: 107501,
    name: 'Hague Samtweicher Salbei Hochflor-Teppich',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Luxusteppiche',
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
    material: 'Organische Tibet-Schurwolle & Seidenakzente',
    availableMaterials: ['Tibet-Wolle & Seide', '100% Bio-Merinowolle'],
    sizes: ['200 x 300 cm', '250 x 350 cm', '300 x 400 cm'],
    colors: [
      { name: 'Sage Green', hex: '#69705A' },
      { name: 'Deep Olive', hex: '#505744' },
      { name: 'Soft Cream', hex: '#F4EEE6' }
    ],
    roomCategory: 'living-room',
    description: 'Ein meisterhafter Plüschflor-Teppich mit handkardierter tibetischer Wolle in ruhigen Salbeitönen. Spendet wohlige Wärme und edle Haptik.',
    careInstructions: [
      'Regelmäßig sanft absaugen.',
      'Professionelle Reinigung einmal jährlich empfohlen.'
    ],
    shippingInfo: 'Premium White-Glove Lieferung inklusive.',
    stockInfo: {
      physicalStock: 8,
      netStock: 6,
      inStock: true,
      statusLabel: 'Auf Lager (6 Einheiten in Dülmen)',
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
    id: 'lux-rinderfell-105',
    sku: 'FE-2194',
    plentyVariationId: 195001,
    name: 'Echtes Brasilien Natur-Rinderfell Unikat',
    section: 'general',
    category: 'naturfelle',
    categoryLabel: 'Naturfelle',
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviewsCount: 38,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-02.JPG',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-01.JPG',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-02.JPG',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-03.JPG',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/195/middle/FE-2194-04.JPG'
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: '100% Natürliches Echtes Rinderfell',
    availableMaterials: ['100% Natürliches Echtes Rinderfell'],
    sizes: ['Naturmaß (ca. 200 x 220 cm)'],
    colors: [],
    roomCategory: 'living-room',
    description: 'Exklusives, naturbelassenes Rinderfell mit seidigem Glanz und unverwechselbarer natürlicher Zeichnung. Jedes Stück ist ein einzigartiges Unikat der Natur.',
    careInstructions: [
      'Regelmäßig an der frischen Luft ausschütteln.',
      'Mit weicher Fellbürste in Wuchsrichtung bürsten.',
      'Flecken sanft mit feuchtem Tuch abtupfen.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 14,
      netStock: 11,
      inStock: true,
      statusLabel: 'Auf Lager (11 Unikate in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'lux-lammfell-106',
    sku: 'FE-2192',
    plentyVariationId: 197001,
    name: 'Echtes Neuseeland Natur-Lammfell Goldbraun',
    section: 'general',
    category: 'naturfelle',
    categoryLabel: 'Naturfelle',
    price: 79,
    originalPrice: 99,
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
    description: 'Samtweiches, echtes Natur-Lammfell für wohlige Wärme auf Sessel, Sofa oder Parkett. Temperaturausgleichend und schadstofffrei.',
    careInstructions: [
      'Regelmäßig ausschütteln und sanft aufkämmen.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 40,
      netStock: 35,
      inStock: true,
      statusLabel: 'Auf Lager (35 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'lux-shaggy-107',
    sku: 'SH-310',
    plentyVariationId: 146001,
    name: 'Shaggy Hochflor-Teppich Flausch Mocca',
    section: 'general',
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
    sizes: ['60 x 110 cm', '80 x 150 cm', '120 x 170 cm', '160 x 230 cm', '200 x 290 cm'],
    colors: [
      { name: 'mocca', hex: '#5C3D2E' },
      { name: 'weiß', hex: '#FFFFFF' },
      { name: 'silber', hex: '#CBD5E1' },
      { name: 'schwarz', hex: '#1A202C' },
      { name: 'bordeaux', hex: '#800020' },
      { name: 'beige', hex: '#D9C5A7' }
    ],
    roomCategory: 'living-room',
    description: 'Kuschelweicher Hochflor-Shaggy mit ca. 30-35 mm Florhöhe für maximalen Komfort unter den Füßen. Ideal für Wohnzimmer und Schlafbereich.',
    careInstructions: [
      'Regelmäßig ausschütteln und mit glatter Düse absaugen.',
      'Fußbodenheizungsgeeignet und extrem strapazierfähig.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 19,
      netStock: 16,
      inStock: true,
      statusLabel: 'Auf Lager (16 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'lux-meisterstueck-108',
    sku: 'LI-111',
    plentyVariationId: 137001,
    name: 'Levina Meisterstück Handwebteppich Klassik',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Luxusteppiche',
    price: 249,
    originalPrice: 299,
    rating: 4.95,
    reviewsCount: 54,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/137/middle/LI-111.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/137/middle/LI-111p.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/137/middle/LI-111.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/137/middle/LI-111p.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/137/middle/LI-111d.jpg'
    ],
    isBestSeller: true,
    isNewArrival: true,
    material: 'Reine Neuseeland Schurwolle & Naturfaser-Kettelung',
    availableMaterials: ['Reine Neuseeland Schurwolle', 'Wolle & Jute Blend'],
    sizes: ['120 x 170 cm', '160 x 230 cm', '200 x 290 cm'],
    colors: [
      { name: 'Natur Sand', hex: '#D9C5A7' },
      { name: 'Oatmeal', hex: '#EFE7DC' }
    ],
    roomCategory: 'living-room',
    description: 'Meisterhaft gewebter Teppich aus edelster Schurwolle. Verleiht jedem Raum zeitlose Eleganz und eine spürbar behagliche Atmosphäre.',
    careInstructions: [
      'Regelmäßig mit glatter Düse absaugen.',
      'Flüssigkeiten sofort mit saugfähigem Tuch abtupfen.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 22,
      netStock: 19,
      inStock: true,
      statusLabel: 'Auf Lager (19 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'lux-livingstyle-109',
    sku: 'LS-211',
    plentyVariationId: 142001,
    name: 'Levina Living Style Designerteppich Graphit',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Wollteppiche',
    price: 189,
    originalPrice: 229,
    rating: 4.8,
    reviewsCount: 29,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/142/middle/LS-211.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/142/middle/LS-211-2.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/142/middle/LS-211.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/142/middle/LS-211-2.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/142/middle/LS-211-3.jpg'
    ],
    isBestSeller: false,
    isNewArrival: true,
    material: 'Strukturierte Naturwolle & Baumwollbasis',
    availableMaterials: ['Strukturierte Naturwolle'],
    sizes: ['120 x 170 cm', '160 x 230 cm', '200 x 290 cm'],
    colors: [
      { name: 'Graphit Grau', hex: '#4A5568' },
      { name: 'Anthrazit', hex: '#2D3748' }
    ],
    roomCategory: 'dining',
    description: 'Moderne geometrische Strukturwebung mit matter Haptik. Perfekt für Esszimmer, Wohnbereich und Arbeitszimmer.',
    careInstructions: [
      'Regelmäßig mit glatter Düse absaugen.',
      'Geeignet für Fußbodenheizung.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 15,
      netStock: 12,
      inStock: true,
      statusLabel: 'Auf Lager (12 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
    }
  },
  {
    id: 'lux-grandluxury-110',
    sku: 'LI-2200',
    plentyVariationId: 192001,
    name: 'Levina Grand Luxury Webteppich Elegance',
    section: 'general',
    category: 'carpets',
    categoryLabel: 'Luxusteppiche',
    price: 320,
    originalPrice: 380,
    rating: 5.0,
    reviewsCount: 42,
    primaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/192/middle/LI-2200-01.jpg',
    secondaryImage: 'https://cdn02.plentyone.com/sby0b6gglndr/item/images/192/middle/LI-2200-02.jpg',
    galleryImages: [
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/192/middle/LI-2200-01.jpg',
      'https://cdn02.plentyone.com/sby0b6gglndr/item/images/192/middle/LI-2200-02.jpg'
    ],
    isBestSeller: true,
    isNewArrival: false,
    material: '100% Feinste Schurwolle mit Kontrast-Kettelung',
    availableMaterials: ['100% Feinste Schurwolle'],
    sizes: ['160 x 230 cm', '200 x 290 cm', '240 x 340 cm'],
    colors: [
      { name: 'Klassik Creme', hex: '#FAF8F5' },
      { name: 'Warm Grau', hex: '#718096' }
    ],
    roomCategory: 'living-room',
    description: 'Hochwertige Manufakturqualität für anspruchsvolle Wohnräume. Dicht gewebter Flor mit exzellenter Schalldämmung und Wärmeisolierung.',
    careInstructions: [
      'Regelmäßig mit glatter Düse absaugen.',
      'Allergikerfreundlich & 100% schadstofffrei.'
    ],
    shippingInfo: 'Kostenloser Premium-Versand aus unserem Dülmen Logistikzentrum.',
    stockInfo: {
      physicalStock: 10,
      netStock: 8,
      inStock: true,
      statusLabel: 'Auf Lager (8 Stück in Dülmen)',
      warehouseName: 'KS Sales Dülmen Logistikzentrum'
    },
    deliveryInfo: {
      averageDays: 2,
      deliveryText: 'Standard-Lieferung: 2–4 Werktage',
      estimatedDateRange: 'Aug 19 – Aug 22',
      carrier: 'DHL / DPD Paketdienst'
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
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    title: 'Sanftes Morgenlicht über dem Astrid Handgewebten Bio-Schurwollteppich',
    roomName: 'Living Room Sanctuary',
    likes: 1420,
    taggedProducts: [GENERAL_PRODUCTS[0], GENERAL_PRODUCTS[2]]
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop',
    title: 'Harmonisches Schlafzimmer-Design mit echtem Natur-Lammfell',
    roomName: 'Serene Bedroom',
    likes: 980,
    taggedProducts: [GENERAL_PRODUCTS[5]]
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    title: 'Kuschelweicher Kobenhavn Shaggy Hochflor im eleganten Wohnbereich',
    roomName: 'Tactile Dining Space',
    likes: 1150,
    taggedProducts: [GENERAL_PRODUCTS[2], GENERAL_PRODUCTS[3]]
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    title: 'Warme Holztexturen & Malmö Terrakotta Naturteppich im ruhigen Arbeitsbereich',
    roomName: 'Minimalist Office',
    likes: 870,
    taggedProducts: [GENERAL_PRODUCTS[1], GENERAL_PRODUCTS[7]]
  }
];
