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
  MDBEdgeHeader,
  MDBFreeBird
} from "mdbreact";

import TopNav from "../TopNavigationBar";
import SectionContainer from "../sectionContainer";

const Login = props => {
  console.log("PROPS: ", props);
  return (
    <div>
      <TopNav />

      {/* <div style={{ marginTop: "30px" }} /> */}
      <div className="text-left">
        <MDBContainer className="mt-3">
          {/* <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader> */}
          <MDBEdgeHeader color="elegant-color-dark"></MDBEdgeHeader>

          <MDBFreeBird>
            <SectionContainer header="" className="row" noBorder>
              <MDBCol md="3" />
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Login</p>
                      <div className="grey-text">
                        <MDBInput
                          label="Username"
                          icon="user-alt"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Password"
                          icon="lock"
                          group
                          type="password"
                          validate
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn type="submit" color="dark">
                          Login
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" />
            </SectionContainer>
          </MDBFreeBird>
        </MDBContainer>
      </div>
    </div>
  );
};
export default Login;
