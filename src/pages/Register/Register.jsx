import React, { useState } from "react";
import Input from "../../components/Elements/input/Input";
import Label from "../../components/Elements/input/Label";
import Button from "../../components/Elements/button/Button";
import EmpathiCare from "../../assets/emphatiCare.jpg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./Register.style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleTogglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="content-center">
      <div className="container">
        <img src={EmpathiCare} alt="Register" className="center-image" />
        <h2 className="textAdmin">
          Daftar Admin <br /> EmphatiCare
        </h2>
        <form className="login-form-container">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Nama"
            value={name}
            onChange={handleNameChange}
          />
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

          <Button
            type="submit"
            id="btn-daftar"
            className="btn btn-primary w-100"
            text="Daftar"
            onClick={handleSubmit}
          />

          <p>
            Sudah punya akun? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
