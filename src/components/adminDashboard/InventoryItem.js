import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

const InventoryItem = props => {
  const [title, setTitle] = useState(props.item.title);
  const [summary, setSummary] = useState(props.item.summary);
  const [price, setPrice] = useState(props.item.price);
  const [description1, setDescription1] = useState(props.item.description1);
  const [description2, setDescription2] = useState(props.item.description2);

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
            {/* <br /> */}
            <div style={{ textAlign: "left" }}>{summary}</div>
            {/* <input
          type="text"
          id="title"
          className="form-control"
          defaultValue={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        /> */}
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
                  // onClick={() => props.deleteButtonClick(props.item)}
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
                          // color="danger"
                          className="adminDeleteButton"
                          // onClick={() => setDeleteModal(!deleteModal)}
                          onClick={confirmDelete}
                          style={{ display: "block", width: "100%", margin: 0 }}
                        >
                          <b>Delete</b>
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalBody>
                  {/* <MDBModalFooter> */}

                  {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
                  {/* </MDBModalFooter> */}
                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </td>
      <td></td>
      <td></td>
      <td></td>
      {/* <input
      type="text"
      id="firstName"
      className="form-control"
      defaultValue={firstName}
      readOnly
    /> */}
    </tr>
  );
};
export default InventoryItem;
