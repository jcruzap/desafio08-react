import Items from '../Items/Items';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(joyas => <Items key={joyas.id} info={joyas} />)
    );
}

export default ItemList;