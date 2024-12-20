const API_URL = `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`;

export const fetchSnapshots = async () => {
    const response = await fetch(`${API_URL}/api/snapshots`);
    return response.json();
};