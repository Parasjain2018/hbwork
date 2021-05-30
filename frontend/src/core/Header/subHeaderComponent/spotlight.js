import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './styles.css';

const data = [
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/t-shirts-tile.jpg",
        "links": "/products/t-shirt",
        "category": "16",
    },
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/MUGS-TILE.jpg",
        "links": "/products/mugs",
        "category": "170",
    },
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/PHONE-CASE-TILE.jpg",
        "links": "/products/phonecase",
        "category": "66",
    },
]
const getItems = (items) => {
    return (
        items.map((item, key) => {
            return (
                <div key={key} className="spotlight-container">
                    <Link to={{
                        pathname: item.links,
                        state: {
                            category: item.category,
                            sizeFlag: item.sizeFlag
                        }
                    }}>
                        <img key={key} className="spotlight-image" src={item.image} alt="alt" />
                        <br />
                        <br />
                    </Link>

                </div>
            )
        })
    )
}

const Spotlight = () => {
    return (
        <div className="Spotlight">
            {getItems(data)}
        </div>
    )
}

export default Spotlight