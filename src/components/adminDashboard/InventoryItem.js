import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from "mdbreact";

const InventoryItem = props => {
  const [title] = useState(props.item.title);
  const [summary] = useState(props.item.summary);

  const [deleteModal, setDeleteModal] = useState(false);

  const deleteModalClick = () => {
    setDeleteModal(!deleteModal);
  };

  const confirmDelete = () => {
    props.deleteButtonClick(props.item);
    setDeleteModal(!deleteModal);
  };

  return (
    <tr>
      <td>
        <MDBCard style={{ marginLeft: "30px" }}>
          <MDBCardBody>
            <h6
              className=" text-center font-weight-bold"
              style={{ marginBottom: "0px" }}
            >
              {title}
            </h6>

            <div style={{ textAlign: "left" }}>{summary}</div>

            <MDBRow>
              <MDBCol>
                <MDBBtn
                  // color="danger"
                  size="sm"
                  style={{
                    display: "block",
                    width: "100%",
                    backgroundColor: "#f57c00 !important"
                  }}
                  className="adminEditButton"
                  onClick={() => props.editButtonClick(props.item)}
                >
                  Edit Item
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn
                  color="danger-dark"
                  size="sm"
                  style={{ display: "block", width: "100%" }}
                  className="adminDeleteButton"
                  onClick={() => setDeleteModal(!deleteModal)}
                >
                  Delete
                </MDBBtn>

                <MDBModal
                  isOpen={deleteModal}
                  toggle={deleteModalClick}
                  centered
                >
                  <MDBModalHeader
                    toggle={deleteModalClick}
                    style={{ textAlign: "center" }}
                  >
                    Permanently Delete Item
                  </MDBModalHeader>
                  <MDBModalBody>
                    Are you sure you want to permanently delete this item from
                    inventory? <br />
                    <h5 style={{ marginTop: "5px" }}>
                      <b>{title}</b>
                    </h5>
                    <hr />
                    <MDBRow>
                      <MDBCol>
                        <MDBBtn
                          color="elegant"
                          style={{ backgroundColor: "#2e2e2e !important" }}
                          onClick={() => setDeleteModal(!deleteModal)}
                          style={{ display: "block", width: "100%", margin: 0 }}
                        >
                          <b>Cancel</b>
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol>
                        <MDBBtn
                          className="adminDeleteButton"
                          onClick={confirmDelete}
                          style={{ display: "block", width: "100%", margin: 0 }}
                        >
                          <b>Delete</b>
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalBody>
                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};
export default InventoryItem;
