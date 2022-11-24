import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";

import bcrypt from "bcryptjs";
import API from "../api";
import useAuth from "../helpers/setAuthToken";

function Login() {
  const { setLoginToken } = useAuth();
  const [formIncorrect, setFormIncorrect] = useState(false);

  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const loginAction = async () => {
    const token = bcrypt.hashSync(
      password + identifiant,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );
    setLoginToken(token);
    return token;
  };

  async function handleSubmit() {
    const token = await loginAction(identifiant, password);
    if (identifiant && password) {
      const response = await API.get("user/" + identifiant);
      setUser(response.data);

      if (bcrypt.compareSync(password, user.password)) {
        localStorage.setItem("user-info", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        if (user.role === "client") {
          window.location.href = "cartemenu";
        } else if (user.role === "admin") {
          window.location.href = "menu";
        }
      }
    } else {
      setFormIncorrect(true);
    }
  }

  return (
    <div id="login" className="login">
      <div className="login-logo">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div id="loginform">
        <h2 id="headerTitle">Connexion</h2>
        {formIncorrect ? (
          <h3 className="errorForm">Identifiant ou mot de passe incorrect !</h3>
        ) : null}
        <div>
          <div className="row">
            <label>Identifiant</label>
            <input
              type="text"
              placeholder="Identifiant"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
            />
          </div>
          <div className="row">
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="button" className="row">
            {!identifiant || !password ? (
              <button disabled style={{ padding: 0 }}>
                Connexion
              </button>
            ) : (
              <button onClick={handleSubmit} style={{ padding: 0 }}>
                Connexion
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
