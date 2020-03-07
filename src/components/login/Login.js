import React, { useState } from "react";
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
  MDBFreeBird,
  MDBAlert
} from "mdbreact";
import { useSelector, useDispatch } from "react-redux";

import TopNav from "../TopNavigationBar";
import SectionContainer from "../sectionContainer";
import { loginUser } from "../../store/users/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loggedInUser = useSelector(state => state.users.loggedInUser);

  const dispatch = useDispatch();

  const loginSubmit = e => {
    e.preventDefault();
    let user = {
      username: username,
      password: password
    };

    dispatch(loginUser(user));

    setUsername("");
    setPassword("");
  };

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
                    <form onSubmit={loginSubmit}>
                      <p className="h4 text-center py-4">Login</p>
                      {loggedInUser.id === 0 ? (
                        ""
                      ) : (
                        <div style={{ textAlign: "center" }}>
                          <MDBAlert color="success">
                            <MDBIcon
                              className="green-text"
                              icon="check-circle"
                            />
                            &nbsp;<b>You logged in successfully!</b>
                          </MDBAlert>
                        </div>
                      )}
                      {loggedInUser.firstName === "" ? (
                        <div style={{ textAlign: "center" }}>
                          <MDBAlert color="danger">
                            <MDBIcon className="red-text" icon="times-circle" />
                            &nbsp;<b>Your username or password do not match.</b>
                          </MDBAlert>
                        </div>
                      ) : (
                        ""
                      )}
                      {loggedInUser.id === 0 ? (
                        <div>
                          <div className="grey-text">
                            <MDBInput
                              label="Username"
                              icon="user-alt"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                              value={username}
                              onChange={e => setUsername(e.target.value)}
                            />
                            <MDBInput
                              label="Password"
                              icon="lock"
                              group
                              type="password"
                              validate
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="text-center py-4 mt-3">
                            <MDBBtn type="submit" color="dark">
                              Login
                            </MDBBtn>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
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
