import React from 'react';

const Tile = ({ data }) => {
    return (
        <div className="tile">
            <h3>{data.name}</h3>
            <iframe src={data.url} title={data.name} width="100%" height="300px"></iframe>
        </div>
    );
};

export default Tile;