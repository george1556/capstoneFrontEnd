import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const NewProduct = props => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

  return (
    <form>
      <MDBRow>
        <MDBCol>
          <div style={{ textAlign: "left" }}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              className="form-control"
              defaultValue={title}
              onChange={e => setTitle(e.target.value)}
            />
            <hr />
            <label htmlFor="title">Price</label>
            <input
              type="number"
              id="price"
              className="form-control"
              defaultValue={price}
              step=".01"
              onChange={e => setPrice(e.target.value)}
            />
            <hr />
            <label htmlFor="title">Summary</label>
            <textarea
              type="text"
              id="summary"
              className="form-control"
              defaultValue={summary}
              onChange={e => setSummary(e.target.value)}
            />
            <hr />
            <label htmlFor="title">Description 1</label>
            <textarea
              type="text"
              id="description1"
              className="form-control"
              defaultValue={description1}
              onChange={e => setDescription1(e.target.value)}
            />
            <hr />
            <label htmlFor="title">Description 2</label>
            <textarea
              type="text"
              id="description2"
              className="form-control"
              defaultValue={description2}
              onChange={e => setDescription2(e.target.value)}
            />
            <hr />
            <MDBBtn
              color="elegant"
              size="lg"
              block
              onClick={() =>
                props.addNewProduct({
                  title: title,
                  summary: summary,
                  price: price,
                  description1: description1,
                  description2: description2
                })
              }
            >
              <b>Save New Product</b>
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </form>
  );
};
export default NewProduct;
