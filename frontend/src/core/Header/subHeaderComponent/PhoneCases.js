import React, { useState,useEffect } from 'react';

import {listproductcategories} from '../../../admin/apiAdmin';
const Header = () => {

  const [products, setProducts] = useState([]);

    const loadProducts = () => {
      listproductcategories("COVERS").then((data) => {
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
return <pre>{JSON.stringify(products)}</pre>
  };
  export default Header;