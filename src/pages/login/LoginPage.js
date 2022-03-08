import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiMessageSquareError } from 'react-icons/bi'

import { auth } from 'libs/firebase'
import { Input, Label } from 'ui/forms'
import { SubmitButton } from 'ui/buttons';
import { LoginFormStyles, FormControl } from "./styles";

function LoginPage(props) {
  // useNavigate() is a react-router-dom hook that allows you to navigate to a desired path.
  const navigator = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (error) =>
    toast.error(error.code, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <BiMessageSquareError/>
    });

    // LEFT OFF AT 1:02:57 IN RECORDING

  function onLoginRequest(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // move to dashboard page
      // useNavigate() - Hook on the react-router
      navigator('dashboard')
    })
    .catch(error =>{
      notify(error)
    })
  }

  return (
    <LoginFormStyles>
      <ToastContainer/>
      <header>
        <h2>Welcome - Please Sign In</h2>
      </header>
      <form onSubmit={onLoginRequest}>
        <FormControl>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="Janedoe@home.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <SubmitButton
            type="submit"
            padding="0.8rem 0"
            margin="1.5rem 0 0 0"
            bgcolor="tomato"
          >
            Sign In To Dashboard
          </SubmitButton>
        </FormControl>
      </form>
    </LoginFormStyles>
  );
}

export default LoginPage;
