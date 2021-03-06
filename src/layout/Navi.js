import React,{useState} from 'react'
import CartSummary from './CartSummary'
import {Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignOut'
import { useHistory } from 'react-router-dom'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  
  return (
        <div>
      <Menu inverted fixed ="top" size='large'>
        <Container>
          <Menu.Item name='home'/>
          <Menu.Item name='messages'/>
        
          <Menu.Menu position='right'>
            <CartSummary>
            </CartSummary>
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
          
          </Menu.Menu>

        </Container>
      </Menu>
        </div>
    )
}
