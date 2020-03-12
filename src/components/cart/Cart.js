import React, { useState } from "react";
import TopNavigationaBar from "../TopNavigationBar";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { updateCartTotal } from "../../store/cart/actions";

import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBIcon,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";

import { updateCart } from "../../store/cart/actions";

const Cart = props => {
  const cart = useSelector(state => state.shoppingCart.cart);
  const cartTotal = useSelector(state => state.shoppingCart.cartTotal);
  const dispatch = useDispatch();

  //Force a re-render. Used when state updates, but page does not re-render as intended.
  const [update, setUpdate] = useState(0);

  //Function passed down to remove an item from cart, and update cart store-state.
  const removeOneFromCart = id => {
    let itemIndex = cart.findIndex(cartItem => cartItem.id === id);
    let updatedCart = cart.filter((item, index) => {
      return index !== itemIndex;
    });

    let newTotal = updatedCart.reduce((acc, currentIndex) => {
      return (acc += currentIndex.price);
    }, 0.0);

    dispatch(updateCart(updatedCart));
    dispatch(updateCartTotal(newTotal.toFixed(2)));
    setUpdate(update + 1);
  };

  //Function passed down to add an item to the cart, and update cart store-state.
  const addOneToCart = item => {
    let updatedCart = cart;

    updatedCart.push(item);

    let newTotal = updatedCart.reduce((acc, currentIndex) => {
      return (acc += currentIndex.price);
    }, 0.0);

    dispatch(updateCart(updatedCart));
    dispatch(updateCartTotal(newTotal.toFixed(2)));
    setUpdate(update + 1);
  };

  //Count number of items in cart to determine quantities
  let cartCount = {};
  cart.forEach(cartItem => {
    if (cartCount.hasOwnProperty(cartItem.id)) {
      cartCount[cartItem.id]++;
    } else {
      cartCount[cartItem.id] = 1;
    }
  });

  //Create an array matching cart contents with quantities
  let cartArrayWithQuantities = [];
  for (const key in cartCount) {
    let currentCartItem = cart.find(cartItem => cartItem.id == key);
    currentCartItem["quantity"] = cartCount[key];
    cartArrayWithQuantities.push(currentCartItem);
  }

  //Find the total price based on current cart items and quantities
  let total = 0.0;
  cartArrayWithQuantities.forEach(cartItem => {
    let currentAmount = Number((cartItem.price * cartItem.quantity).toFixed(2));
    total += Number(currentAmount.toFixed(2));
  });

  let cartRows = cartArrayWithQuantities.map(cartItem => (
    <CartItem
      product={cartItem}
      key={cartItem.id}
      removeOneFromCart={removeOneFromCart}
      addOneToCart={addOneToCart}
      //   updateCartTotal={updateCartTotal}
    />
  ));

  console.log("cartTotal: ", cartTotal);

  return (
    <div>
      <TopNavigationaBar />
      <MDBRow className="my-2" center>
        <MDBCard className="w-100" style={{ marginTop: "15px" }}>
          {cartRows.length === 0 ? (
            <MDBCardBody className="minimumWidth">
              <MDBCardTitle>
                <MDBIcon icon="shopping-cart"></MDBIcon>&nbsp;&nbsp;You have
                nothing in your cart.&nbsp;&nbsp;
                <Link to="/store">
                  <MDBBtn color="elegant" size="sm">
                    Go to store&nbsp;&nbsp;
                    <MDBIcon icon="angle-double-right" />
                  </MDBBtn>
                </Link>
              </MDBCardTitle>
            </MDBCardBody>
          ) : (
            <MDBCardBody>
              <MDBTable hover responsive className="product-table">
                <MDBTableHead
                  className="font-weight-bold"
                  color="elegant-color-dark"
                  textWhite
                >
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody>
                  {cartRows}
                  <tr>
                    <td colSpan="5" style={{ textAlign: "right" }}>
                      <MDBRow>
                        <MDBCol sm="5" md="6" lg="9">
                          <h5 style={{ marginBottom: 0, marginTop: "5px" }}>
                            <b> Total: ${total.toFixed(2)}</b>
                          </h5>
                          <small className="text-muted">
                            +Shipping and Handling
                          </small>
                        </MDBCol>
                        <MDBCol
                          style={{ textAlign: "Left" }}
                          sm="7"
                          md="6"
                          lg="3"
                        >
                          <Link
                            to={{
                              pathname: "/checkout"
                            }}
                          >
                            <MDBBtn onClick={updateCartTotal} color="elegant">
                              Checkout&nbsp;&nbsp;&nbsp;
                              <MDBIcon far icon="credit-card" />
                            </MDBBtn>
                          </Link>
                        </MDBCol>
                      </MDBRow>
                    </td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          )}
        </MDBCard>
      </MDBRow>
    </div>
  );
};
export default Cart;
