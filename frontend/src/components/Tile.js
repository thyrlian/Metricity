import React from 'react';

const Tile = ({ data }) => {
    const renderContent = () => {
        switch (data.type) {
            case 'embed':
                return <iframe src={data.url} title={data.name} width="100%" height="300px"></iframe>;
            case 'image':
                return <img src={data.url} alt={data.name} width="100%" />;
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