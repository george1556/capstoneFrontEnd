import React, { useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";

const EditItem = props => {
  const [title, setTitle] = useState(props.item.title);
  const [summary, setSummary] = useState(props.item.summary);
  const [price, setPrice] = useState(props.item.price);
  const [description1, setDescription1] = useState(props.item.description1);
  const [description2, setDescription2] = useState(props.item.description2);

  return (
    <form>
      <MDBRow>
        <MDBCol md="6" className="mb-4" style={{ textAlign: "left" }}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            defaultValue="blah"
          />
        </MDBCol>
      </MDBRow>
    </form>
  );
};
export default EditItem;
