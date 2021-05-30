
import "./styles.css";
import Header from "./Header/header";

import React, { Component } from 'react'

import "./layout.css";
import Footer from './Footer/footer';
import { connect } from 'react-redux';
import Slider from "./Slider";

import Selling from '../homepage/subHomeComponent/Selling/selling';
import DailyOffers from '../homepage/subHomeComponent/DailyOffers/DailyOffers';
import Popular from '../homepage/subHomeComponent/Popular/Popular';
import Offers from '../homepage/subHomeComponent/Offers/offers';
import New from '../homepage/subHomeComponent/New/New';


class Layout extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <Header/>
                </div>
                <div className="layout-component">
                    {/*this.props.children*/}
                   
                    <Slider></Slider>
                <Selling></Selling>
                <DailyOffers></DailyOffers>
                <Popular></Popular>
                <Offers></Offers>
                <New></New>
                </div>
                <div className="Footer">
                    <Footer
                        user = {this.props.user}
                    />
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    user : state.userReducer
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);