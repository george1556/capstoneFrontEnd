import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { useSelector } from "react-redux";

const TopNavigationBar = () => {
  const users = useSelector(state => state.users.all);

  console.log("USERS: ", users);
  return (
    <BrowserRouter>
      <MDBNav pills color="dark">
        <MDBNavItem>
          <MDBNavLink active to="#!">
            Active
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret color="dark">
              Dropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu color="dark">
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Separated link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/stuff">Link</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          {/* <MDBNavLink disabled to="#!">
            Disabled
          </MDBNavLink> */}
        </MDBNavItem>
      </MDBNav>
    </BrowserRouter>
  );
};

export default TopNavigationBar;
