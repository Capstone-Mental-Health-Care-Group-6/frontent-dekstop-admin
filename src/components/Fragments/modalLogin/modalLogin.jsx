import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./ModalLogin.style.css"
import { FaCheckCircle } from "react-icons/fa"

const CustomModal = ({ title, email, btnSuccess, onClose }) => {
  return (
    <Modal show onHide={onClose} centered>
      <Modal.Body className="modal-content-container">
        <div>
          <div style={{ marginBottom: 64 }}>
            <center>
              <FaCheckCircle size={77} color="#29B753" />
            </center>
          </div>
          <div className="modal-header-container">
            <center>
              <h5
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#323232",
                }}
              >
                {title}
              </h5>
            </center>
          </div>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: 14,
              fontWeight: 400,
              color: "#636363",
              textAlign: "center",
            }}
          >
            Kami telah mengirimkan email ke{" "}
            <b style={{ color: "#323232" }}>{email}</b> beserta tautan link
            untuk mengatur ulang kata sandi baru.
          </p>
          <div className="modal-footer-container">
            <center>
              <Button variant="link" onClick={onClose}>
                {btnSuccess}
              </Button>
            </center>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
