import React, { useState } from "react";
import TopNavBar from "../TopNavigationBar";
import ProductCard from "../productCards/ProductCard";
import { MDBContainer, MDBRow, MDBCol, MDBStreak } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";

import { updateCart } from "../../store/cart/actions";

const Store = props => {
  const products = useSelector(state => state.products.all);
  const allImages = useSelector(state => state.images.all);
  const cart = useSelector(state => state.shoppingCart.cart);
  let newCart = cart;

  //State holding the number of items to display
  const [numOfItems, setNumOfItems] = useState(15);

  const dispatch = useDispatch();

  console.log("CART: ", cart);

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
        // product["image"] = image.addressField;
      }
    });
  });

  const addToCart = item => {
    console.log("ADD TO CART item: ", item);

    newCart.push(item);

    dispatch(updateCart(newCart));
  };

  console.log("PRODUCTLISTWITHIMAGES: ", productListWithImages);

  // console.log(
  //   "images from productlistwithimages: ",
  //   productListWithImages[0].images[0]
  // );

  // let count = numOfItems;
  let productCardList = productListWithImages.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      addToCart={addToCart}
      // currentImage={product.images.length > 0 ? product.images[0] : ""}
    />
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
          {/* <MDBRow style={{ marginTop: "20px" }}>
            <MDBCol lg="4" md="6" xs="12">
              <ProductCard />
            </MDBCol>
            <MDBCol lg="4" md="6" xs="12">
              <ProductCard />
            </MDBCol>
            <MDBCol lg="4" md="6" xs="12">
              <ProductCard />
            </MDBCol>
          </MDBRow> */}
          <MDBRow>
            <MDBCol>
              {/* <img
                src={productListWithImages[0].images[0]}
                style={{ marginLeft: "15px", marginRight: "15px" }}
              /> */}
            </MDBCol>
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
