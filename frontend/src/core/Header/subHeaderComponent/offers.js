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

const getOffersItems = (items) => {
    return (
        items.map((item, key) => {
            return (
                <div key={key} className="offers-container">
                    <Link to={{
                        pathname: item.links,
                        state: {
                            category: item.category,
                            sizeFlag: item.sizeFlag
                        }
                    }}>
                        <img key={key} className="offer-image" src={item.image} alt="alt" />
                        <br />
                        <br />
                    </Link>

                </div>
            )
        })
    )
}

const Offers = () => {
    return (
        <div className="Offers">
            {getOffersItems(data)}
        </div>
    )
}

export default Offers