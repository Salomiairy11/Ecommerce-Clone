import React from "react"
import logo from "./navImages/logo.png"
import search from "./navImages/search.png"
import "./Nav.css"
import { useNavigate } from "react-router-dom"

export default function Nav({size,setShow})
{

  const [searchTerm, setSearchTerm] = React.useState("");

    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    function handlelogout(){
      const logout = localStorage.removeItem("loggedin");
      navigate('/SignIn')
    }

  return (
    <div className="nav">
      <div className="logo" onClick={()=>setShow(true)}>
        <img src={logo} alt="not found"></img>
      </div>
      <div className="search_box">
        <input
          className="search_container"
          type="text"
          placeholder="What item are you looking for?"
          onChange={(event)=> 
            {setSearchTerm(event.target.value)
            }}
        ></input>
        <img src={search} alt="not found"></img>
      </div>
      <div className="right_nav">
        <p className="username">Hello,{userName.name}</p>
        <span className="cart" onClick={()=>setShow(false)}><i className="fas fa-cart-plus"></i><sup className="size">{size}</sup></span>
        <button onClick={handlelogout} className="logout">
          Log Out
        </button>
      </div>
    </div>
  )
}