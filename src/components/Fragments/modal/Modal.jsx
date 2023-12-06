import React from "react";

const Modal = ({ title, textBody, btnSucces }) => {
  return (
    <div>
      <div className="modal fade" tabIndex={-"1"} id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header border-0">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-secondary">
              <p>{textBody}</p>
            </div>
            <div className="modal-footer  border-0">
              <button
                type="button"
                className="btn text-primary fw-semibold py-2 px-4"
                data-bs-toggle="button"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary fw-semibold py-2 px-4"
              >
                {btnSucces}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </div>
  );
};

export default Modal;
