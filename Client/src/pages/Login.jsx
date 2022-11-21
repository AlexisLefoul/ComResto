import { useState, useEffect } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

import API from "../app";

function Login() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  function connexion() {
    setState(true);
  }

  useEffect(() => {
    if (state) {
      navigate("/menu");
    }
  }, [state]);
  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div id="loginform">
        <h2 id="headerTitle">Connexion</h2>
        <div>
          <div className="row">
            <label>Identifiant</label>
            <input type="text" placeholder="Identifiant" />
          </div>
          <div className="row">
            <label>Mot de passe</label>
            <input type="text" placeholder="Mot de passe" />
          </div>
          <div id="button" className="row">
            <button onClick={connexion} style={{ padding: 0 }}>
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*const userInfo = localStorage.getItem('user-info');
    
async function signUp() 
{
    let item = {name, password, email};
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/register",{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "content-type": 'application/json',
                "Accept": 'application/json'}
        })
    result  = await result.json();
    console.warn('result', result);
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate("/add");
}

useEffect(() => {
    if (userInfo){
     navigate("/add")   
    }
},[])*/
