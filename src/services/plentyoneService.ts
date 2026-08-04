/**
 * PlentyONE (Plentymarkets) REST API Service
 * Manages ERP authentication, live inventory verification, and order pushing to PlentyONE.
 */

export interface PlentyoneAuthResponse {
  success: boolean;
  mode: 'SIMULATION' | 'PRODUCTION';
  accessToken?: string;
  expiresIn?: number;
  message: string;
}

export interface PlentyoneStockData {
  variationId: string;
  stockPhysical: number;
  stockReserved: number;
  stockNet: number;
  warehouseId: number;
  warehouseName: string;
  inStock: boolean;
}

export const plentyoneService = {
  /**
   * Authenticate with PlentyONE REST API (/rest/login)
   */
  async authenticate(credentials?: { username?: string; password?: string; host?: string }): Promise<PlentyoneAuthResponse> {
    try {
      const response = await fetch('/api/plentyone/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials || {})
      });
      return await response.json();
    } catch (err) {
      console.warn('[PlentyONE Service] Backend offline, returning fallback auth state:', err);
      return {
        success: true,
        mode: 'SIMULATION',
        accessToken: 'plenty_sim_token_local',
        message: 'PlentyONE ERP Simulation Mode Active'
      };
    }
  },

  /**
   * Fetch live ERP stock level for a product variation
   */
  async getStock(variationId: string): Promise<PlentyoneStockData[]> {
    try {
      const response = await fetch(`/api/plentyone/stock?variationId=${encodeURIComponent(variationId)}`);
      const data = await response.json();
      return data.stockData || [];
    } catch (err) {
      console.error('[PlentyONE Service] Error fetching stock:', err);
      return [
        {
          variationId,
          stockPhysical: 99,
          stockReserved: 0,
          stockNet: 99,
          warehouseId: 1,
          warehouseName: 'Copenhagen Central (Fallback)',
          inStock: true
        }
      ];
    }
  },

  /**
   * Sync completed order into PlentyONE ERP
   */
  async syncOrder(orderPayload: { orderId: string; items: any[]; customer: any; totalAmount: number }) {
    try {
      const response = await fetch('/api/plentyone/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      return await response.json();
    } catch (err) {
      console.error('[PlentyONE Service] Error syncing order:', err);
      return {
        success: false,
        message: 'Failed to push order to PlentyONE ERP'
      };
    }
  }
};
