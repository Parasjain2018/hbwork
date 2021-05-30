import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";

let quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const SingleProduct = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = (f) => f,
    run = undefined,
    // changeCartSize
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const showViewButton = (showViewProductButton) => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
                        View Product
          </button>
                </Link>
            )
        );
    };

    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
    };

    const shouldRedirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = (showAddToCartButton) => {
        return (
            showAddToCartButton && (
                <button
                    type="submit"
                    className="btn btn-custom card-btn-1"
                    id="add-to-cart-button"
                >
                    ADD TO CART
                </button>
            )
        );
    };

    const showStock = (quantity) => {
        return quantity > 0 ? (
            <span className="badge badge-pill" id="show-stock">In Stock </span>
        ) : (
                <span className="badge badge-pill" id="show-stock">Out of Stock </span>
            );
    };

    const handleChange = (productId) => (event) => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = (cartUpdate) => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Adjust Quantity</span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(product._id)}
                        />
                    </div>
                </div>
            )
        );
    };

    const showRemoveButton = (showRemoveProductButton) => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => {
                        removeItem(product._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    return (
        <div className="single-product-form">
            <div>
                {shouldRedirect(redirect)}
                <h2 className="single-product-name">{product.name}</h2>
                <h4 className="single-product-price">$ {product.price}</h4>
                <br></br>
                <form onSubmit={addToCart}>
                    <div className="size">
                        <h6 style={{ 'color': '#75757A', fontWeight: 600 }}>Select Size</h6>
                        {product.size.map(size => (
                            <div class="radio-toolbar">
                                <input type="radio" id={size} name="size" value={size} required/>
                                <label for={size}>
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>

                    <h5 className="display-5 extra-links" style={{ 'float': 'right' }}>Size Chart</h5>
                    <br></br><br></br>

                    <div id="nano-coated-button">
                        <p className="lead" id="nano-coated-label">
                            Nano Coated
                        </p>
                        <input type="checkbox" id="toggle" class="checkbox" />
                        <label for="toggle" class="switch"></label>
                        <br></br>
                    </div>

                    <h5 className="display-5 extra-links" style={{ 'float': 'right' }}>Nano Coated</h5>
                    <br></br><br></br>

                    <label for="quantity">
                        <h5 id="quantity-label">
                            Quantity
                        </h5>
                    </label>
                    <select id="quantity" name="quantity">
                        {quantity.map(num => {
                            return <option value={num}>{num}</option>
                        })}
                    </select>

                    {showAddToCartBtn(showAddToCartButton)}
                    
                    <br></br>
                    
                    <p id="gender-label">
                        Gender
                    </p>

                    <div class="radio-toolbar">
                        <input type="radio" id="male" name="gender" value="Male" required/>
                        <label for="male">
                            M
                        </label>
                        <input type="radio" id="female" name="gender" value="Female" required/>
                        <label for="female">
                            F
                        </label>
                    </div>
                </form>
                <br></br>

                {showViewButton(showViewProductButton)}

                <br></br><br></br>

                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}

            </div>
        </div>
    );
};

export default SingleProduct;
