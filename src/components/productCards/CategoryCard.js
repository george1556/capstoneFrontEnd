import React from "react";
import { MDBCard, MDBCardImage, MDBIcon } from "mdbreact";

const CategoryCard = props => {
  //Props for image source, and title

  return (
    <MDBCard className="mx-4" style={{ width: "19rem" }} collection>
      <MDBCardImage
        className="img-fluid"
        zoom
        src="https://picsum.photos/472/708?random=1"
      />

      <div className="stripe dark">
        <a href="#!">
          <p>
            Title
            <MDBIcon icon="chevron-right" />
          </p>
        </a>
      </div>
    </MDBCard>
  );
};

export default CategoryCard;
