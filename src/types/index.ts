export interface Product {
  id: string;
  name: string;
  category: 'carpets' | 'rugs' | 'furniture' | 'decor' | 'textiles' | 'kitchen';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  primaryImage: string;
  secondaryImage: string;
  galleryImages: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  material: string;
  availableMaterials: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  roomCategory: 'bedroom' | 'living-room' | 'dining' | 'office' | 'kids';
  description: string;
  careInstructions: string[];
  shippingInfo: string;
}

export interface CartItem {
  id: string; // unique cart item id
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  selectedMaterial: string;
}

export interface CollectionCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  categorySlug: 'carpets' | 'rugs' | 'furniture' | 'decor' | 'textiles' | 'kitchen';
}

export interface ShopRoom {
  id: string;
  name: string;
  tagline: string;
  image: string;
  roomSlug: 'bedroom' | 'living-room' | 'dining' | 'office' | 'kids';
}

export interface InstagramPost {
  id: string;
  image: string;
  title: string;
  roomName: string;
  likes: number;
  taggedProducts: Product[];
}
