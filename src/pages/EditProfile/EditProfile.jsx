import { useState } from "react";
import Layouts from "../../Layouts/Layouts";
import Button from "../../components/Elements/button/Button";
import Input from "../../components/Elements/input/Input";
import Label from "../../components/Elements/input/Label";
import "./EditProfile.styles.css"

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFileManager = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleSaveChanges = () => {
    console.log("Changes saved!");
  };

  return (
    <Layouts titlePage={"Edit Profile"}>
      <div className="container">
        <form className="custom-form">
          <Label htmlFor="name">Nama</Label>
          <Input
            type="text"
            className="form-control mb-2"
            id="name"
            name="name"
            placeholder="Admin"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            className="form-control mb-2"
            id="email"
            name="email"
            placeholder="admin@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Label htmlFor="oldPassword">Kata Sandi Lama</Label>
          <Input
            type="password"
            className="form-control mb-2"
            id="oldPassword"
            name="oldPassword"
            placeholder="12345678"
            onChange={(e) => setOldPassword(e.target.value)}
            value={oldPassword}
          />

          <Label htmlFor="newPassword">Kata Sandi Baru</Label>
          <Input
            type="password"
            className="form-control mb-2"
            id="newPassword"
            name="newPassword"
            placeholder="abcdefghij"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />

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
            type="file"
            className="d-none"
            id="imageInput"
            onChange={handleImageChange}
          />

          <Button
            type="button"
            className="btn btn-primary mb-2"
            id="btn-change"
            onClick={handleFileManager}
            text="Ubah Gambar"
          />

          <p>
            Recommended Image Size 100x100. Only Accept: jpg, png, jpeg. Size
            less than 2MB
          </p>

          <Button
            type="button"
            className="btn btn-primary"
            id="btn-save"
            onClick={handleSaveChanges}
            text="Simpan Perubahan"
          />
        </form>
      </div>
    </Layouts>
  )
}

export default EditProfile
