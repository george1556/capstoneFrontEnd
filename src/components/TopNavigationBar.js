import React from "react";

import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon
} from "mdbreact";

import H2Studio from "./H2Studio.png";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../store/users/actions";

const TopNavigationBar = props => {
  const cartCount = useSelector(state => state.shoppingCart.cart.length);
  const loggedInUser = useSelector(state => state.users.loggedInUser);
  const dispatch = useDispatch();

  console.log("loggedInUser: ", loggedInUser);

  const logoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <MDBContainer>
      <MDBNav
        // left
        pills
        color="dark"
        style={{ marginTop: "15px", backgroundColor: "white" }}
      >
        <img
          // src="https://i.ibb.co/dQcy0LK/H2-STUDIO-FONT-ON-SIDE-BLACK.png"
          src={H2Studio}
          alt="logo"
          height="60"
          style={{ marginLeft: "15px", marginRight: "15px" }}
        />
        <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
          <MDBNavLink to="/home">Home</MDBNavLink>
        </MDBNavItem>

        <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
          <MDBNavLink to="/about">About Us</MDBNavLink>
        </MDBNavItem>

        <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
          <MDBDropdown>
            <MDBDropdownToggle nav caret color="dark">
              Products
            </MDBDropdownToggle>
            <MDBDropdownMenu color="dark">
              <MDBDropdownItem
                onClick={() => {
                  props.history.push("/store");
                }}
              >
                Store
              </MDBDropdownItem>
              <MDBDropdownItem
                onClick={() => {
                  props.history.push("/custom");
                }}
              >
                Custom
              </MDBDropdownItem>
              <MDBDropdownItem
                onClick={() => {
                  props.history.push("/business");
                }}
              >
                Business
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem
          style={{
            marginLeft: "auto",
            paddingTop: "15px",
            paddingBottom: "5px"
          }}
        >
          <MDBNavLink to="/cart">
            <MDBIcon icon="shopping-cart"></MDBIcon>
            &nbsp;&nbsp;Cart
          </MDBNavLink>
          <span className="counter">{cartCount}</span>
        </MDBNavItem>
        {loggedInUser.id === 0 ? (
          <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
            <MDBNavLink to="/login">Login</MDBNavLink>
          </MDBNavItem>
        ) : (
          <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="dark">
                {loggedInUser.firstName}
              </MDBDropdownToggle>
              <MDBDropdownMenu color="dark">
                <MDBDropdownItem
                  onClick={() => {
                    props.history.push("/dashboard");
                  }}
                >
                  {" "}
                  Admin Dashboard
                </MDBDropdownItem>
                <MDBDropdownItem onClick={logoutClick}>Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        )}
      </MDBNav>
    </MDBContainer>
  );
};

export default withRouter(TopNavigationBar);
