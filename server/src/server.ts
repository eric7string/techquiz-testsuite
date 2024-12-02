import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import db from './config/connection.js';
import routes from './routes/index.js';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await db();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '../client/dist');

  // Serve static files from the client build directory
  app.use(express.static(clientPath));

  // Handle React Router fallback for unknown routes
  app.get('*', (req, res) => {
    const requestedFile = path.join(clientPath, req.path);

    // Ensure only non-asset requests return index.html
    if (req.path.startsWith('/assets') || path.extname(req.path)) {
      res.sendFile(requestedFile, (err) => {
        if (err) {
          res.status(404).send('File not found');
        }
      });
    } else {
      res.sendFile(path.join(clientPath, 'index.html'));
    }
  });
}

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
