import React from "react";
import TopNavBar from "../TopNavigationBar";
import ProductCard from "../productCards/ProductCard";
import { MDBContainer, MDBRow, MDBCol, MDBStreak } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";

import { updateCart } from "../../store/cart/actions";
import { updateCartTotal } from "../../store/cart/actions";

const Store = props => {
  const products = useSelector(state => state.products.all);
  const allImages = useSelector(state => state.images.all);
  const cart = useSelector(state => state.shoppingCart.cart);
  let newCart = cart;

  const dispatch = useDispatch();

  let productListWithImages = products;

  allImages.forEach(image => {
    productListWithImages.forEach(product => {
      if (image.product.id === product.id) {
        if (product.hasOwnProperty("images")) {
          product.images.push(image.addressField);
        } else {
          product["images"] = [];
          product.images.push(image.addressField);
        }
      }
    });
  });

  const addToCart = item => {
    newCart.push(item);

    let newTotal = newCart.reduce((acc, currentItem) => {
      return acc + currentItem.price;
    }, 0.0);

    dispatch(updateCart(newCart));
    dispatch(updateCartTotal(newTotal.toFixed(2)));
  };

  let productCardList = productListWithImages.map(product => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ));

  if (productListWithImages.length < 3) {
    return (
      <div>
        <TopNavBar />
        <MDBContainer style={{ height: "2000px", marginTop: "20px" }}>
          <MDBStreak
            size="md"
            //   by="George"
            overlayClass="pattern-1"
            photo="https://industrial-maid.com/wp-content/uploads/2018/09/Metal-Manufacturing-and-Fabrication.jpg"
          ></MDBStreak>
          <MDBRow>
            <MDBCol>Loading....</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  } else {
    return (
      <div>
        <TopNavBar />
        <MDBContainer style={{ height: "2000px", marginTop: "20px" }}>
          <MDBStreak
            size="md"
            //   by="George"
            overlayClass="pattern-1"
            photo="https://industrial-maid.com/wp-content/uploads/2018/09/Metal-Manufacturing-and-Fabrication.jpg"
          >
            Unique Handmade Items
          </MDBStreak>
          <MDBRow>
            <MDBCol></MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>{productCardList}</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
};
export default Store;
