import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import
import './styles.css';
import Slider from './Slider/Slider';
import Selling from './Selling/selling';
import DailyOffers from './DailyOffers/DailyOffers'
import Popular from './Popular/Popular';
import Offers from './Offers/offers';
import New from './New/New';


export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Slider></Slider>
                <Selling></Selling>
                <DailyOffers></DailyOffers>
                <Popular></Popular>
                <Offers></Offers>
                <New></New>
            </div>
        )
    }
}
