import React from "react";

const CartItem = props => {
  let totalAmount = (props.product.price * props.product.quantity).toFixed(2);

  return (
    <tr>
      <td>
        <img src={props.product.images[0]} />
      </td>
      <td>
        <h6>{props.product.title}</h6>
      </td>
      <td>${props.product.price}</td>
      <td>
        <div className="def-number-input number-input align-middle">
          <button
            onClick={() => {
              props.removeOneFromCart(props.product.id);
              //   props.updateCartTotal();
            }}
            className="minus"
          ></button>
          <input
            readOnly
            className="quantity"
            name="quantity"
            value={props.product.quantity}
            // onChange={}
            type="number"
          />
          <button
            onClick={() => {
              props.addOneToCart(props.product);
              //   props.updateCartTotal();
            }}
            className="plus"
          ></button>
        </div>
      </td>
      <td>${totalAmount}</td>
      {/* <td>button</td> */}
    </tr>
  );
};
export default CartItem;
