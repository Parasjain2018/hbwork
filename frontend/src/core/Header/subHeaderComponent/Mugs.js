import React, { useState,useEffect } from 'react';

import {listproductcategories} from '../../../admin/apiAdmin';
const Header = () => {

  const [products, setProducts] = useState([]);

    const loadProducts = () => {
      listproductcategories("MUGS").then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
        }
      });
    };
  
  useEffect(() => {
    loadProducts();
  }, []);
return <div>{JSON.stringify(products)}</div>
  };
  export default Header;