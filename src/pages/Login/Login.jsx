// LoginForm.jsx
import React, { useState } from "react"
import Input from "../../components/Elements/input/Input"
import Label from "../../components/Elements/input/Label"
import Button from "../../components/Elements/button/Button"
import EmpathiCare from "../../assets/emphatiCare.jpg"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import "./Login.style.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
    console.log("Email:", email)
    console.log("Password:", password)
  }

  const handleTogglePassword = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="content-center">
      <div className="container">
        <img src={EmpathiCare} alt="Login" className="center-image" />
        <h2 className="textAdmin">
          Masuk Admin <br /> EmphatiCare
        </h2>
        <form className="login-form-container">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="position-relative">
            <Input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="button"
              className="btn-float"
              text={showPass ? <BsEyeSlash /> : <BsEye />}
              onClick={handleTogglePassword}
            />
          </div>

          <a className="text-end mt-1" href="#">
            Forgot Password?
          </a>

          <Button
            type="submit"
            id="btn-submit"
            className="btn btn-primary w-100"
            text="Masuk"
            onClick={handleSubmit}
          />

          <p>
            Belum punya akun? <Link to="/register-admin">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
