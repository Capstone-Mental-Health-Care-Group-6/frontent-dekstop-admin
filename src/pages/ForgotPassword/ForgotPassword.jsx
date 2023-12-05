import "./ForgetPassword.style.css"
import { Link } from "react-router-dom"
import * as React from "react"
import Button from "../../components/Elements/button/Button"
import CustomModal from "../../components/Fragments/modalLogin/modalLogin"
import EmpathiCare from "../../assets/emphatiCare.jpg"
import { MdOutlineEmail } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const ForgotPw = () => {
  const [email, setEmail] = React.useState("")
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const [isEmailVerified, setIsEmailVerified] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleForgotPassword = async () => {
    try {
      setIsEmailSent(true)
      setIsEmailVerified(true)
      setTimeout(() => {
        setIsModalOpen(true)
      }, 1000)
      // navigate('/ModalLogin');
    } catch (error) {
      console.error("Gagal mengirim email reset:", error)
    }
  }

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
            {/* <label htmlFor="email">Email</label> */}
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
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">Atau</p>
          </div>
          <p className="text-center fw-bold mx-3 mb-0 text-muted">
            <span className="akun">Buat Akun Baru </span>
          </p>
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
  )
}

export default ForgotPw
