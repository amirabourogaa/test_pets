import React, { useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
export default function AddPet () {

  const [petInfos, setPetInfo] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()

    let pets = {
      id: 0,
      category: {id:0,name:petInfos.category},
      name: petInfos.name,
      photoUrls: petInfos.photoUrls,
      tags: {
        "id": 0,
        "name": "string"
      },
      status: petInfos.status
   

    }
    let obj = {
      method: 'POST',
      body: JSON.stringify(pets),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    fetch('https://petstore.swagger.io/v2/pet', obj)
      .then((response) => response.json())
      .then((json) => console.log(json));


  };



  return (
    <Container style={{ marginTop: '6%' }}>
      <Row>
        <Col md={4}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Category</Form.Label>
              <Form.Control type='text' placeholder='Category'
              onChange={(e) => { setPetInfo({ ...petInfos, category: e.target.value }) }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Name'
              onChange={(e) => { setPetInfo({ ...petInfos, name: e.target.value }) }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>URL:</Form.Label>
              <Form.Control type='text' placeholder='url...' 
              onChange={(e) => { setPetInfo({ ...petInfos, photoUrls:[ e.target.value] }) }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Status</Form.Label>
              <Form.Control type='text' placeholder='status'
               onChange={(e) => { setPetInfo({ ...petInfos, status: e.target.value }) }}
              />
            </Form.Group>
            <Button onClick={(e)=>{handleSubmit(e)}} variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        
        </Col>
        <Col md={8}>
          <img width="100%" src='https://petsrus.com.au/uploads/images/_1500x1120_fit_center-center_70_none/pets-in-park-2.jpg'></img>
        </Col>
      </Row>
    </Container>
  )
}
