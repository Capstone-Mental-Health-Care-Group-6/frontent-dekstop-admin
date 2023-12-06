import { useEffect, useState } from "react";
import Layouts from "../../Layouts/Layouts";
import Button from "../../components/Elements/button/Button";
import Input from "../../components/Elements/input/Input";
import Label from "../../components/Elements/input/Label";
import "./EditProfile.styles.css";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const navigate = useNavigate();

  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const [errMsg, setErrMsg] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const [image, setImage] = useState(null);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  //state untuk mengecek apakah form valid
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // memantau perubahan pada errMsg dan memperbarui isFormValid
    const isFormValid = Object.values(errMsg).every((error) => !error);
    setIsFormValid(isFormValid);
  }, [errMsg]);

  const handleInputEditProfile = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value,
    });

    validateForm(e);
  };

  const validateForm = (e) => {
    const { name, value } = e.target;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (name === "name") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          name: "Nama wajib diisi",
        });
      } else {
        setErrMsg({
          ...errMsg,
          name: "",
        });
      }
    } else if (name === "email") {
      if (value === "") {
        setErrMsg({
          ...errMsg,
          email:
            "Pastikan menggunakan alamat email bisnis anda untuk masuk ke dalam sistem kami",
        });
      } else if (!emailRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          email: "Pastikan gunakan email yang valid",
        });
      } else {
        setErrMsg({
          ...errMsg,
          email: "",
        });
      }
    } else if (name === "oldPassword") {
      if (value === "" || !passwordRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          oldPassword:
            "Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus",
        });
      } else {
        setErrMsg({
          ...errMsg,
          oldPassword: "",
        });
      }
    } else {
      if (value === "" || !passwordRegex.test(value)) {
        setErrMsg({
          ...errMsg,
          newPassword:
            "Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus",
        });
      } else {
        setErrMsg({
          ...errMsg,
          newPassword: "",
        });
      }
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFileManager = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Changes saved!");

    if (isFormValid) {
      navigate("/dashboard-admin");
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "oldPassword") {
      setShowOldPassword(!showOldPassword);
    } else if (field === "newPassword") {
      setShowNewPassword(!showNewPassword);
    }
  };

  return (
    <Layouts titlePage={"Edit Profile"}>
      <div className="container">
        <form className="custom-form" onSubmit={handleSaveChanges}>
          <Label htmlFor="name">Nama</Label>
          <Input
            type="text"
            className={`form-control ${errMsg.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            placeholder="Admin"
            onChange={handleInputEditProfile}
            value={inputForm.name}
          />

          {errMsg.name && <div className="invalid-feedback">{errMsg.name}</div>}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            className={`form-control ${errMsg.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            placeholder="admin@gmail.com"
            onChange={handleInputEditProfile}
            value={inputForm.email}
          />
          {errMsg.email && (
            <div className="invalid-feedback">{errMsg.email}</div>
          )}

          <Label htmlFor="oldPassword">Kata Sandi Lama</Label>
          <div className="password-input-container">
            <Input
              type={showOldPassword ? "text" : "password"}
              className={`form-control ${
                errMsg.oldPassword ? "is-invalid" : ""
              } `}
              id="oldPassword"
              name="oldPassword"
              placeholder="12345678"
              onChange={handleInputEditProfile}
              value={inputForm.oldPassword}
            />
            <span
              className="btn btn-secondary eye-icon-btn"
              onClick={() => togglePasswordVisibility("oldPassword")}
              style={{
                background: "transparent",
                color: "#636363",
                border: "0px",
              }}
            >
              {showOldPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
            {errMsg.oldPassword && (
              <div className="invalid-feedback">{errMsg.oldPassword}</div>
            )}
          </div>

          <Label htmlFor="newPassword">Kata Sandi Baru</Label>
          <div className="password-input-container">
            <Input
              type={showNewPassword ? "text" : "password"}
              className={`form-control ${
                errMsg.newPassword ? "is-invalid" : ""
              } `}
              id="newPassword"
              name="newPassword"
              placeholder="abcdefghij"
              onChange={handleInputEditProfile}
              value={inputForm.newPassword}
            />
            <span
              className="btn btn-secondary mb-2 eye-icon-btn"
              onClick={() => togglePasswordVisibility("newPassword")}
              style={{
                background: "transparent",
                color: "#636363",
                border: "0px",
              }}
            >
              {showOldPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
            {errMsg.newPassword && (
              <div className="invalid-feedback">{errMsg.newPassword}</div>
            )}
          </div>

          <div className="mb-2">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="card-img-top"
                alt="Selected"
                style={{ width: "18rem", height: "18rem", objectFit: "cover" }}
              />
            ) : (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="../src/assets/Gambar.png"
                  className="card-img-top"
                  alt="Placeholder"
                />
              </div>
            )}
          </div>

          <input
            required
            type="file"
            className="d-none"
            id="imageInput"
            onChange={handleImageChange}
          />

          <Button
            type="button"
            className="btn btn-primary mb-2 w-25"
            id="btn-change"
            onClick={handleFileManager}
            text="Ubah Gambar"
          />

          <p>
            Recommended Image Size 100x100. Only Accept: jpg, png, jpeg. Size
            less than 2MB
          </p>

          <Button
            disabled={!isFormValid}
            type="submit"
            className="btn btn-primary w-50"
            id="btn-save"
            text="Simpan Perubahan"
          />
        </form>
      </div>
    </Layouts>
  );
};

export default EditProfile;
