import API from "../config";

//sending data collected to backend

export const signup = (user) => {
  //console.log(name, email, password); //send data to console
  return fetch(`${API}/signup`, {
    //API FETCHING
    method: "POST", //type of request
    headers: {
      Accept: "application/json", //type of data
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), //sending data as a JSON string will convert object to json
  })
    .then((response) => {
      return response.json(); //successful
    })
    .catch((err) => {
      console.log(err); //error
    });
};

export const signin = (user) => {
  //console.log(name, email, password); //send data to console
  return fetch(`${API}/signin`, {
    //API FETCHING
    method: "POST", //type of request
    headers: {
      Accept: "application/json", //type of data
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), //sending data as a JSON string will convert object to json
  })
    .then((response) => {
      return response.json(); //successful
    })
    .catch((err) => {
      console.log(err); //error
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
