import './Items.css';
import React from 'react';
import { Link } from 'react-router-dom'

const Items = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} className='card joyas col-3 mx-auto'>
            <img src={info.img} alt="" className='img-fluid' />
            <h1>{info.title}</h1>
            <h2>$ {info.price}</h2>
        </Link>
    );
}
export default Items;