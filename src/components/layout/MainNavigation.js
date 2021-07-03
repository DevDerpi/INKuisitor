import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const MainNavigation = () => {
  return (
    <MDBNavbar expand="lg" dark bgColor="dark" className="shadow-3-strong sticky-top" >
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/">
            <img src={Logo} height="60" width="60" alt="Logo" loading="lazy" />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarNav  fullWidth={false} className="mb-2 mb-lg-0">
          <MDBNavbarItem className="active">
            <MDBNavbarLink active aria-current="page">
              <Link to="/">
                <MDBBtn rounded color="dark">
                  <MDBIcon className="fas fa-home" size="3x" />
                </MDBBtn>
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className="active">
            <MDBNavbarLink>
              <Link to="/Upload">
                <MDBBtn rounded color="dark">
                  <MDBIcon className="fas fa-plus-circle" size="3x" />
                </MDBBtn>
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink>
              <Link to="/Verify">
                <MDBBtn rounded color="dark">
                  <MDBIcon className="fas fa-eye" size="3x" />
                </MDBBtn>
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
          {/* <MDBNavbarItem>
            <MDBNavbarLink >
              <Link to="/AdminPanel">
                <MDBBtn rounded color="dark" >
                  <MDBIcon className="fas fa-user-circle" size="3x" />
                </MDBBtn>
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem> */}
        </MDBNavbarNav>
            <MDBBtn  rounded color="danger" className="me-2" type="button">
              <MDBIcon className="fas fa-sign-out-alt" size="3x" />
            </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default MainNavigation;
