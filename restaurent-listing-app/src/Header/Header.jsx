import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i class="fa-solid fa-utensils m-3"></i>
            Cloud Inn
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  )
}

export default Header