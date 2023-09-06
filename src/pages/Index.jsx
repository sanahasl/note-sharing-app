import "../App.css";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase";

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h2>REGISTER USER</h2>
      <input
        type="email"
        placeholder="name@email.com"
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />
      <button onClick={register}>create user</button>
      <h2>LOGIN USER</h2>
      <input
        type="email"
        placeholder="name@email.com"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button onClick={login}>login user</button>

      <h4> User Logged In</h4>
      {user?.email}
      <button onClick={logout}> Sign out</button>
      <Link to="/app">
        <button>SignIn</button>
      </Link>
    </div>
  );
}

export default SignIn;
