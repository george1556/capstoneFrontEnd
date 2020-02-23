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
  //   console.log("PROPS.product", props.product);
  let currentImage =
    props.product.images > 0
      ? props.product.images[0]
      : "https://picsum.photos/id/16/288/195";

  //   console.log("Current image: ", currentImage);
  //   console.log("props.product.images: ", props.product.images);

  return (
    <MDBCard
      className="m-2"
      // style={{ width: "22rem" }}
      style={{ display: "inline-block", width: "18rem" }}
      cascade
      ecommerce
      wide
    >
      <MDBCardImage
        cascade
        top
        // src={props.product.images[0]}
        src={currentImage}
        waves
        //Adds the hover/zoom in effect when mouseover
        hover
        zoom
      />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">Shoes</MDBCardTitle>
        {/* <MDBCardTitle>
          <a href="#!">
            <strong>Product name</strong>
          </a>
        </MDBCardTitle> */}
        <MDBCardText>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates. Temporibus autem
          quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$</span>
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
