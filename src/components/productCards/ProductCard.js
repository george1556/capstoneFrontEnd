import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBIcon,
  MDBBtn
} from "mdbreact";

const ProductCard = props => {
  const addToCartClick = () => {
    props.addToCart(props.product);
    props.toast(props.product.title);
  };

  return (
    <MDBCard
      className="m-2 storeCards"
      style={{
        display: "inline-block",
        width: "18rem"
      }}
      cascade
      ecommerce
      wide
    >
      <MDBCardImage
        cascade
        top
        src={
          props.product.images === undefined
            ? "https://via.placeholder.com/288x195"
            : props.product.images[0]
        }
        waves
        //Adds the hover/zoom in effect when mouseover
        hover
        zoom
      />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">{props.product.title}</MDBCardTitle>

        <MDBCardText>{props.product.summary}</MDBCardText>
        <MDBCardFooter>
          <span className="float-left">$&nbsp;{props.product.price}</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn
                tag="a"
                color="transparent"
                size="lg"
                className="p-1 m-0 mr-2 z-depth-0"
                onClick={addToCartClick}
              >
                <MDBIcon icon="shopping-cart" />
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
};
export default ProductCard;
