# LEVINA HOME — Shopify & PlentyONE Integration Architecture

## 1. Executive Summary & System Roles

The **LEVINA HOME** infrastructure utilizes a modern **Headless Multi-Channel Architecture**:

* **PlentyONE (formerly Plentymarkets)** acts as the **Master ERP & Central Source of Truth**.
  * Controls Master Product Catalog, SKU Management, Fiber & Material Specifications.
  * Controls Physical Warehouse Stock (e.g. Copenhagen Central Hub).
  * Processes & fulfills completed orders.
  * Generates shipping labels and tracking references.

* **Shopify** acts as the **Headless Storefront & Checkout Engine**.
  * Provides public Storefront GraphQL API for catalog indexing and collections.
  * Manages customer cart sessions via Storefront Cart API.
  * Hosts PCI-compliant secure payment checkout pages.

* **Custom Storefront App (React / Vite + Express Backend)**:
  * Delivers a bespoke, high-end Scandinavian luxury interior design experience.
  * Interacts with Shopify Storefront API for catalog navigation & cart creation.
  * Interacts with PlentyONE REST API via Express backend for real-time stock verification and ERP order syncing.

---

## 2. End-to-End Data Synchronization Flow

```
 ┌───────────────────────────────────────────────────────────┐
 │               PlentyONE Master ERP (Backend)              │
 │  - Master Items & Prices                                  │
 │  - Warehouse Stock & Reservable Net Inventory             │
 │  - Fulfillment & Shipping                                 │
 └─────────────────────────────┬─────────────────────────────┘
                               │ (Sync Products / Inventory)
                               ▼
 ┌───────────────────────────────────────────────────────────┐
 │                Shopify Platform (Storefront)              │
 │  - Storefront GraphQL API                                 │
 │  - Headless Cart API                                      │
 │  - Hosted PCI Checkout                                    │
 └─────────────────────────────┬─────────────────────────────┘
                               │
               (Fetch Catalog & Process Checkout)
                               │
                               ▼
 ┌───────────────────────────────────────────────────────────┐
 │             LEVINA HOME Custom React Storefront           │
 │  - High-end Scandinavian luxury UI                        │
 │  - Real-time PlentyONE Stock checks                       │
 │  - Direct Shopify Checkout Delegation                     │
 └───────────────────────────────────────────────────────────┘
```

---

## 3. Configuration & Environment Variables

Credentials for both Shopify and PlentyONE are configured in `.env` (refer to `.env.example`):

```bash
# Shopify Settings
SHOPIFY_STORE_DOMAIN=levinahome.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_live_storefront_token_xxx
SHOPIFY_ADMIN_API_TOKEN=shpat_live_admin_token_yyy
SHOPIFY_API_VERSION=2024-01

# PlentyONE ERP Settings
PLENTYONE_ID=123456
PLENTYONE_HOST=https://p123456.my.plentysystems.com
PLENTYONE_USERNAME=api_user
PLENTYONE_PASSWORD=secure_api_password
PLENTYONE_SYNC_INTERVAL_MINUTES=15
ENABLE_PLENTYONE_LIVE_STOCK=true
```

> **Note on Simulation Mode:** If live API tokens are not provided, the Express backend automatically activates **Simulation Bridge Mode**, serving mock tokens and test data so the application runs without errors.

---

## 4. Backend API Endpoints Reference (`server.js`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/integrations/status` | Returns real-time health and authentication state of Shopify & PlentyONE integrations. |
| `POST` | `/api/plentyone/auth` | Authenticates with PlentyONE REST API (`POST /rest/login`) and caches OAuth2 Bearer token. |
| `GET` | `/api/plentyone/stock` | Queries live physical and reservable stock from PlentyONE ERP. |
| `POST` | `/api/plentyone/orders` | Syncs completed web orders directly into PlentyONE ERP for fulfillment. |
| `POST` | `/api/shopify/checkout` | Creates a Shopify Storefront Cart and returns a hosted checkout redirect URL (`checkoutUrl`). |
| `POST` | `/api/shopify/graphql` | Proxy endpoint to execute raw GraphQL queries against Shopify Storefront API. |

---

## 5. Frontend Integration Services (`src/services/`)

1. **`shopifyService.ts`**:
   - Executes Storefront GraphQL queries (`products`, `collections`, `cartCreate`, `cartLinesAdd`).
   - Delegates cart payload to generate Shopify hosted checkout URLs.

2. **`plentyoneService.ts`**:
   - Manages PlentyONE REST API Bearer token login.
   - Fetches live stock data per variation ID.
   - Pushes completed order details to PlentyONE ERP endpoints.

3. **`integrationService.ts`**:
   - Orchestrates unified checkout: creates a Shopify cart session and simultaneously registers the order in PlentyONE ERP.

---

## 6. How to Test & Verify Live Sync

1. Launch the server:
   ```bash
   npm run build && npm start
   ```
2. Open the storefront in browser (`http://localhost:5000`).
3. Click the **"Sync Active"** button in the top navigation bar to open the **Integration Status Modal**.
4. Click **"Test Live Auth & Sync"** to test live OAuth2 Bearer token generation with PlentyONE.
5. Add luxury pieces to cart and click **"Confirm & Sync Order"** in Checkout modal to see live order push to PlentyONE ERP.
