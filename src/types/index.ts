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
  stockInfo?: ProductStockInfo;
  deliveryInfo?: ProductDeliveryInfo;
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
