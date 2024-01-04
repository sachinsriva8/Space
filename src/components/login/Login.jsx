import { useState } from "react";
import Background from "../../assets/images/backGroundImage.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelSubmit = () => {
    localStorage.setItem("user", userName);
    if (userName.length && password.length) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            border: "1px solid white",
            backgroundColor: "lightgrey",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="user">Username</label>
            <input
              type="text"
              id="user"
              placeholder="Enter Username"
              style={{
                outline: "none",
                borderRadius: "5px",
                padding: "10px",
              }}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              style={{
                outline: "none",
                borderRadius: "5px",
                padding: "10px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "black",
                padding: "10px",
                color: "white",
                borderRadius: "10px",
              }}
              onClick={handelSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
