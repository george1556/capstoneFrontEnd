import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabPane,
  MDBTabContent,
  MDBIcon
} from "mdbreact";

import H2StudioMod from "../H2StudioMod3.png";

import { useSelector, useDispatch } from "react-redux";

import TopNavBar from "../TopNavigationBar";

import { updateCart } from "../../store/cart/actions";
import { updateCartTotal } from "../../store/cart/actions";
import { addNewTransaction } from "../../store/transactions/actions";

import StripeCheckout from "react-stripe-checkout";

import { Link } from "react-router-dom";

const Checkout = props => {
  const cart = useSelector(state => state.shoppingCart.cart);
  const cartTotal = useSelector(state => state.shoppingCart.cartTotal);

  const dispatch = useDispatch();

  const [billingShipping, setBillingShipping] = useState(false);
  const [state, setstate] = useState({ activePill: "1" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [billState, setBillState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [firstNameShipping, setFirstNameShipping] = useState("");
  const [lastNameShipping, setLastNameShipping] = useState("");

  const [addressShipping, setAddressShipping] = useState("");
  const [address2Shipping, setAddress2Shipping] = useState("");
  const [cityShipping, setCityShipping] = useState("");
  const [shipstateShipping, setShipStateShipping] = useState("");
  const [zipCodeShipping, setZipCodeShipping] = useState("");

  const [orderStatus, setOrderStatus] = useState("");

  const togglePills = tab => {
    if (state.activePill !== tab) {
      setstate({ activePill: tab });
    }
  };

  //Count number of items in cart to determine quantities
  let cartCount = {};
  cart.forEach(cartItem => {
    if (cartCount.hasOwnProperty(cartItem.id)) {
      cartCount[cartItem.id]++;
    } else {
      cartCount[cartItem.id] = 1;
    }
  });

  //Create an array matching cart contents with quantities
  let cartArrayWithQuantities = [];
  for (const key in cartCount) {
    let currentCartItem = cart.find(cartItem => cartItem.id == key);
    currentCartItem["quantity"] = cartCount[key];
    cartArrayWithQuantities.push(currentCartItem);
  }

  let summaryRows = cartArrayWithQuantities.map(item => {
    return (
      <div key={item.id}>
        <MDBRow>
          <MDBCol sm="8">{item.title}</MDBCol>
          <MDBCol sm="4">{item.price}</MDBCol>
        </MDBRow>
        <hr />
      </div>
    );
  });

  const billingShippingSame = () => {
    if (billingShipping === false) {
      setBillingShipping(true);
      setFirstNameShipping(firstName);
      setLastNameShipping(lastName);

      setAddressShipping(address);
      setAddress2Shipping(address2);
      setCityShipping(city);
      setShipStateShipping(billState);
      setZipCodeShipping(zipCode);
    } else {
      setBillingShipping(false);
      setFirstNameShipping("");
      setLastNameShipping("");

      setAddressShipping("");
      setAddress2Shipping("");
      setCityShipping("");
      setShipStateShipping("");
      setZipCodeShipping("");
    }
  };

  const changeTab = e => {
    e.preventDefault();

    setstate({ activePill: (+state.activePill + 1).toString() });
  };

  let newTransaction = {};

  const handleToken = (token, addresses) => {
    // console.log("stripe token: ", token, " addresses: ", addresses);

    //Uses token from stripe to set order number
    setOrderStatus(token.created);

    for (let i = 0; i < cart.length; i++) {
      newTransaction = {
        orderNumber: token.created,
        email: email,
        productId: cart[i].id,
        productPrice: cart[i].price,
        productQuantity: cart[i].quantity,
        cartTotal: cartTotal,
        customerIpAddress: token.client_ip,
        stripeTokenId: token.id,
        stripeCardId: token.card.id,
        stripeCardZip: token.card.address_zip,
        stripeCardBrand: token.card.brand,
        stripeCardExpMonth: token.card.exp_month,
        stripeCardExpYear: token.card.exp_year,
        stripeCardLast4: token.card.last4,
        stripeCardName: token.card.name,
        billingFirstName: firstName,
        billingLastName: lastName,
        billingAddress: address,
        billingaddress2: address2,
        billingCity: city,
        billingState: billState,
        billingZipCode: zipCode,
        shippingFirstName: firstNameShipping,
        shippingLastName: lastNameShipping,
        shippingAddress: addressShipping,
        shippingAddress2: address2Shipping,
        shippingCity: cityShipping,
        shippingState: shipstateShipping,
        shippingZipCode: zipCodeShipping
      };

      dispatch(addNewTransaction(newTransaction, newTransaction.productId));
    }

    //Clears local cart contents and cart total after checkout
    dispatch(updateCart([]));
    dispatch(updateCartTotal(0.0));
  };

  return (
    <MDBContainer>
      <TopNavBar />
      <MDBRow className="my-2" center>
        <MDBCard className="w-100">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="8" className="mb-4">
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
                          &nbsp;&nbsp; 1. Billing
                        </strong>
                      ) : (
                        <strong style={{ color: "#59698d !important" }}>
                          1. Billing
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
                            &nbsp;&nbsp;2. Shipping
                          </strong>
                        ) : (
                          <strong>2. Shipping</strong>
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
                          &nbsp;&nbsp; 3. Payment
                        </strong>
                      ) : (
                        <strong>3. Payment</strong>
                      )}
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="pt-4" activeItem={state.activePill}>
                  <MDBTabPane tabId="1">
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      Billing Information
                    </h4>

                    <hr />
                    <form onSubmit={changeTab}>
                      <MDBRow>
                        <MDBCol style={{ textAlign: "left" }}>
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="form-control mb-4"
                            placeholder="youremail@example.com"
                            onChange={e => {
                              setEmail(e.target.value);
                            }}
                            required
                          />
                          <hr />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="billingfirstName">First name</label>
                          <input
                            type="text"
                            id="billingfirstName"
                            className="form-control"
                            onChange={e => {
                              setFirstName(e.target.value);
                            }}
                            required
                          />
                        </MDBCol>
                        <MDBCol
                          md="6"
                          className="mb-2"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="billinglastName">Last name</label>
                          <input
                            type="text"
                            id="billinglastName"
                            className="form-control"
                            onChange={e => {
                              setLastName(e.target.value);
                            }}
                            required
                          />
                        </MDBCol>
                        <MDBCol style={{ textAlign: "left" }}>
                          <label htmlFor="billingaddress">Address</label>
                          <input
                            type="text"
                            id="billingaddress"
                            className="form-control mb-4"
                            placeholder="1234 Main St"
                            onChange={e => {
                              setAddress(e.target.value);
                            }}
                            required
                          />
                          <label htmlFor="billingaddress2">
                            Address 2 (optional)
                          </label>
                          <input
                            type="text"
                            id="billingaddress2"
                            className="form-control mb-4"
                            placeholder="Apartment or suite"
                            onChange={e => {
                              setAddress2(e.target.value);
                            }}
                          />
                          <label htmlFor="billingcity">City</label>
                          <input
                            type="text"
                            id="billingcity"
                            className="form-control mb-4"
                            placeholder="Anytown"
                            onChange={e => {
                              setCity(e.target.value);
                            }}
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          md="12"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="billingcountry">Country</label>
                          <select
                            className="custom-select d-block w-100"
                            id="billingcountry"
                            readOnly
                            defaultValue="United States"
                          >
                            <option>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </MDBCol>
                        <MDBCol
                          lg="4"
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="billingstate">State</label>

                          <input
                            type="text"
                            className="form-control"
                            id="billingstate"
                            required
                            defaultValue=""
                            onChange={e => {
                              setBillState(e.target.value);
                            }}
                          />

                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </MDBCol>
                        <MDBCol
                          lg="4"
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="billingzip">Zip</label>
                          <input
                            type="number"
                            className="form-control"
                            id="billingzip"
                            required
                            maxLength="5"
                            minLength="5"
                            onChange={e => {
                              setZipCode(e.target.value);
                            }}
                          />
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <hr />
                      <MDBBtn color="elegant" size="lg" block type="submit">
                        Next step: <b>Shipping</b>
                      </MDBBtn>
                    </form>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                      Shipping Information
                    </h4>
                    <hr />
                    <div className="mb-1" style={{ textAlign: "left" }}>
                      <input
                        type="checkbox"
                        className="form-check-input filled-in"
                        id="billingShipping"
                        onClick={billingShippingSame}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="billingShipping"
                      >
                        Billing and shipping address are the same
                      </label>
                    </div>
                    <hr className="mb-3" />

                    <form onSubmit={changeTab}>
                      <MDBRow>
                        <MDBCol
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="firstName">First name</label>
                          {billingShipping === true ? (
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              defaultValue={firstName}
                              readOnly
                            />
                          ) : (
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              defaultValue=""
                              required
                              onChange={e => {
                                setFirstNameShipping(e.target.value);
                              }}
                            />
                          )}
                        </MDBCol>
                        <MDBCol
                          md="6"
                          className="mb-2"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="lastName">Last name</label>
                          {billingShipping === true ? (
                            <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              defaultValue={lastName}
                              readOnly
                            />
                          ) : (
                            <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              required
                              defaultValue=""
                              onChange={e => {
                                setLastNameShipping(e.target.value);
                              }}
                            />
                          )}
                        </MDBCol>
                        <MDBCol style={{ textAlign: "left" }}>
                          <label htmlFor="address">Address</label>
                          {billingShipping === true ? (
                            <input
                              type="text"
                              id="address"
                              className="form-control mb-4"
                              defaultValue={address}
                              readOnly
                            />
                          ) : (
                            <input
                              type="text"
                              id="address"
                              className="form-control mb-4"
                              placeholder="1234 Main St"
                              required
                              defaultValue=""
                              onChange={e => {
                                setAddressShipping(e.target.value);
                              }}
                            />
                          )}

                          <label htmlFor="address-2">
                            Address 2 (optional)
                          </label>
                          {billingShipping === true ? (
                            <input
                              type="text"
                              id="address-2"
                              className="form-control mb-4"
                              placeholder="Apartment or suite"
                              defaultValue={address2}
                              readOnly
                            />
                          ) : (
                            <input
                              type="text"
                              id="address-2"
                              className="form-control mb-4"
                              placeholder="Apartment or suite"
                              defaultValue=""
                              onChange={e => {
                                setAddress2Shipping(e.target.value);
                              }}
                            />
                          )}

                          <label htmlFor="city">City</label>
                          {billingShipping === true ? (
                            <input
                              type="text"
                              id="city"
                              className="form-control mb-4"
                              placeholder="Anytown"
                              defaultValue={city}
                              readOnly
                            />
                          ) : (
                            <input
                              type="text"
                              id="city"
                              className="form-control mb-4"
                              placeholder="Anytown"
                              defaultValue=""
                              onChange={e => {
                                setCityShipping(e.target.value);
                              }}
                              required
                            />
                          )}
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol
                          lg="4"
                          md="12"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="country">Country</label>
                          <select
                            className="custom-select d-block w-100"
                            id="country"
                            required
                            readOnly
                          >
                            <option readOnly>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </MDBCol>
                        <MDBCol
                          lg="4"
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="shipstate">State</label>

                          {billingShipping === true ? (
                            <input
                              type="text"
                              className="form-control"
                              id="shipstate"
                              required
                              readOnly
                              defaultValue={billState}
                            />
                          ) : (
                            <input
                              type="text"
                              className="form-control"
                              id="state"
                              required
                              defaultValue=""
                              onChange={e => {
                                setBillingShipping(e.target.value);
                              }}
                            />
                          )}
                        </MDBCol>
                        <MDBCol
                          lg="4"
                          md="6"
                          className="mb-4"
                          style={{ textAlign: "left" }}
                        >
                          <label htmlFor="zip">Zip</label>
                          {billingShipping === true ? (
                            <input
                              type="number"
                              className="form-control"
                              id="zip"
                              required
                              maxLength="5"
                              minLength="5"
                              defaultValue={zipCode}
                              readOnly
                            />
                          ) : (
                            <input
                              type="number"
                              className="form-control"
                              id="zip"
                              required
                              maxLength="5"
                              minLength="5"
                              defaultValue=""
                              onChange={e => {
                                setZipCodeShipping(e.target.value);
                              }}
                            />
                          )}

                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mb-4" />
                      <MDBBtn color="elegant" size="lg" block type="submit">
                        Next step: <b>Payment</b>
                      </MDBBtn>
                    </form>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    {orderStatus === "" ? (
                      <div
                        className="d-block my-3"
                        style={{ textAlign: "left" }}
                      >
                        <MDBRow>
                          <MDBCol sm="12" lg="6">
                            <MDBCard style={{ marginTop: "15px" }}>
                              <MDBCardBody>
                                <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                                  Billing Address
                                </h4>
                                <hr />
                                <div
                                  style={{
                                    textAlign: "left",
                                    marginLeft: "10px"
                                  }}
                                >
                                  <div>
                                    {firstName}&nbsp;{lastName}
                                  </div>

                                  <div>
                                    {address}&nbsp;{address2}
                                  </div>

                                  <div>
                                    {city},&nbsp;{billState}
                                    &nbsp;
                                    {zipCode}
                                  </div>
                                </div>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                          <MDBCol sm="12" lg="6">
                            <MDBCard style={{ marginTop: "15px" }}>
                              <MDBCardBody>
                                <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                                  Shipping Address
                                </h4>
                                <hr />
                                <div
                                  style={{
                                    textAlign: "left",
                                    marginLeft: "10px"
                                  }}
                                >
                                  <div>
                                    {firstNameShipping}&nbsp;{lastNameShipping}
                                  </div>

                                  <div>
                                    {addressShipping}&nbsp;{address2Shipping}
                                  </div>

                                  <div>
                                    {cityShipping},&nbsp;{shipstateShipping}
                                    &nbsp;
                                    {zipCodeShipping}
                                  </div>
                                </div>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>

                        <hr className="mb-4" />

                        <StripeCheckout
                          stripeKey="pk_test_94Wz8T5Yo9O8G3z7gdKlwP7g00FaC7CcjV"
                          // label="Place Order" // title on the button
                          image={H2StudioMod}
                          token={handleToken}
                          // billingAddress
                          // shippingAddress
                          zipCode
                          card={{ address_city: "Phoenix" }}
                          currency="USD"
                          amount={cartTotal * 100}
                          name="Checkout"
                          ComponentClas="div"
                          // allowRememberMe="false"
                        >
                          <MDBBtn size="lg" block color="success">
                            Place Order
                          </MDBBtn>
                        </StripeCheckout>
                      </div>
                    ) : (
                      <MDBCard style={{ marginTop: "15px" }}>
                        <MDBCardBody>
                          <h4
                            color="success"
                            style={{ color: "#00c851 !important" }}
                          >
                            <div style={{ color: "#00c851 !important" }}>
                              Thank you {firstName}! &nbsp;
                              <MDBIcon
                                className="green-text"
                                icon="check-circle"
                              />
                            </div>
                          </h4>
                          <br />
                          <h5>Your Order Number: {orderStatus} </h5>
                        </MDBCardBody>
                      </MDBCard>
                    )}
                  </MDBTabPane>
                </MDBTabContent>
              </MDBCol>
              <MDBCol lg="4" className="mb-4">
                <MDBRow>
                  <MDBCol>
                    <MDBCard>
                      <MDBCardBody>
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Summary
                        </h4>
                        <hr />
                        {cartTotal <= 0.0 ? (
                          <div>
                            You have nothing in your cart.
                            <br />{" "}
                            <Link to="/store">
                              <MDBBtn color="elegant" size="sm">
                                Go to store&nbsp;&nbsp;
                                <MDBIcon icon="angle-double-right" />
                              </MDBBtn>
                            </Link>{" "}
                          </div>
                        ) : (
                          <div>
                            {summaryRows}
                            <MDBRow>
                              <MDBCol sm="8">
                                <strong>Total</strong>
                              </MDBCol>
                              <MDBCol sm="4">
                                <strong>$ {cartTotal}</strong>
                              </MDBCol>
                            </MDBRow>
                          </div>
                        )}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};
export default Checkout;
