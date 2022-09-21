import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }



    return (
        <div className='detail_joyas card col-3 mx-auto'>
            <img className='detail_joyas_img' src={data.img} alt="" />
            <h1>{data.title}</h1>
            <h3>{data.description}</h3>
            <h2>${data.price}</h2>
            <h7>{data.id}</h7>
            {goToCart ? <Link to='/cart'>Finalizar Compra</Link> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />}

        </div>
    );
}

export default ItemDetail;