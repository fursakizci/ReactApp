
import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'

export default function Dashboard() {
    return (
        <div>
          <Navi></Navi>
          <Categories></Categories>
          <ProductList></ProductList>
        </div>
    )
}
