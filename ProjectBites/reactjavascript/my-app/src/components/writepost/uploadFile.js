import React, { useState, useContext, useEffect } from "react";
import { uploadImage, getImage } from "../../services/userService";
import { UserContext } from "../../context/userContext";
import userService from "../../services/userService";
import { forEach } from "lodash";

import "./uploadFile.scss";
function UploadImages(props) {
  const htmlContent = props.htmlContent;
  const textContent = props.textContent;
  console.log("check123", htmlContent, textContent);
  const { user } = useContext(UserContext);
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  let previewImage = [];
  let galleryImage = [];
  let [dataImage, setDataImage] = useState(galleryImage);
  const handleFile = async (e) => {
    // previewImage.push(e.target.files[0].name);

    const selectedFile = e.target.files[0];
    const newFiles = [...files, selectedFile];
    setFiles(newFiles);
    console.log("check files", files);
    const newImages = [...images];
    newImages.push(URL.createObjectURL(e.target.files[0]));
    setImages(newImages);
  };

  const handleUpload = async () => {
    const formdata = new FormData();
    let userId = user.account.userId;
    console.log("check userId", userId);

    files.forEach((file) => {
      formdata.append("image", file);
    });
    console.log("check text content", textContent, htmlContent);
    formdata.append("userId", userId);
    formdata.append("textContent", textContent);
    formdata.append("htmlContent", htmlContent);
    console.log("check form data", formdata);
    let res = await uploadImage(formdata);
    // if (res.EC === 0) {
    //   //redirect page va fetch lai data from user
    // }
  };
  const getImage123 = async () => {
    let data = await getImage();

    let x = data.data.DT.results;

    setDataImage(x);
    console.log(dataImage);
    for (let i = 0; i < x.length; i++) {
      galleryImage[i] = x[i];
    }
    setDataImage(galleryImage);
    // let dataGetImage = data.data.DT.results;
    // console.log("data.data.DT.results", dataGetImage);
    // if (data.data.DT.results) {
    //   // Update state with fetched data block
    //   setDataImage(dataGetImage);

    //   console.log("check dataImage", dataImage);
    // }
    // for (let i = 0; i < dataGetImage.length; i++) {
    //   console.log("check data one by oone", dataGetImage[i]);
    //   setDataImage([dataGetImage[i]]);
    // }
    // console.log("check dataImage123", dataImage);

    // if (data.data.DT.results) {
    //   setDataImage([
    //     ...dataImage,
    //     { id: nextId++, ...data.data.DT.results.map((item) => item.dataImage) },
    //   ]);
    //   console.log("check da", dataImage);
    // }

    // if (dataImage[0].image) {
    //   console.log("check dataiamge", dataImage[0].image);
    // }
    console.log(dataImage);
  };
  return (
    <div className="container">
      <input type="file" onChange={handleFile} />
      <div className="preview-img">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image${index}`} />
        ))}
      </div>

      <button onClick={handleUpload} className="btn btn-primary">
        create post
      </button>
      <div>
        <button className="btn btn-primary" onClick={() => getImage123()}>
          get image
        </button>
      </div>

      {dataImage ? (
        dataImage.map((image) => (
          <div className="gallery">
            <img
              className="setting-img"
              src={`http://localhost:8080/images/` + image.image}
              alt="img"
            />
          </div>
        ))
      ) : (
        <>
          <div>There is wrong thereby is'nt something to display</div>
        </>
      )}
    </div>
  );
}

export default UploadImages;
