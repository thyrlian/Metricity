const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const fetchSnapshots = async () => {
    try {
        const filePath = path.join(__dirname, '../../config/dashboard.yaml');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = yaml.load(fileContents);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
};

module.exports = { fetchSnapshots };