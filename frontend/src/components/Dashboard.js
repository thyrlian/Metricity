import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import { fetchSnapshots } from '../services/apiService';

const Dashboard = () => {
    const [snapshots, setSnapshots] = useState([]);

    useEffect(() => {
        const loadSnapshots = async () => {
            const data = await fetchSnapshots();
            setSnapshots(data);
        };
        loadSnapshots();
    }, []);

    return (
        <div className="dashboard">
            {snapshots.map((snapshot, index) => (
                <Tile key={index} data={snapshot} />
            ))}
        </div>
    );
};

export default Dashboard;