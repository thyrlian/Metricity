const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const fetchSnapshots = async () => {
    const response = await fetch(`${API_URL}/api/snapshots`);
    return response.json();
};