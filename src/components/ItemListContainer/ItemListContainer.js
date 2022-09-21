import ItemList from '../ItemList/ItemList';
import Tittle from '../Tittle/Tittle';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg"


const joyas = [
    {
        id: 1, category: "pulseras", stock: 4, sold: 0, title: "Pulsera Carmín Spiga Plata 925", description: "El anillo Swarovski Attract Round es un regalo verdaderamente romántico.Esta fabulosa pieza chapada en rodio presenta un chatón redondo en el centro y chatones brillantes a cada lado.Los chatones decoran el frente del anillo.La pieza Fashion Jewelry ideal para salidas nocturnas",
        price: 10500, img: img1,
    },
    {
        id: 2, category: "colgantes", stock: 10, sold: 0, title: "Colgante Birthstone Azul - Baño de Rodio - AZUL", description: "La Pulsera Carmín Spiga es una pieza perfecta para cualquier momento y cualquier ocasión.Esta pulsera Carmín de Plata 925 está formada por una cadena espiga y tiene cierre marinero.La pulsera cuenta con un baño de rodio para asegurar la calidad de la pieza.",
        price: 28850, img: img2,
    },
    {
        id: 3, category: "anillo", stock: 16, sold: 0, title: "Anillo Swarovski Attract Round", description: "Este colgante de Swarovski está inspirado en el concepto de las piedras natales, piedras preciosas que se corresponden con los distintos meses de nacimiento. Su diseño incorpora un gran cristal en tono azul brillantemente tallado. Este bonito colgante incorpora una cadena a juego. Una idea de regalo excelente para los nacidos en diciembre y un accesorio encantador para llevar a diario.",
        price: 9600, img: img3,
    },
]


export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(joyas);
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(joyas => joyas.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])


    return (
        <>
            <Tittle greeting={texto} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;