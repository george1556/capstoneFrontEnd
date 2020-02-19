import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBStreak,
  MDBCardImage
} from "mdbreact";

import logo from "./H2Studio.jpg";

import TopNav from "./TopNavigationBar";
import SectionContainer from "./sectionContainer";
import CategoryCard from "./productCards/CategoryCard";

const Home = props => {
  console.log("PROPS: ", props);

  //Category card
  let categoryCards = [];

  return (
    <div>
      <TopNav />
      <MDBContainer style={{ height: "2000px", marginTop: "20px" }}>
        {/* <MDBStreak
          size="md"
          by="Steve Jobs"
          overlayClass="white-text rgba-black-light pattern-1"
          photo="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg"
        >
          The people who are crazy enough to think they can change the world are
          the ones who do
        </MDBStreak> */}
        {/* <MDBStreak
          size="md"
          //   by="George"
          overlayClass="white-text rgba-black-light pattern-1"
          photo="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg"
        /> */}

        <MDBStreak
          size="md"
          //   by="George"
          overlayClass="pattern-1"
          photo="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg"
        />

        <MDBRow style={{ marginTop: "20px" }}>
          <MDBCol md="4">
            <MDBCard className="mx-4" style={{ width: "19rem" }} collection>
              <MDBCardImage
                className="img-fluid"
                zoom
                src="https://picsum.photos/472/708?random=1"
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Store
                    <MDBIcon icon="chevron-right" />
                  </p>
                </a>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mx-4" style={{ width: "19rem" }} collection>
              <MDBCardImage
                className="img-fluid"
                zoom
                src="https://picsum.photos/472/708?random=1"
              />

              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Custom
                    <MDBIcon icon="chevron-right" />
                  </p>
                </a>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mx-4" style={{ width: "19rem" }} collection>
              <MDBCardImage
                className="img-fluid"
                zoom
                src="https://picsum.photos/472/708?random=1"
              />

              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Business
                    <MDBIcon icon="chevron-right" />
                  </p>
                </a>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default Home;
