import React from "react"
import logo from "./navImages/logo.png"
import cart from "./navImages/cart.png"
import search from "./navImages/search.png"
import "./Nav.css"
import { useNavigate } from "react-router-dom"

export default function Nav()
{
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    function handlelogout(){
      const logout = localStorage.removeItem("loggedin");
      navigate('/SignIn')
    }

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="not found"></img>
      </div>
      <div className="search_box">
        <input
          className="search_container"
          type="text"
          placeholder="What item are you looking for?"
        ></input>
        <img src={search} alt="not found"></img>
      </div>
      <div className="right_nav">
        <p className="username">
          Hello,{userName.name}
        </p>
        <button className="cart">
          <img src={cart} alt="not found"></img>
        </button>
        <button onClick = {handlelogout} className="logout">Log Out</button>
      </div>
    </div>
  )
}