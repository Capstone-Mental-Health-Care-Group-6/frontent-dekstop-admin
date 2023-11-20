import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { FaCheckCircle } from "react-icons/fa"
import "./modalReset.style.css"

const ModalReset = ({ onClose }) => {
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
                Horray! Kata sandi berhasil dirubah
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
            Kata sandimu berhasil dirubah. Next time, inget-inget ya, kalo perlu
            dicatet!
          </p>
          <div className="modal-footer-container">
            <center>
              <Button variant="success" onClick={onClose}>
                Siap, salah 🙏
              </Button>
            </center>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalReset
