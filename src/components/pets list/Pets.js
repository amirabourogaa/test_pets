import React, { useEffect, useState } from 'react'
import {Table,Button,Container} from "react-bootstrap"
import Pagination from 'react-bootstrap/Pagination';
import {Link} from "react-router-dom"
import axios from "axios"
import "./Pets.css"
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


export default function Pets() {
    const [pets,setPets]= useState([])

    async function getData() {
        let res1 = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
        let json = await res1.json()
        setPets(json)
        console.log(json[0])
    
      }

      async function deletePet(idPet) {

        // let res2 = await fetch('https://petstore.swagger.io/v2/pet/' + idPet)
        // let json = await res2.json()
        // console.log(json)
        // window.location.href = "/pets"

        const headers = { 
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
      };
      axios.delete('https://petstore.swagger.io/v2/pet/' + idPet, { headers })
          .then(() =>console.log('Delete successful') );
    
      }
      useEffect(() => { getData() }, [])
  return (
    <div id="pets">
<Container>
<Button href='/addpets' variant="primary" size="lg" active>
      
          Add pet
      </Button>{' '}
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>
        {
            pets.map((elem,i)=>  <tr key={i}>
            <td>{elem.id}</td>
            <td>{elem.name}</td>
            <td>{elem.status}</td>
            <td> <Button onClick={()=>{deletePet(elem.id)}} variant="danger">Delete</Button></td>
            <td> <Link to={`/edit/${elem.id}`}> <Button variant="info">Edit</Button></Link> </td>
            
          </tr>)
        }
      
   
       
      </tbody>
    </Table>



    <Pagination size="lg">{items}</Pagination>
    </Container>
    </div>
  )
}
