export type StoreMode = 'general' | 'kids';

export interface ProductStockInfo {
  physicalStock: number;
  netStock: number;
  inStock: boolean;
  statusLabel: string;
  warehouseName?: string;
}

export interface ProductDeliveryInfo {
  averageDays: number;
  deliveryText: string;
  estimatedDateRange: string;
  carrier?: string;
}

export interface Product {
  id: string;
  plentyVariationId?: number | string;
  itemId?: number | string;
  sku?: string;
  name: string;
  section?: 'general' | 'kids' | 'both';
  category: 'carpets' | 'rugs' | 'naturfelle' | 'shaggy' | 'furniture' | 'decor' | 'textiles' | 'kitchen' | 'accessories' | string;
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
  brandCategory?: string;
  brandLogo?: string;
  roomCategory: 'bedroom' | 'living-room' | 'dining' | 'office' | 'kids' | string;
  description: string;
  careInstructions: string[];
  shippingInfo: string;
  stockInfo?: ProductStockInfo;
  deliveryInfo?: ProductDeliveryInfo;
}

export interface BrandCategory {
  id: string;
  slug: string;
  name: string;
  nameEn?: string;
  logo: string;
  image: string;
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  themeColor: string;
  itemCount: number;
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
  categorySlug: 'carpets' | 'rugs' | 'naturfelle' | 'shaggy' | 'furniture' | 'decor' | 'textiles' | 'kitchen' | 'accessories' | string;
  section?: 'general' | 'kids';
}

export interface ShopRoom {
  id: string;
  name: string;
  tagline: string;
  image: string;
  roomSlug: 'bedroom' | 'living-room' | 'dining' | 'office' | 'kids';
  section?: 'general' | 'kids';
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  title: string;
  titleEn?: string;
  roomName: string;
  roomNameEn?: string;
  likes: number;
  taggedProducts: Product[];
  curator?: string;
  location?: string;
  readTime?: string;
  storyDe?: string;
  storyEn?: string;
  quoteDe?: string;
  quoteEn?: string;
  acousticNotesDe?: string;
  acousticNotesEn?: string;
  stylingTipDe?: string;
  stylingTipEn?: string;
  palette?: ColorSwatch[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  createdAt?: string;
  orders?: OrderRecord[];
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
}

export interface DeliveryPreferences {
  phone: string;
  preferredDeliveryDate: string;
  deliveryTimeWindow: string;
  gateFloorNotes: string;
  vatNumber?: string;
  specialInstructions?: string;
}

export interface OrderRecord {
  orderId: string;
  plentyOrderId: string;
  customer: {
    fullName: string;
    email: string;
    address?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  };
  items: CartItem[];
  totalAmount: number;
  status: string;
  createdAt: string;
  deliveryPreferences?: DeliveryPreferences | null;
}
