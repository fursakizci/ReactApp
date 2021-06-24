import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/ProductService';


export default function ProductDetail() {

    let {id} =  useParams();

    const [product, setProduct] = useState({})
    //lifecycle hook
  
    useEffect(()=>{
      //component yuklendigindee calisan komut
      let productService = new ProductService()
      productService.getProductById(id).then(result=> setProduct(result.data))
    },[])

    return (
<div>
  <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>{product.id}</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

</div>
    )
}
