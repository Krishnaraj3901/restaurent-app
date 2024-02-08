import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RestCard from '../RestCard/RestCard';
import { base_url } from '../base_url';

function AllRest() {

  // const baseUrl = 'http://localhost:3001'

  const [allRest,setAllRest]=useState([])

  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}/restaurants`)
    console.log(data);
    setAllRest(data)
  }
  console.log(allRest);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <Row className='g-0'>
      {
        allRest.map((item)=>(
          <Col sm={10} md={6} lg={4} xl={3} className='m-5 ps-5'>
          <RestCard restaurent={item}/>
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default AllRest