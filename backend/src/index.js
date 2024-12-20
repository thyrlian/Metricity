require('dotenv').config();
const express = require('express');
const cors = require('cors');
const snapshotRoutes = require('./routes/snapshotRoutes');
const config = require('./config/appConfig');
const PORT = config.server.port;

const app = express();

// Helper function to format uptime
const formatUptime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (remainingSeconds > 0 || parts.length === 0) parts.push(`${remainingSeconds}s`);

    return parts.join(' ');
};

// Function to generate API endpoints documentation
const getApiInfo = () => {
    const routes = [];
    app._router.stack.forEach(middleware => {
        if (middleware.route) { // routes registered directly on the app
            routes.push(middleware.route.path);
        } else if (middleware.name === 'router') { // router middleware 
            middleware.handle.stack.forEach(handler => {
                if (handler.route) {
                    const path = middleware.regexp.source.replace('^\\/','').replace('\\/?(?=\\/|$)','');
                    routes.push('/' + path.replace(/\\\//g, '/') + handler.route.path);
                }
            });
        }
    });
  
    return {
        name: config.app.name,
        version: config.app.version,
        endpoints: {
            health: '/health',
            ...Object.fromEntries(
                routes
                    .filter(route => route.startsWith('/api/'))
                    .map(route => [
                        route.replace(/^\/api\//, '')
                             .replace(/\/$/, '')
                             .replace(/\//g, '-'),
                        route.replace(/\/$/, '')
                    ])
            )
        }
    };
};

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: formatUptime(process.uptime())
    });
});

// API Routes
// Mount all API endpoints here
app.use('/api/snapshots', snapshotRoutes);

// Root endpoint with API information
app.get('/', (req, res) => {
    res.json(getApiInfo());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});