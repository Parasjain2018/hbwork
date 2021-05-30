import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import './styles.css';

const data = [
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/final-1.jpg",
        "link": "/products/friends",
        "category": "16"
    },
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/b99.jpg",
        "link": "/products/friends",
        "category": "16"
    },
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/Marvel.jpg",
        "link": "/products/friends",
        "category": "16"
    },
    {
        "image": "https://www.humourbaba.com/wp-content/uploads/2019/09/JOKER-TILE.jpg",
        "link": "/products/friends",
        "category": "16"
    },


]

const getItemsThemes = (data) => {
    return (
        data.map((item, key) => {
            return (
                <div key={key} className="theme-container">
                    <Link key={key} to={{
                        pathname: item.link,
                        state: {
                            category: item.category
                        }
                    }} className="popular-link">
                        <img className="theme-image" src={item.image} alt="not" />
                        <br />
                        <br />
                    </Link>
                </div >
            )
        })
    )
}

const Themes = () => {
    return (
        <div className="Themes">
            {getItemsThemes(data)}
        </div>
    )
}

export default Themes;