import React, { useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'libs/firebase';
import { AppBar } from 'components/appbar';
import { SideBar } from 'components/sidebar'
import { DashboardPageStyles } from './styles'

import App from 'App';

function DashboardPage(props) {
  const [isUser, setIsUser] = useState(false);
  const navigator = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if(user){
      setIsUser(true);
    }else{
      setIsUser(false)
      // redirect to login page
      navigator('/')
    }
  })

  if(isUser){
    return (
      <>
        <AppBar/>
        <DashboardPageStyles>
          <SideBar/>
        </DashboardPageStyles>
      </>
    );
  }else{
    return null;
  }
}

export default DashboardPage;