import React from 'react'
import logo from './navImages/logo.png'
import './SignIn.css'
import { useNavigate, Link } from 'react-router-dom'

export default function NewAcc() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name:'',
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

  function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate('/SignIn')
  }

  return (
    <div className="signForm">
      <img className="image" src={logo}></img>
      <form className="forms" onSubmit={handleSubmit}>
        <h1 className="heading">Create Account</h1>
        <label className="labels" htmlFor="name">
          <b>Your name:</b>
        </label>
        <br></br>
        <input
          className="inputval"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>
        <br></br>
        <label className="labels" htmlFor="email">
          <b>Enter your Email Or Phone Number:</b>
        </label>
        <br></br>
        <input
          className="inputval"
          type="email, number"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.emailPhone}
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
          value={formData.password}
        ></input>
        <br></br>
        <button type="submit" className="newAcc2">
          Register
        </button>
      </form>
      <br></br>
      <p>Already have an account? <Link to="/SignIn">LogIn  Here</Link></p>
    </div>
  )
}