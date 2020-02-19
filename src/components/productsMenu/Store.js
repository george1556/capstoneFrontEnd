import React from "react";
import TopNavBar from "../TopNavigationBar";
import ProductCard from "../productCards/ProductCard";
import { MDBContainer, MDBRow, MDBCol, MDBStreak } from "mdbreact";

const Store = props => {
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
        <MDBRow style={{ marginTop: "20px" }}>
          {/* <MDBCol size="12"> */}
          {/* <div className="card-columns"> */}
          <MDBCol lg="4" md="6" xs="12">
            <ProductCard />
          </MDBCol>
          <MDBCol lg="4" md="6" xs="12">
            <ProductCard />
          </MDBCol>
          <MDBCol lg="4" md="6" xs="12">
            <ProductCard />
          </MDBCol>
          {/* </div> */}
        </MDBRow>
      </MDBContainer>
      <div>stuff</div>
    </div>
  );
};
export default Store;
