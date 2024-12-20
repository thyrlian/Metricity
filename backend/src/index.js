require('dotenv').config();
const express = require('express');
const cors = require('cors');
const snapshotRoutes = require('./routes/snapshotRoutes');
const config = require('./config/appConfig');
const PORT = config.server.port;

const app = express();

app.use(cors());

app.use('/api/snapshots', snapshotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});