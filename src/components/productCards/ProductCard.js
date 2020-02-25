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
  return (
    <MDBCard
      className="m-2"
      // style={{ width: "22rem" }}
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
          props.product.images == undefined
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
                onClick={() => props.addToCart(props.product)}
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
