const express = require('express');

// Create an Express app
const app = express();
const PORT = 3000;

// Middleware for random delay (10-100 ms)
app.use((req, res, next) => {
  const delay = Math.floor(Math.random() * (100 - 10 + 1)) + 10; // Random delay between 10 and 100 ms
  setTimeout(next, delay);
});

// Exchange rate endpoint
app.get('/exchange-rate', (req, res) => {
  // Parse query parameters
  const { toCurrency } = req.query;

  let base;
  if (toCurrency === 'USD') {
    base = 1.04;
  } else if (toCurrency === 'GBP') {
    base = 0.83;
  } else {
    base = 0.5;
    }

  // Respond with exchange rates
  res.json({
    fromCurrency: 'EUR',
    toCurrency: toCurrency,
    rate: base
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
