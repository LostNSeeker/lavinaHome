/**
 * Shopify Storefront & Cart API Service
 * Handles interaction with Shopify Storefront GraphQL API
 */

export interface ShopifyProductNode {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string;
      };
    }>;
  };
}

export interface ShopifyCartLineInput {
  merchandiseId: string;
  quantity: number;
}

export const shopifyService = {
  /**
   * Fetch Shopify Storefront status & products from backend proxy
   */
  async getProducts() {
    try {
      const response = await fetch('/api/shopify/products');
      return await response.json();
    } catch (err) {
      console.warn('[Shopify Service] Proxy connection offline, fallback mode active:', err);
      return { success: false, mode: 'OFFLINE' };
    }
  },

  /**
   * Initialize a Shopify Storefront Cart and retrieve a Hosted Checkout URL
   */
  async createCheckout(cartItems: any[], customerEmail?: string) {
    try {
      const response = await fetch('/api/shopify/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          customerEmail: customerEmail || 'guest@levinahome.com'
        })
      });
      return await response.json();
    } catch (err) {
      console.error('[Shopify Service] Checkout initialization error:', err);
      return {
        success: false,
        checkoutUrl: '#',
        message: 'Could not connect to Shopify Checkout server.'
      };
    }
  },

  /**
   * Execute raw Storefront GraphQL query via proxy
   */
  async executeGraphQL(query: string, variables?: Record<string, any>) {
    try {
      const response = await fetch('/api/shopify/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
      });
      return await response.json();
    } catch (err) {
      console.error('[Shopify Service] GraphQL execution error:', err);
      return { errors: [{ message: (err as Error).message }] };
    }
  }
};
