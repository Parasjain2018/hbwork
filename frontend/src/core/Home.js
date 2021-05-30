import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import Slider from "./Slider";
import "./home.css";
import Selling from '../homepage/subHomeComponent/Selling/selling';
import DailyOffers from '../homepage/subHomeComponent/DailyOffers/DailyOffers'
import Popular from '../homepage/subHomeComponent/Popular/Popular';
import Offers from '../homepage/subHomeComponent/Offers/offers';
import New from '../homepage/subHomeComponent/New/New';



const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);

  //call api here acc to sold
  const loadProductBySell = () => {
    getProducts("sold").then((data) => {
      //sold= mongoDb data term used to store data
      if (data.error) {
        setError(data.error); //if error call error
      } else {
        setProductsBySell(data); //else call data
      }
    });
  };

  //call api here acc to arrival
  const loadProductByArrival = () => {
    getProducts("createdAt").then((data) => {
      //createdAt= mongoDb data term used to store data
      if (data.error) {
        setError(data.error); //if error call error
      } else {
        setProductsByArrival(data); //else call data
      }
    });
  };

  useEffect(() => {
    loadProductByArrival();

    loadProductBySell();
  });

  return (
    <Layout >
          

      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <div className="col-4 mb-3">
            <Card key={i} product={product} />
          </div>
        ))}
      </div>

      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <div className="col-4 mb-3">
            <Card key={i} product={product} />
          </div>
        ))}
      </div>
    </Layout>
    
  );
};

export default Home;
