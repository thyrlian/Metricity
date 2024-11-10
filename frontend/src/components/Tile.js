import React from 'react';
import './Tile.css';

const Tile = ({ data }) => {
    const width = data.size?.width;
    const height = data.size?.height;

    const renderContent = () => {
        switch (data.type) {
            case 'embed':
                return <iframe src={data.url} title={data.name} style={{ width, height }}></iframe>;
            case 'image':
                return <img src={data.url} alt={data.name} style={{ width, height }} />;
            default:
                return <div>Unsupported type: {data.type}</div>;
        }
    };

    return (
        <div className="tile">
            <h3>{data.name}</h3>
            {renderContent()}
        </div>
    );
};

export default Tile;