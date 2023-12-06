import "./ForgetPassword.style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Button from "../../components/Elements/button/Button";
import CustomModal from "../../components/Fragments/modalLogin/modalLogin";
import EmpathiCare from "../../assets/emphatiCare.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ForgotPw = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async () => {
    try {
      setIsEmailSent(true);
      setIsEmailVerified(true);
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
      // navigate('/ModalLogin');
    } catch (error) {
      console.error("Gagal mengirim email reset:", error);
    }
  };

  return (
    <div className="content-center">
      <div className="container">
        <img src={EmpathiCare} alt="Login" className="center-image" />
        <h2 className="textAdmin"> Kesulitan Login?</h2>
        <p className="textEmail">
          Masukkan email yang terkait dengan akun Anda untuk mengubah kata sandi
          baru.
        </p>
        <form className="login-form-container">
          <div className="floating">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Masukkan Email"
            />
            <span className="icon left">
              <MdOutlineEmail />
            </span>
          </div>
          <Button
            type="button"
            id="btn-submit"
            className={`btn btn-secondary w-100 fw-bold ${
              email ? "bg-primary" : "disabled bg-gray-300"
            }`}
            text="Kirim link verifikasi"
            onClick={handleForgotPassword}
            disabled={!email}
          />
        </form>
      </div>

      {isEmailSent && isModalOpen && (
        <CustomModal
          title="Email Terkirim"
          email={email}
          btnSuccess="Oke"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ForgotPw;
