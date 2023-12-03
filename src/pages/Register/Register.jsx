import React, { useEffect, useState } from "react"
import Input from "../../components/Elements/input/Input"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Button from "../../components/Elements/button/Button"
import EmpathiCare from "../../assets/emphatiCare.jpg"
import { BsEye, BsEyeSlash, BsExclamationCircle } from "react-icons/bs"
import "./Register.style.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
  confirmPasswordHandler,
  emailChecker,
  emailHandler,
  passwordChecker,
  passwordHandler,
  nameChecker,
} from "../../utils/handler/input"

const RegisterForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate name
    if (name === "" || !nameChecker(name)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        name: "Nama wajib diisi",
      }))
      return
    } else {
      setErrorMessages((prevState) => ({
        ...prevState,
        name: "",
      }))
    }

    // Validate email
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

    // Validate password
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

    // Proceed with login if validation is successful
    if (email && password) {
      navigate("/login-admin")
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Password:", password)
    }
  }

  const handleTogglePassword = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="content-center">
      <div className="container">
        <img src={EmpathiCare} alt="Register" className="center-image" />
        <h2 className="textAdmin">
          Daftar Admin <br /> EmphatiCare
        </h2>
        <form className="login-form-container">
          <div className="vstack gap-2">
            <div className="floating2">
              <div
                className={`icon-input 
                ${errorMessages.name !== "" ? "error" : ""}
              `}
              >
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Masukkan Nama"
                  className={`bg-transparent ${
                    errorMessages.name !== "" ? "error" : ""
                  }
              `}
                />
                <span className="icon-right">
                  {errorMessages.name !== "" && (
                    <BsExclamationCircle className="icon-error" />
                  )}
                </span>
              </div>
            </div>
            {errorMessages.name !== "" && <span>{errorMessages.name}</span>}
          </div>
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
              {/* <label htmlFor="password">Password</label> */}
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

          <Button
            type="submit"
            id="btn-daftar"
            className="btn btn-primary w-100"
            text="Daftar"
            onClick={handleSubmit}
          />

          <p>
            Sudah punya akun? <Link to="/login-admin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
