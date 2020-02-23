import React, { useState } from "react";
import TopNavigationaBar from "../TopNavigationBar";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

import { updateCart } from "../../store/cart/actions";

const Cart = props => {
  const cart = useSelector(state => state.shoppingCart.cart);
  const dispatch = useDispatch();

  //Force a re-render. Used when state updates, but page does not re-render as intended.
  const [update, setUpdate] = useState(0);

  //Function passed down to remove an item from cart, and update cart store-state.
  const removeOneFromCart = id => {
    let itemIndex = cart.findIndex(cartItem => cartItem.id === id);
    let updatedCart = cart.filter((item, index) => {
      return index !== itemIndex;
    });

    dispatch(updateCart(updatedCart));
    setUpdate(update + 1);
  };

  //Function passed down to add an item to the cart, and update cart store-state.
  const addOneToCart = item => {
    console.log("item passed in: ", item);
    let updatedCart = cart;
    console.log("updated cart=cart: ", updatedCart);
    updatedCart.push(item);
    console.log("updatedCart after push: ", updatedCart);
    dispatch(updateCart(updatedCart));
    setUpdate(update + 1);
  };

  console.log("CART CONTENTS: ", cart);

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
    console.log(
      "cartItem.price * cartItem.quantity).toFixed(2): ",
      (cartItem.price * cartItem.quantity).toFixed(2)
    );
    // total += (cartItem.price * cartItem.quantity).toFixed(2);
    let currentAmount = Number((cartItem.price * cartItem.quantity).toFixed(2));
    total += Number(currentAmount.toFixed(2));
  });
  console.log("TOTAL: ", total);

  console.log("cartArrayWithQuantities: ", cartArrayWithQuantities);

  let cartRows = cartArrayWithQuantities.map(cartItem => (
    <CartItem
      product={cartItem}
      key={cartItem.id}
      removeOneFromCart={removeOneFromCart}
      addOneToCart={addOneToCart}
    />
  ));

  return (
    <div>
      <TopNavigationaBar />
      <MDBRow className="my-2" center>
        <MDBCard className="w-100" style={{ marginTop: "15px" }}>
          {cartRows.length === 0 ? (
            <MDBCardBody>
              <MDBCardTitle style={{ margin: "auto" }}>
                <MDBIcon icon="shopping-cart"></MDBIcon>&nbsp;&nbsp;You have
                nothing in your cart.
              </MDBCardTitle>
            </MDBCardBody>
          ) : (
            <MDBCardBody>
              <MDBTable hover className="product-table">
                <MDBTableHead
                  className="font-weight-bold"
                  //color="mdb-color lighten-5"
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
                    <td colSpan="5">Total: ${total.toFixed(2)}</td>
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
