import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import './styles.css';

const data = [
    {
        "image": "https://i.ibb.co/4WgYv84/sample.jpg",
        "links": "/Tshirt",
        "category": "16",


    },
    {
        "image": "https://i.ibb.co/4WgYv84/sample.jpg",
        "links": "/Mugs",
        "category": "170",


    },
    {
        "image": "https://i.ibb.co/4WgYv84/sample.jpg",
        "links": "/phonecase",
        "category": "66",


    }
]

const getItems = (data) => {
    return (
        data.map((item, key) => {
            return (
                <div key={key} className="shop-container">
                    <Link to={{
                        pathname: item.links,
                        state: {
                            category: item.category,
                            sizeFlag: item.sizeFlag
                        }
                    }}>
                        <img className="shop-image" src={item.image} alt="not" />
                        <br />
                        <br />
                    </Link>
                </div>
            )
        })
    )
}

const Shop = () => {
    return (
        <div className="Shop">
            {getItems(data)}
        </div>
    )
}

export default Shop;