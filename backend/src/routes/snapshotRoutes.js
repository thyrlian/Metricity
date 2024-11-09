const express = require('express');
const { fetchSnapshots } = require('../services/snapshotService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const snapshots = await fetchSnapshots();
        res.json(snapshots);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch snapshots' });
    }
});

module.exports = router;