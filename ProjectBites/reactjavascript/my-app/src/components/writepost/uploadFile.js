import React, { useState, useContext, setState } from "react";
import { uploadImage, getImage } from "../../services/userService";
import { UserContext } from "../../context/userContext";
import userService from "../../services/userService";
import { forEach } from "lodash";
function UploadImages() {
  const { user } = useContext(UserContext);
  const [file, setFile] = useState();
  let galleryImage = [];
  let [dataImage, setDataImage] = useState(galleryImage);
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleUpload = async () => {
    const formdata = new FormData();
    let userId = user.account.userId;
    console.log("check userId", userId);
    formdata.append("image", file);
    formdata.append("userId", userId);
    let x = await uploadImage(formdata);
    console.log("check x", x);
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
      <button onClick={handleUpload}>Upload</button>
      <div>
        <button className="btn btn-primary" onClick={() => getImage123()}>
          get image
        </button>
      </div>
      {/* <div className="gallery">
        {item.dataImage.map((image) => (
          <img src={image} />
        ))}
      </div> */}
      {dataImage ? (
        dataImage.map((image) => (
          <img
            className="setting-img"
            src={`http://localhost:8080/images/` + image.image}
            alt="img-1"
          />
        ))
      ) : (
        <>sth</>
      )}
    </div>
  );
}

export default UploadImages;
