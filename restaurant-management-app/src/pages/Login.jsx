import {useState, useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {Login} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = () =>{
    const role = Login(email, password);

    if(!role){
      alert("Invalid credentials");
      return;
    }
    if(role === "admin") navigate("admin/dashboard");
    if(role === "customer") navigate("customer/dashboard");

    return (
      <div style={{padding: "20px"}}>
        <h2>Login Page</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    )

  }
}

export default Login;