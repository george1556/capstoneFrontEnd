import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { MDBSelect, MDBBtn } from "mdbreact";

const NewImages = props => {
  const products = useSelector(state => state.products.all);
  const [selectedProduct, setSelectedProduct] = useState();
  const productList = [];

  console.log("PRODUCTS: ", products);
  products.forEach(product => {
    productList.push({
      text: product.title,
      value: product.title
    });
  });

  const selectProductClick = productName => {
    console.log("productName: ", productName);
    setSelectedProduct(productName);
  };

  console.log("selectedProduct: ", selectedProduct);

  const buttonClick = () => {
    console.log("selected Product CLIC: ", selectedProduct);
  };

  return (
    <div>
      <MDBSelect
        search
        label="Select a product"
        options={productList}
        onSelect={e => selectProductClick(e.target.value)}
        // onClick={e => selectProductClick(e.target.value)}
      />
      <MDBBtn onClick={buttonClick}>Click me</MDBBtn>
    </div>
  );
};
export default NewImages;
