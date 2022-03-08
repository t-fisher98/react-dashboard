import React from 'react'

import { signOut } from 'firebase/auth'
import { auth } from 'libs/firebase';
import { Button } from 'ui/buttons';
import { SideBarStyles } from './styles'

function SideBar(props) {

  function onLogoutRequest(e){
    // returns a promise, but also can just be called as a method
    signOut(auth)
  }

  return (
    <SideBarStyles>
      <header>
        <h1>SideBar</h1>
      </header>
      <div className="content">
        <Button onClick={onLogoutRequest}>Log Out</Button>
      </div>
    </SideBarStyles>
  )
}

export default SideBar