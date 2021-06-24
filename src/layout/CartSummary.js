import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>Acer</Dropdown.Item>
              <Dropdown.Item>Asus</Dropdown.Item>
              <Dropdown.Item>Apple</Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item as={NavLink} to="/card">Sepete git</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
