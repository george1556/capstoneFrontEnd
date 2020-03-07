import React, { useState } from "react";

import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBTabContent,
  MDBTabPane,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCardHeader
} from "mdbreact";

import { useSelector, useDispatch } from "react-redux";

import TopNavBar from "../TopNavigationBar";

import InventoryItem from "./InventoryItem";

const Dashboard = () => {
  const products = useSelector(state => state.products.all);
  const allImages = useSelector(state => state.images.all);
  const [state, setstate] = useState({ activePill: "1" });

  const togglePills = tab => {
    if (state.activePill !== tab) {
      setstate({ activePill: tab });
    }
  };

  const changeTab = e => {
    e.preventDefault();

    setstate({ activePill: (+state.activePill + 1).toString() });
  };

  let productListWithImages = products;

  allImages.forEach(image => {
    productListWithImages.forEach(product => {
      if (image.product.id === product.id) {
        if (product.hasOwnProperty("images")) {
          product.images.push(image.addressField);
        } else {
          product["images"] = [];
          product.images.push(image.addressField);
        }
      }
    });
  });

  const editButtonClick = item => {
    console.log("EDIT CLICK: ", item.title);
  };

  const deleteButtonClick = item => {
    console.log("DELETE CLICK: ", item.title);
  };

  let inventoryRows = productListWithImages.map(item => (
    <InventoryItem
      item={item}
      key={item.id}
      editButtonClick={editButtonClick}
      deleteButtonClick={deleteButtonClick}
      //   removeOneFromCart={removeOneFromCart}
      //   addOneToCart={addOneToCart}
      //   updateCartTotal={updateCartTotal}
    />
  ));

  return (
    <MDBContainer>
      <TopNavBar />
      <MDBRow className="my-2" center>
        <MDBCard className="w-100">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="12" className="mb-4">
                <MDBNav pills color="elegant" className="nav-justified">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={state.activePill === "1" ? "active" : ""}
                      onClick={() => togglePills("1")}
                    >
                      {state.activePill === "1" ? (
                        <strong>
                          <MDBIcon icon="angle-double-right" />
                          &nbsp;&nbsp; Current Inventory
                        </strong>
                      ) : (
                        <strong style={{ color: "#59698d !important" }}>
                          Current Inventory
                        </strong>
                      )}
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <div style={{ backgroundColor: "#f5f5f5 !important" }}>
                      <MDBNavLink
                        to="#"
                        className={state.activePill === "2" ? "active" : ""}
                        onClick={() => togglePills("2")}
                      >
                        {state.activePill === "2" ? (
                          <strong>
                            <MDBIcon icon="angle-double-right" />
                            &nbsp;&nbsp;Add New Inventory
                          </strong>
                        ) : (
                          <strong>Add New Inventory</strong>
                        )}
                      </MDBNavLink>
                    </div>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={state.activePill === "3" ? "active" : ""}
                      onClick={() => togglePills("3")}
                    >
                      {state.activePill === "3" ? (
                        <strong>
                          <MDBIcon icon="angle-double-right" />
                          &nbsp;&nbsp; Transactions
                        </strong>
                      ) : (
                        <strong>Transactions</strong>
                      )}
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="pt-4" activeItem={state.activePill}>
                  <MDBTabPane tabId="1">
                    <MDBRow>
                      <MDBCol lg="6" sm="12">
                        {/* <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Inventory List
                        </h4> */}
                        <div
                          style={{
                            border: "1px solid rgba(0,0,0,.1)",
                            borderRight: "none"
                          }}
                        >
                          <MDBTable
                            hover
                            responsive
                            className="product-table inventory-table"
                            scrollY
                            maxHeight="300px"
                            small
                          >
                            {/* <MDBTableHead
                        className="font-weight-bold"
                        color="elegant-color-dark"
                        textWhite
                      >
                        <tr>
                          <th>Product</th>
                        </tr>
                      </MDBTableHead> */}

                            <MDBTableBody className="adminInventoryTable">
                              {inventoryRows}
                            </MDBTableBody>
                          </MDBTable>
                        </div>
                      </MDBCol>
                      <MDBCol lg="6" sm="12">
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Edit Selected Item
                        </h4>
                        <MDBCard>
                          <MDBCardBody>
                            {" "}
                            <hr />
                            more stuff
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      tab2
                    </h4>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      tab3
                    </h4>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};
export default Dashboard;
