import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { base_url } from '../base_url';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../RestOp/REstOp';
import RestReview from '../RestReview/RestReview';


function ViewRest() {
//to get particular id from url

  //const pathParams = useParams()
  // console.log(pathParams.id);

  //destructuring using id
  const {id}=useParams()
  console.log(id);

  //create a state for holding restaurent details

  const [restDetails,setRestDetails]= useState([])

  //make an api call to fetch particular restaurent details

    const fetchData=async()=>{
      const {data} = await axios.get(`${base_url}/restaurants/${id}`)
      console.log(data);
      setRestDetails(data)
    }
    console.log(restDetails);

    useEffect(()=>{
      fetchData()
    },[])

  return (
    <>
     {
      restDetails?
      <Row>
      
        <Col>
        {/* {image} */}
        <Image fluid style={{height:'700px',width:'800px', margin:'20px',padding:'0px',border:'5px solid white'}} src={`${restDetails.photograph}`}/>
        </Col>
      
     
        <Col style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

          <h1 className='text-center m-1'>{restDetails.name}</h1>
        <MDBListGroup style={{ minWidth: '30rem' ,minHeight:'20rem',marginTop:'15px'}} light>
      <MDBListGroupItem
        tag='button'
        action
        noBorders
        active
        aria-current='true'
        type='button'
        className='px-3 text-center'
      >
        <b>Address</b>:{restDetails.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3 text-center'>
       <b>Cusine type</b>: {restDetails.cuisine_type}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3 text-center'>
        <b>Neighbourhood</b>: {restDetails.neighborhood}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3 text-center'>
        <RestOp op={restDetails.operating_hours}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders  type='button' className='px-3 text-center'>
        <RestReview re={restDetails.reviews}/>
      </MDBListGroupItem>
    </MDBListGroup>
        </Col>
      
    </Row>: <p>no data</p>
     }
    </>
  )
}

export default ViewRest