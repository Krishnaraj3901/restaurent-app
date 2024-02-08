import './RestCard.css';

import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'


function RestCard({restaurent}) {
  console.log(restaurent);
  return (
    <div>
       <Link to={`/view/${restaurent.id}`} style={{textDecoration:'none'}}>
       <MDBCard className='card'>
      <MDBCardImage className='image' src={restaurent.photograph} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurent.name}</MDBCardTitle>
        <MDBCardText>
        <p>address:{restaurent.address}</p>
        <p>cuisine type:{restaurent.cuisine_type}</p>
        </MDBCardText>
  
      </MDBCardBody>
    </MDBCard>
       </Link>
    </div>
  )
}

export default RestCard