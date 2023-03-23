import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">

      <Input nome="Login" />
    </div>
  );
}


export function Input(props) {
  return (


    <div className="container">



<h1> {props.nome} </h1>

        <label for="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button   type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>

    
    </div>
  );
}
