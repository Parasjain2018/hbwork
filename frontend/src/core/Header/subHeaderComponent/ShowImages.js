import React, { useState, useEffect } from "react";
import API from "../config";

const ShowImages = ({ item, url }) => {

  return <div className="product-img">
      {fetch(`${API}/${url}/photo/${item._id}`)
      .then(result => console.log(result))
        }
    
    {console.log(`${API}/${url}/photo/${item._id}`)}
  </div>
};

export default ShowImages;
