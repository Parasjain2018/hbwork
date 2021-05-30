import API from "../config";

//sending data collected to backend

// CATEGORY CREATE POST DATA FROM F TO B
export const createCategory = (userId, token, category) => {
  //console.log(name, email, password); //send data to console
  return fetch(`${API}/category/create/${userId}`, {
    //API FETCHING
    method: "POST", //type of request
    headers: {
      Accept: "application/json", //type of data
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, //bearer token for auth
    },
    body: JSON.stringify(category), //sending data as a JSON string will convert object to json
  })
    .then((response) => {
      return response.json(); //successful
    })
    .catch((err) => {
      console.log(err); //error
    });
};

// PRODUCT CREATE POST DATA FROM F TO B
export const createProduct = (userId, token, product) => {
  //console.log(name, email, password); //send data to console
  return fetch(`${API}/product/create/${userId}`, {
    //API FETCHING
    method: "POST", //type of request
    headers: {
      Accept: "application/json", //type of data
      Authorization: `Bearer ${token}`, //bearer token for auth
    },
    body: product, //sending data as a JSON string will convert object to json
  })
    .then((response) => {
      return response.json(); //successful
    })
    .catch((err) => {
      console.log(err); //error
    });
};

// CATEGORY GET DATA FROM B TO F
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listOrders = (userId, token) => {
  return fetch(`${API}/order/list/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getStatusValues = (userId, token) => {
  return fetch(`${API}/order/status-values/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
  return fetch(`${API}/order/${orderId}/status/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, orderId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
  return fetch(`${API}/products?limit=undefined`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const listproductcategories = (name) => {
  return fetch(`${API}/products/bycategory/${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

