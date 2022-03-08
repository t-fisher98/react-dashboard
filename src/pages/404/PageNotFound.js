import React, { useState } from "react";

import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

function PageNotFound(props) {
  const [isUser, setIsUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if(user){
      setIsUser(true);
    }else{
      setIsUser(false);
    }
  })
  
  return (
    <>
      <aside>
        <header>
          <h1>404 | Page Not Found</h1>
          {
            /* Conditional render with a ternary operator */
            isUser ? (
              <Link to="/dashboard">Back to Safety</Link>
            ) : (
              <Link to="/">Back to Login</Link>
            )
          }
        </header>
      </aside>
    </>
  );
}

export default PageNotFound;
