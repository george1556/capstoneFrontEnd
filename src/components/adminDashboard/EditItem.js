import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const EditItem = props => {
  const [title, setTitle] = useState(props.item.title);
  const [summary, setSummary] = useState(props.item.summary);
  const [price, setPrice] = useState(props.item.price);
  const [description1, setDescription1] = useState(props.item.description1);
  const [description2, setDescription2] = useState(props.item.description2);

  return (
    <form>
      <MDBRow>
        <MDBCol className="mb-4">
          {props.item.title === "No item selected." ? (
            <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
              No Item Selected.
            </h4>
          ) : (
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
                  props.saveChangesClick({
                    id: props.item.id,
                    title: title,
                    summary: summary,
                    price: price,
                    description1: description1,
                    description2: description2,
                    description3: props.item.description3,
                    description4: props.item.description4
                  })
                }
              >
                <b>Save Changes</b>
              </MDBBtn>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </form>
  );
};
export default EditItem;
