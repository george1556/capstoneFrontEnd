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
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const TopNavigationBar = props => {
  const cartCount = useSelector(state => state.shoppingCart.cart.length);

  return (
    <MDBContainer>
      <MDBNav
        left
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
          <MDBNavLink to={{ pathname: "/home" }}>Home</MDBNavLink>
        </MDBNavItem>

        <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
          <MDBNavLink to={{ pathname: "/about" }}>About Us</MDBNavLink>
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
        <MDBNavItem style={{ paddingTop: "15px", paddingBottom: "5px" }}>
          <MDBNavLink
            to={{
              pathname: "/login",
              state: {}
            }}
          >
            Login
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </MDBContainer>
  );
};

export default withRouter(TopNavigationBar);
