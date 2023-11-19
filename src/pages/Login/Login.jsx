import "./Login.style.css"
// import styles from "./Testing.module.css"

import * as React from "react"
import Button from "../../components/Elements/button/Button"
import EmpathiCare from "../../assets/emphatiCare.jpg"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPass, setShowPass] = React.useState(false)
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
        <img src={EmpathiCare} alt="Login" className="logo" />
        <h2 className="textAdmin">
          Masuk Admin <br /> EmphatiCare
        </h2>
        {/* <p className={styles.test}>Testing using Modules</p> */}
        <form className="login-form-container">
          <div className="floating2">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder=""
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="floating2">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder=""
            />
            <label htmlFor="password">Password</label>
            <span className="icon right">
              {showPass ? (
                <BsEyeSlash onClick={handleTogglePassword} />
              ) : (
                <BsEye onClick={handleTogglePassword} />
              )}
            </span>
          </div>

          <Link to="/forgot-password" className="text-end mt-1">
            Forgot Password?
          </Link>

          <Button
            type="submit"
            id="btn-submit"
            className="btn btn-primary w-100 fw-bold"
            text="Masuk"
            onClick={handleSubmit}
          />
          <p className="fw-bold text-center mt-3">
            Belum punya akun? <Link to="/register-admin">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
