import React from 'react'
import logo from './navImages/logo.png'
import './SignIn.css'
import { useNavigate, Link } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    setFormData((PreVal) => {
      return {
        ...PreVal,
        [event.target.name]: event.target.value,
      }
    })
  }

  function handleLogIn(event) {
    event.preventDefault()
    const loggeduser = JSON.parse(localStorage.getItem('user'))
    if (
      formData.email === loggeduser.email &&
      formData.password === loggeduser.password
    ) {
      navigate('/')
      //to keep the user logged in
      localStorage.setItem('loggedin', true)
    } else {
      alert('wrong Email or password')
    }
  }

  return (
    <div className="signForm">
      <img className="image" src={logo}></img>
      <form className="forms" onSubmit={handleLogIn}>
        <h1 className="heading">Log In</h1>
        <label className="labels" htmlFor="email">
          <b>Email Or Phone Number:</b>
        </label>
        <br></br>
        <input
          className="inputval"
          type="email, number"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <br></br>
        <label className="labels" htmlFor="password">
          <b>Password:</b>
        </label>
        <br></br>
        <input
          className="inputval"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          label="Password"
          value={formData.password}
        ></input>
        <div className="buttons">
          <button type="submit" className="sign_up">
            Log In
          </button>
        </div>
      </form>
      <br></br>
      <p>
        Do not have an account? <Link to="/NewAcc">Register Here</Link>
      </p>
    </div>
  )
}
