import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Component } from 'react'
import { connect } from 'react-redux';
import Popup from "reactjs-popup";



import './header.css';
import Shop from './subHeaderComponent/shop';
import Themes from './subHeaderComponent/themes';
import Offers from './subHeaderComponent/offers';
import Spotlight from './subHeaderComponent/spotlight';
import DivWithNot from '../divWithNot/divWithNot';

const Header = (props) => {
    const [hoveredshop, setHoveredshop] = useState(false);
    const [hoveredtheme, setHoveredtheme] = useState(false);
    const [hoveredoffer, setHoveredoffer] = useState(false);
    const [hoveredspot, setHoveredspot] = useState(false);
    const toggleHovershop = () => setHoveredshop(!hoveredshop);
    const toggleHovertheme = () => setHoveredtheme(!hoveredtheme);
    const toggleHoveroffer = () => setHoveredoffer(!hoveredoffer);
    const toggleHoverspot = () => setHoveredspot(!hoveredspot);
    const [showNav, changeNav] = useState(false);


    const navitems = [
        {
            "id": "shop-link",
            "toggle": toggleHovershop,
            "classparameter": hoveredshop,
            "classtext": "shop",
            "submenu": <Shop />
        },
        {
            "id": "themes-link",
            "toggle": toggleHovertheme,
            "classparameter": hoveredtheme,
            "classtext": "themes",
            "submenu": <Themes />
        },
        {
            "id": "offers-link",
            "toggle": toggleHoveroffer,
            "classparameter": hoveredoffer,
            "classtext": "offers",
            "submenu": <Offers />
        },
        {
            "id": "spotlight-link",
            "toggle": toggleHoverspot,
            "classparameter": hoveredspot,
            "classtext": "spotlight",
            "submenu": <Spotlight />
        }
    ]


    const getNavItems = (items) => {
        return (
            items.map((item, key) => {
                return (
                    <li key={key} id={item.id} onMouseEnter={item.toggle} onMouseLeave={item.toggle}>
                        <span className="nav-text">{item.classtext}</span>
                        <div className={item.classparameter ? (`dropdown-content ${item.classtext} show`).toString() : (`dropdown-content ${item.classtext}`).toString()}>
                            {item.submenu}
                        </div>
                    </li>
                )
            })
        )
    }


    return (
        <div className="Header">
            <div className="upper">
                <span className="left-side">Where Fashion meets Technology</span>
                <span className="right-side">
                    <span className="upper-header-item">
                        <a href="http://google.com">Track Order</a>
                    </span>
                    <span className="upper-header-item item-1-1">
                        <a href="http://google.com">Contact Us</a>
                    </span>
                </span>
            </div>
            <div className="lower">
                <div className="left-side">
                    <div className="hidden-nav" onClick={() => changeNav(!showNav)}>
                        <img src="/images/hamburger.svg" alt="alt" />
                    </div>
                    <SideNav
                        showNav={showNav}
                        onHideNav={() => changeNav(!showNav)}
                        title={
                            <div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingRight: '22px' }}>
                                    <img src="https://i.ibb.co/MNVRDP5/humourbabalogo-1.png" width='90%' height='50%' paddingRight='5px' style={{ bottom: '12px', position: 'relative' }} />
                                </div>
                            </div>
                        }
                        titleStyle={{ backgroundColor: '#FF4208', height: '70px', }}
                        navStyle={{ width: "60%" }}
                        itemStyle={{ padding: "0 10px", borderBottom: "0.3px solid gray", lineHeight: "50px" }}
                        items={[
                            <a style={{ color: '#000000' }} href='/'>HOME</a>,
                            <a style={{ color: '#000000' }} href='https://www.google.com/'>SHOPS</a>,
                            <a style={{ color: '#000000' }} href='https://www.google.com/'>THEMES</a>,
                            <a style={{ color: '#000000' }} href='https://www.google.com/'>OFFERS</a>,
                            <a style={{ color: '#000000' }} href='https://www.google.com/'>SPOTLIGHT</a>
                        ]}
                    />
                    <Link to='/' style={{ textDecoration: "none" }}><img className="header-hblogo" src="https://i.ibb.co/ZdJJSV8/hblogo.png" alt="" />
                        <img id="logo" src="https://i.ibb.co/MNVRDP5/humourbabalogo-1.png" alt=""></img></Link>
                    <div id="links">
                        <ul>
                            {getNavItems(navitems)}
                        </ul>
                    </div>
                </div>
                <div className="right-side right-side-lower">
                    <form id="search">
                        <div id="inp">
                            <input type="text" name="search-query" placeholder="Find Your Fandom" />
                            <i class="fal fa-search"></i>
                        </div>
                    </form>
                    <a href="#" id="search-but">
                        <Popup trigger={<img src='/images/search.png' alt="" />} position="bottom center" >
                            <div><input type="text" placeholder="What are you looking for?" ></input></div>
                        </Popup>
                    </a>
                    <Link to={!props.user.isLoggedIn ? (`/login`) : (`/profile`)} style={{ textDecoration: "none" }} className="font-awe"><i className="fal fa-user" style={{ fontSize: "25px" }} /></Link>
                    <Link to={`/cart`} style={{ textDecoration: "none" }} className="font-awe">
                        {/* <img src='/images/bag1.png' alt=""/> */}
                        <DivWithNot
                            imageClass="fal fa-cart-plus"
                            notText="0"
                            color="#000"
                            size="25px"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}




const mapStateToProps = (state) => ({
    user: state.userReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);