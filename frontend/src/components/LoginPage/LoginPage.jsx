import { React, useState } from "react";
import "./loginpage.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../storeConfig/loggedUserSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const error = useSelector((state) => state.loggedUser.error);
  const idUser = useSelector((state) => state.loggedUser.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    dispatch(login(loginInfo));
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
                type="email"
                name="email"
                id="email"
                placeholder="email"
                onInput={(e) => {
                  setLoginInfo({ ...loginInfo, username: e.target.value });
                }}
              />
            </div>
            <div className="form-field d-flex  align-items-center">
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                onInput={(e) => {
                  setLoginInfo({ ...loginInfo, password: e.target.value });
                }}
              />
            </div>
            <span className="fas fa-key">{!!error && error}</span>
            <button type="button" className="btn mt-3" onClick={handleLogin}>
              Login
            </button>
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
