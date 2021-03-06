import React, {useState,useEffect} from 'react'
import {Table,Menu,Icon} from 'semantic-ui-react'
import ProductService from '../services/ProductService'
import { Link } from 'react-router-dom'

export default function ProductList() {

  //distructer islemi ve hook ifadesi
  const [products, setProducts] = useState([])
  //lifecycle hook

  useEffect(()=>{
    //component yuklendigindee calisan komut
    let productService = new ProductService()
    productService.getProducts().then(result=> setProducts(result.data))
  },[])

  

    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>UserId</Table.HeaderCell>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {products.map(product => (
        <Table.Row key={product.id}>
          <Table.Cell>{product.userId}</Table.Cell>
          <Table.Cell><Link to={`/products/${product.id}`}>{product.id}</Link></Table.Cell>
          <Table.Cell>{product.title}</Table.Cell>
      </Table.Row>
      ))
      }
      
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}
