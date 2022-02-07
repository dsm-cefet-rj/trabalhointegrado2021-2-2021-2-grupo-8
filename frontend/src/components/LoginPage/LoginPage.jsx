import React from "react";
import "./loginpage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LoginPage() {
  const error = useSelector((state) => state.loggedUser.error);

  let loginInfo = {
    login: "",
    password: "",
  };

  return (
    <div className="corpo">
      <header className="container cabecalho">
        <h1 className="app-name">Project Simple</h1>
      </header>
      <main className="container">
        <div className="wrapper">
          <div className="text-center mt-4 name"> Login </div>
          <form className="p-3 mt-3 d-flex flex-column align-items-center">
            <div className="form-field d-flex align-items-center">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                onChange={(e) => {
                  loginInfo.login = e.target.value;
                  console.log(loginInfo);
                }}
              />
            </div>
            <div className="form-field d-flex  align-items-center">
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                onChange={(e) => {
                  loginInfo.password = e.target.value;
                  console.log(loginInfo);
                }}
              />
            </div>
            <span className="fas fa-key">{!!error && error}</span>
            <Link className="w-100 d-flex justify-content-center" to="/minhasEquipes">
              <button className="btn mt-3">Login</button>
            </Link>
          </form>
          <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
          </div>
        </div>
      </main>
    </div>
  );
}
export default LoginPage;
