const express = require('express');
const cors = require('cors');
const snapshotRoutes = require('./routes/snapshotRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use('/api/snapshots', snapshotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});