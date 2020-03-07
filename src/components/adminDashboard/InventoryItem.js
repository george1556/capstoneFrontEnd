import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBBtn, MDBRow, MDBCol } from "mdbreact";

const InventoryItem = props => {
  const [title, setTitle] = useState(props.item.title);
  const [summary, setSummary] = useState(props.item.summary);
  const [price, setPrice] = useState(props.item.price);
  const [description1, setDescription1] = useState(props.item.description1);
  const [description2, setDescription2] = useState(props.item.description2);

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
                  onClick={() => props.deleteButtonClick(props.item)}
                >
                  Delete
                </MDBBtn>
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
