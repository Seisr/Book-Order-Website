import { React, useState } from "react";
import "./Login.css";
import BookDataService from "../../services/BookDataService";

const loginFunction = async (data) => {
  const res = await BookDataService.logIn({
    username,
    password,
  });
  sessionStorage.setItem("accessToken", res.data.result.accessToken);
};

const Login = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const collapseLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(false);
  };
  const collapseSignup = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(false);
  };
  return (
    <div className="login-wrapper">
      <div className="login-main">
        <h2>Welcome to BaBook</h2>
        <div className="collapse-area">
          <button className="collapse-header" onClick={collapseLogin}>
            Sign In
          </button>
          {openLogin && (
            <div className="collapse-body">
              <div class="detailArea">
                {/* <form> */}
                <div class="form-login">
                  <label for="inputUsername">Username</label>
                  <input
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className="form-login">
                  <label for="inputPassword">Password</label>
                  <input
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                    }}
                  />
                </div>
                <div>
                  <div>
                    <button className="submit" onClick={() => loginFunction()}>
                      Continue
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="collapse-area">
          <button className="collapse-header" onClick={collapseSignup}>
            Sign Up
          </button>
          {openSignup && (
            <div className="collapse-body">
              <div class="detailArea">
                <form>
                  <div class="form-signup">
                    <label for="inputEmailSignup">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="form-signup">
                    <label for="inputUsernameSignup">Username</label>
                    <input
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      type="text"
                      value=""
                    />
                  </div>
                  <div class="form-signup">
                    <label for="inputPassword">Password</label>
                    <input
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                    />
                  </div>
                  <div>
                    <div>
                      <button className="submit">Continue</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Login;
