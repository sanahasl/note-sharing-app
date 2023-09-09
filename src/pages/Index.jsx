import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

export default function Index() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <Link to="/class">
        <button>go to dashboard</button>
      </Link>
    </div>
  );
}
