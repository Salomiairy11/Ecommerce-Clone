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

  const [isOpen, setIsOpen] = React.useState(false)

  function handlelogout() {
    const logout = localStorage.removeItem('loggedin')
    navigate('/SignIn')
  }

  function handlelogin() {
    navigate('/SignIn')
  }

  const inputEl = useRef('')

  const getSearchTerm = () => {
    searchHandler(inputEl.current.value)
  }
  return (
    <nav className="nav">
      <div className="main_nav">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => setShow(true)}
        />
        <input
          ref={inputEl}
          className="search_container"
          type="text"
          placeholder="What item are you looking for?"
          value={searchTerm}
          onChange={getSearchTerm}
        />
        <button className="sidebar_toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '' : <img src={sidebar} alt="Menu" />}
        </button>
        <div className="bigscreen_nav">
            {state ? (
              <p className="bigs_name">Hello,{userName.name}</p>
            ) : (
              <p className="bigs_name">Hello,user</p>
            )}

            {state ? (
              <span className="bigs_cart" onClick={() => setShow(false)}>
                <i className="fas fa-cart-plus"></i>
                <sup className="bigs_size">{size}</sup>
              </span>
            ) : (
              <span className="bigs_cart" onClick={handlelogin}>
                <i className="fas fa-cart-plus"></i>
                <sup className="size">{size}</sup>
              </span>
            )}

            {state ? (
              <button onClick={handlelogout} className="bigs_logout">
                Log Out
              </button>
            ) : (
              <button onClick={handlelogin} className="bigs_logout">
                Log In
              </button>
            )}
        </div>

      </div>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close_button" onClick={() => setIsOpen(false)}>
          <img src={close} alt="Close" />
        </button>
        <div className="right_nav">
          <p className="username">Hello, {state ? userName.name : 'user'}</p>
          <span
            className="cart"
            onClick={() => (state ? setShow(false) : handlelogin())}
          >
            <i className="fas fa-cart-plus"></i>
            <sup className="size">{size}</sup>
          </span>
          {state ? (
            <button onClick={handlelogout} className="logout">
              Log Out
            </button>
          ) : (
            <button onClick={handlelogin} className="login">
              Log In
            </button>
          )}
        </div>
      </aside>
    </nav>
  )
}
