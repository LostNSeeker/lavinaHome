import type { CollectionCategory, ShopRoom } from '../types';

export const COLLECTIONS: CollectionCategory[] = [
  {
    id: 'col-1',
    title: 'Dreamy Nursery Carpets',
    tagline: '100% organic New Zealand wool, ultra-plush & non-toxic.',
    description: 'Cloud-soft underfoot texture with gentle pastel tones designed for little dreamers and tummy-time adventures.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'carpets',
  },
  {
    id: 'col-2',
    title: 'Playroom Rugs & Playmats',
    tagline: 'Spill-resistant, machine-washable & playful geometry.',
    description: 'Tactile low-pile mats and playful shape rugs designed to spark imagination while keeping tiny knees safe.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'rugs',
  },
  {
    id: 'col-3',
    title: 'Montessori & Kids Furniture',
    tagline: 'Rounded solid oak, non-toxic plant wax finishes.',
    description: 'Child-sized ergonomic tables, mini book nooks, and sculptural chairs built to last for generations.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'furniture',
  },
  {
    id: 'col-4',
    title: 'Whimsical Room Décor',
    tagline: 'Hand-sculpted stoneware nightlights & wall charms.',
    description: 'Curated handmade treasures that bring storybook warmth and playful magic into nurseries and play spaces.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'decor',
  },
  {
    id: 'col-5',
    title: 'Organic Crib & Bed Textiles',
    tagline: 'GOTS-certified washed flax linens & tactile cloud throws.',
    description: 'Naturally breathable blankets, soft crib quilts, and cuddle cushions dyed with safe botanical pigments.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'textiles',
  },
  {
    id: 'col-6',
    title: 'Storytime & Toddler Tableware',
    tagline: 'Food-grade bamboo, smooth olive wood & silicone sets.',
    description: 'Delightful bowls, training spoons, and snack trays crafted for cheerful morning routines and tiny hands.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop',
    categorySlug: 'kitchen',
  },
];

export const ROOMS: ShopRoom[] = [
  {
    id: 'room-1',
    name: 'Dreamy Baby Nursery',
    tagline: 'Cloud-soft wool carpets, gentle pastels & soothing lighting',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'kids',
  },
  {
    id: 'room-2',
    name: 'Play & Create Room',
    tagline: 'Spill-safe washable playmats & low Montessori seating',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'living-room',
  },
  {
    id: 'room-3',
    name: 'Storybook Reading Nook',
    tagline: 'Floor cushions, warm wall lamps & tactile wool rugs',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'office',
  },
  {
    id: 'room-4',
    name: 'Cozy Toddler Bedroom',
    tagline: 'Hypoallergenic organic bedding & plush bedside runners',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'bedroom',
  },
  {
    id: 'room-5',
    name: 'Family Craft & Snack Corner',
    tagline: 'Wipe-clean wooden tables & natural fiber floor protectors',
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1200&auto=format&fit=crop',
    roomSlug: 'dining',
  },
];
