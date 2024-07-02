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
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }))

    // Clear error message for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  function validateForm() {
    let valid = true
    let newErrors = {}

    if (!formData.email) {
      valid = false
      newErrors.email = 'Email is required'
    }

    if (!formData.password) {
      valid = false
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return valid
  }

  function handleLogIn(event) {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const loggeduser = JSON.parse(localStorage.getItem('user'))

    if (loggeduser) {
      if (
        formData.email === loggeduser.email &&
        formData.password === loggeduser.password
      ) {
        navigate('/')
        //to keep the user logged in
        localStorage.setItem('loggedin', true)
      } else {
        alert('Wrong email or password')
      }
    } else {
      alert('No user found. Please register first.')
    }
  }

  return (
    <div className="signForm">
      <img className="image" src={logo} alt="Logo"></img>
      <form className="forms" onSubmit={handleLogIn}>
        <h1 className="heading">Log In</h1>
        <label className="labels" htmlFor="email">
          <b>Email Or Phone Number:</b>
        </label>
        <br></br>
        <input
          className="inputval"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}
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
          value={formData.password}
        ></input>
        {errors.password && <p className="error">{errors.password}</p>}
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
