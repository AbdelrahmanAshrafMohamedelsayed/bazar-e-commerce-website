import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import { avatarImage2 } from "../../assets";
import { UploadImage } from "./ImageUpload.styled";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImageUpload = ({ onChangeImage }) => {
  const uploadref = useRef(null);
  const [image, setImage] = useState(null);
  const handleUpload = (e) => {
    e.preventDefault();
    uploadref.current.click();
  };
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      onChangeImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  return (
    <UploadImage>
      <Avatar
        alt="Remy Sharp"
        src={image ? image.preview : avatarImage2}
        sx={{
          width: "100%",
          height: "70%",
          objectFit: "unset",
        }}
      />
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
        ref={uploadref}
      />
      <span onClick={handleUpload}>
        <CameraAltIcon />
      </span>
    </UploadImage>
  );
};

export default ImageUpload;
