import React from 'react'
import logo from './navImages/logo.png'
import sidebar from './navImages/sidebar.png'
import close from './navImages/close.png'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export default function Nav({ size, setShow, searchTerm, searchHandler }) {
  const navigate = useNavigate()
  const userName = JSON.parse(localStorage.getItem('user'))

  const state = localStorage.getItem('loggedin') 
  const [isOpen, setIsOpen] = React.useState(false);

  function handlelogout() {
    const logout = localStorage.removeItem('loggedin')
    navigate('/SignIn')
  }

  function handlelogin(){
    navigate('/SignIn')
  }

  const inputEl = useRef('')

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value)
  }

  return (
    <nav className="nav">
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button
          className="sidebar_button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={sidebar} />
          <span className="close">{isOpen ? <img src={close} /> : 'menu'}</span>
        </button>
        <div className="right_nav">
          {state ? (
            <p className="username">Hello,{userName.name}</p>
          ) : (
            <p className="username">Hello,user</p>
          )}

          {state ? (
            <span className="cart" onClick={() => setShow(false)}>
              <i className="fas fa-cart-plus"></i>
              <sup className="size">{size}</sup>
            </span>
          ) : (
            <span className="cart" onClick={handlelogin}>
              <i className="fas fa-cart-plus"></i>
              <sup className="size">{size}</sup>
            </span>
          )}
          {state ? (
            <button onClick={handlelogout} className="logout">
              Log Out
            </button>
          ) : (
            <button onClick={handlelogin} className="logout">
              Log In
            </button>
          )}
        </div>
      </aside>
      <div className="logo" onClick={() => setShow(true)}>
        <img src={logo} alt="not found"></img>
      </div>
      <div className="search_box">
        <input
          ref={inputEl}
          className="search_container"
          type="text"
          placeholder="What item are you looking for?"
          value={searchTerm}
          onChange={getSearchTerm}
        ></input>
      </div>
    </nav>
  )
}









