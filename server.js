import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend assets from 'dist'
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// API Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'LEVINA HOME Storefront Backend API',
    environment: 'production',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API Products endpoint
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    count: 8,
    brand: 'LEVINA HOME',
    currency: 'USD'
  });
});

// API Checkout Endpoint
app.post('/api/checkout', (req, res) => {
  const { cartItems, fullName, email } = req.body || {};
  const orderId = `LH-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  res.status(200).json({
    success: true,
    orderId,
    message: 'White-glove order confirmed successfully',
    customer: { fullName, email },
    timestamp: new Date().toISOString()
  });
});

// Newsletter Endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body || {};
  res.status(200).json({
    success: true,
    message: `Subscribed ${email} to Levina Home Copenhagen journal`,
  });
});

// SPA Fallback: Serve index.html for all unrecognized routes
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🚀 LEVINA HOME Production Backend deployed successfully!`);
  console.log(`🌐 Server URL: http://localhost:${PORT}`);
  console.log(`📡 API Health: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});
