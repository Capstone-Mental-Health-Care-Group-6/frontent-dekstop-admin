import "./Login.style.css"
import React, { useState, useEffect } from "react"
// import * as React from "react"
import Button from "../../components/Elements/button/Button"
import EmpathiCare from "../../assets/emphatiCare.jpg"
import { BsEye, BsEyeSlash, BsExclamationCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import {
  confirmPasswordHandler,
  emailChecker,
  emailHandler,
  passwordChecker,
  passwordHandler,
} from "../../utils/handler/input"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    emailHandler(e.target.value, setErrorMessages)
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    passwordHandler(e.target.value, setErrorMessages)
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!emailChecker(email)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        email:
          "Pastikan menggunakan alamat email bisnis anda untuk masuk ke dalam sistem kami",
      }))
      return
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        email: "",
      }))
    }

    if (!passwordChecker(password)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "Password minimal 8 karakter",
      }))
      return
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "",
      }))
    }

    if (email && password) {
      navigate("/dashboard-admin")
      console.log("Email:", email)
      console.log("Password:", password)
    }
  }

  const handleTogglePassword = () => {
    setShowPass(!showPass)
  }

  useEffect(() => {
    setIsSubmitButtonDisabled(!(email.trim() !== "" && password.trim() !== ""))
  }, [email, password])

  return (
    <div className="content-center">
      <div className="container">
        <img src={EmpathiCare} alt="Login" className="logo" />
        <h2 className="textAdmin">
          Masuk Admin <br /> EmphatiCare
        </h2>

        <form className="login-form-container">
          <div className="vstack gap-2">
            <div className="floating2">
              <div
                className={`icon-input 
                ${errorMessages.email !== "" ? "error" : ""}
              `}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Masukkan Email"
                  className={`bg-transparent ${
                    errorMessages.email !== "" ? "error" : ""
                  }
              `}
                />
                <span className="icon-right">
                  {errorMessages.email !== "" && (
                    <BsExclamationCircle className="icon-error" />
                  )}
                </span>
              </div>
            </div>
            {errorMessages.email !== "" && <span>{errorMessages.email}</span>}
          </div>
          <div className="vstack gap-2">
            <div className="floating2">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder=" Masukkan Kata Sandi"
                className={`bg-transparent ${
                  errorMessages.password !== "" ? "error" : ""
                }`}
              />
              <span className="icon-right">
                {errorMessages.password !== "" && (
                  <BsExclamationCircle className="icon-error" />
                )}
                {showPass ? (
                  <BsEyeSlash onClick={handleTogglePassword} />
                ) : (
                  <BsEye onClick={handleTogglePassword} />
                )}
              </span>
            </div>
            {errorMessages.password !== "" && (
              <span>{errorMessages.password}</span>
            )}
          </div>

          <Link to="/forgot-password" className="text-end mt-1 forgot-password">
            Forgot Password?
          </Link>

          <Button
            type="submit"
            id="btn-submit"
            className={`btn btn-secondary w-100 fw-bold ${
              isSubmitButtonDisabled ? "disabled" : ""
            }`}
            text="Masuk"
            onClick={handleSubmit}
            disabled={isSubmitButtonDisabled}
          />
          <p className="fw-bold text-center mt-3">
            Belum punya akun? <span className="sign">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
