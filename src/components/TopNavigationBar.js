import React, { useState } from "react";
import { BrowserRouter, Redirect, Router } from "react-router-dom";
// import { withRouter } from "react-router";
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBIcon,
  MDBNavbarBrand,
  MDBSticky,
  MDBStickyContent
} from "mdbreact";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// import logo from "../../public/H2Studio-small.png";

const TopNavigationBar = props => {
  const users = useSelector(state => state.users.all);
  const products = useSelector(state => state.products.all);
  const transactions = useSelector(state => state.transactions.all);
  const images = useSelector(state => state.images.all);

  console.log("PRODUCTS: ", products);
  console.log("TRANSACTIONS: ", transactions);
  console.log("IMAGES: ", images);

  return (
    <MDBContainer>
      {/* <MDBStickyContent style={{ background: "#fff", height: "465px" }}>
        <MDBSticky> */}
      <MDBNav
        left
        pills
        color="dark"
        style={{ marginTop: "15px", backgroundColor: "white" }}
      >
        <img
          src="https://i.ibb.co/dQcy0LK/H2-STUDIO-FONT-ON-SIDE-BLACK.png"
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
            <MDBIcon icon="shopping-cart" />
            &nbsp;&nbsp;Cart
          </MDBNavLink>
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
      {/* </MDBSticky>
      </MDBStickyContent> */}
    </MDBContainer>
  );
};

export default withRouter(TopNavigationBar);
// export default TopNavigationBar;

// import React from "react";
// import TopNavBar from "../TopNavigationBar";
// import ProductCard from "../productCards/ProductCard";
// import { MDBContainer, MDBRow, MDBCol, MDBStreak } from "mdbreact";

// const Store = props => {
//   return (
//     <div>
//       <TopNavBar />
//       <MDBContainer style={{ height: "2000px", marginTop: "20px" }}>
//         <MDBStreak
//           size="md"
//           //   by="George"
//           overlayClass="pattern-1"
//           photo="https://industrial-maid.com/wp-content/uploads/2018/09/Metal-Manufacturing-and-Fabrication.jpg"
//         >
//           Unique Handmade Items
//         </MDBStreak>
//         <MDBRow style={{ marginTop: "20px" }}>
//           {/* <MDBCol size="12"> */}
//           {/* <div className="card-columns"> */}
//           <MDBCol lg="4" md="6" xs="12">
//             <ProductCard />
//           </MDBCol>
//           <MDBCol lg="4" md="6" xs="12">
//             <ProductCard />
//           </MDBCol>
//           <MDBCol lg="4" md="6" xs="12">
//             <ProductCard />
//           </MDBCol>
//           {/* </div> */}
//         </MDBRow>
//       </MDBContainer>
//       <div>stuff</div>
//     </div>
//   );
// };
// export default Store;
