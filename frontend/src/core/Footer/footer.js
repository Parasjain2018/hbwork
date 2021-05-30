import React, { Component } from 'react'

// import style
import './footer.css';

import row1 from "./images/row1.png";
import row2 from "./images/row2.png";
import row3 from "./images/row3.png";

const data =[
    {
        "title" : "Get to know us",
        "content" : [
            "About Us",
            "Contact Us",
            "Careers",
            "FAQ"
        ]
    },    
    {
        "title" : "Connect with us",
        "content" : [
            "Facebook",
            "Twitter",
            "Instagram"
        ]
    },    
    {
        "title" : "Customer Services",
        "content" : [
            "FAQs",
            "Offers",
            "Return Refund and Cancel",
            "Privacy Policy",
            "Terms and Conditions"
        ]
    },
    {
        "title" : "Shipping Partners",
        "content" : [
            "FedEx",
            "Bluedart",
            "Delhivery",
            "DTDC",
            "Aramex",
            "DHL"
        ]
    }
]



const getUpperMenu = (items) => {
    return (
        items.map( (item,key) => {
            return (
                <div key={key} className="upper-menu-container-main">
                    <div className="upper-menu-container-head">{item.title}</div>
                    <div className="upper-menu-container-body">
                        {item.content.map( (val,key) => {
                            return (
                                
                                <div key={key} className="body-text">{val}</div>
                                
                            )
                        })}
                    </div>
                </div>
                
                
            )
        })
    )
}

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="news-letter" style={{display: !this.props.user.subscribed ? "flex" : "none"}}>
                    
                    <div className="news-letter-first-text">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </div>
                    <div className="news-letter-second-text">
                        Get the latest updates on new products and upcoming sales
                    </div>
                    <div>
                    <div className="news-letter-textbox-container">    
                    <input className="news-letter-textbox" type="text" placeholder="Your Email Address" />
                    <input className="news-letter-button" type="button" value="SUBSCRIBE" />
                    </div>
                    </div>

                </div>
                <div className="footer-upper">
                    {getUpperMenu(data)}
                    <div className="secure-payment">
                    <div className="secure-payment-grid">
                    <div className="upper-menu-container-head-secure">Secure payment</div>
                        <img className="secure-payment-grid-images" src={row1} alt=""/>
                        <img className="secure-payment-grid-images" src={row2} alt=""/>
                        <img className="secure-payment-grid-images" src={row3} alt=""/>
                    </div>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="footer-lower-image-text"><img src='/images/whiteHBfontlogo.png'/></div>
                    <div className="footer-lower-text">© 2017-2019, Humourbaba.com, Inc. or its affiliates</div>
                </div>
            </div>
        )
    }
}
