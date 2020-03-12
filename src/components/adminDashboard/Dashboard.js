import React, { useState } from "react";

import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBTabContent,
  MDBTabPane,
  MDBTable,
  MDBTableBody
} from "mdbreact";

import { useSelector, useDispatch } from "react-redux";

import TopNavBar from "../TopNavigationBar";
import InventoryItem from "./InventoryItem";
import EditItem from "./EditItem";
import NewProduct from "./NewProduct";
// import NewImages from "./NewImages";
import DisplayTransactions from "./DisplayTransactions";

import {
  updateProduct,
  deleteProduct,
  addProduct
} from "../../store/products/actions";

const Dashboard = () => {
  const products = useSelector(state => state.products.all);
  const allImages = useSelector(state => state.images.all);
  const [state, setstate] = useState({ activePill: "1" });
  const [editItem, setEditItem] = useState({ id: 0 });

  const dispatch = useDispatch();

  const [update, setUpdate] = useState(0);

  const togglePills = tab => {
    if (state.activePill !== tab) {
      setstate({ activePill: tab });
    }
  };

  // const changeTab = e => {
  //   e.preventDefault();

  //   setstate({ activePill: (+state.activePill + 1).toString() });
  // };

  let productListWithImages = products;

  allImages.forEach(image => {
    productListWithImages.forEach(product => {
      if (image.product.id === product.id) {
        if (product.hasOwnProperty("images")) {
          if (product.images != null) {
            product.images.push(image.addressField);
          }
        } else {
          product["images"] = [];
          product.images.push(image.addressField);
        }
      }
    });
  });

  const editButtonClick = item => {
    setEditItem(item);
    setUpdate(update + 1);
  };

  const deleteButtonClick = item => {
    dispatch(deleteProduct(item.id));
    setUpdate(update + 1);
  };

  const saveChangesClick = item => {
    dispatch(updateProduct(item));
    setEditItem({ id: 0 });
    setUpdate(update + 1);
  };

  const addNewProduct = item => {
    dispatch(addProduct(item));
    setUpdate(update + 1);
  };

  let inventoryRows = productListWithImages.map(item => (
    <InventoryItem
      item={item}
      key={item.id}
      editButtonClick={editButtonClick}
      deleteButtonClick={deleteButtonClick}
    />
  ));

  let editRows = {};

  {
    editItem.id === 0
      ? (editRows = (
          <EditItem
            key="0"
            item={{
              id: 0,
              title: "No item selected.",
              price: "",
              description1: "",
              description2: ""
            }}
            saveChangesClick={saveChangesClick}
          />
        ))
      : (editRows = (
          <EditItem
            key={editItem.id}
            item={editItem}
            saveChangesClick={saveChangesClick}
          />
        ));
  }

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
                            &nbsp;&nbsp;Add New Product
                          </strong>
                        ) : (
                          <strong>Add New Product</strong>
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
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Current Inventory Items
                        </h4>
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
                            maxHeight="500px"
                            small
                          >
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
                          <MDBCardBody> {editRows}</MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <MDBRow>
                      <MDBCol md="1" lg="3" />
                      <MDBCol md="10" lg="6">
                        <MDBCard>
                          <MDBCardBody>
                            {" "}
                            <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                              Add New Product
                            </h4>
                            <hr />
                            <NewProduct addNewProduct={addNewProduct} />
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="1" lg="3" />
                      {/* <MDBCol>
                        <MDBCard>
                          <MDBCardBody>
                            {" "}
                            <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                              Add Images to Product
                            </h4>
                            <hr />
                            <NewImages />
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol> */}
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      Transactions
                    </h4>
                    <DisplayTransactions />
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
