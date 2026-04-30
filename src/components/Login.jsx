import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDetails from "./LoginData";
import Header from "./Header";
import Footer from "./Footer";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const matchedUser = LoginDetails.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      alert("Login Successful!");
      setUser(matchedUser);
      navigate("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

    return (
        <>
        
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <h3 className="text-center mb-4 text-primary fw-bold">
                Login to Your Account
              </h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-warning w-100 fw-semibold">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
        </>
    )
}

export default Login;