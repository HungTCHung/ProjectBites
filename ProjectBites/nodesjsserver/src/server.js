require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
// import connection from "./config/connectDB";
import connection from "./config/DB";
import configCors from "./config/cors";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

configCors(app);
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src/public"));
//
//config cookieParser
app.use(cookieParser());
//////

// connection();
// initWebRoutes(app);
initApiRoutes(app);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

app.post("/upload", upload.array("image"), async (req, res) => {
  console.log(req.files);
  // console.log(req.body.userId);
  const images = req.files;
  const userId = req.body.userId;

  const textContent = req.body.textContent;
  const htmlContent = req.body.htmlContent;
  // console.log(req.body);

  try {
    if (textContent && htmlContent) {
      connection.query(
        `
            INSERT INTO  Post_Content (postId, content,contentEditor, createdAt, updatedAt) VALUES (?, ?,?, NOW(), NOW())
            `,
        [userId, textContent, htmlContent] // Assuming 'filename' is the property containing the filename after multer upload
      );
    } else {
      res.json({
        EM: "Upload post failed",
        EC: -1,
        DT: {},
      });
    }
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        await insertImageIntoDatabase(userId, image);
      }
      res.json({
        EM: "Upload Post success",
        EC: 0,
        DT: {},
      });
    } else {
      connection.query(
        `
            INSERT INTO Image (postId, image, createdAt, updatedAt) VALUES (?, null, NOW(), NOW())
            `,
        [userId] // Assuming 'filename' is the property containing the filename after multer upload
      );
    }
  } catch (error) {
    console.log(error);
    res.json({
      EM: "Error from update image",
      EC: -1,
      DT: {},
    });
  }
});
const insertImageIntoDatabase = (userId, image) => {
  return new Promise((resolve, reject) => {
    // const imageName = null;
    connection.query(
      `
          INSERT INTO Image (postId, image, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())
          `,
      [userId, image.filename], // Assuming 'filename' is the property containing the filename after multer upload
      (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};

app.get("/get-image", (req, res) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT Image.image FROM (Image INNER JOIN User ON User.id=Image.postId) 
      `,
      // Pass parameters as an array
      (error, results, fields) => {
        // Corrected callback parameters
        let imageFromDb = results;
        if (error) {
          reject(
            res.json({
              EM: "Error form get image",
              EC: -1,
              DT: {},
            })
          );
        } else {
          resolve(
            res.json({
              EM: "get image success",
              EC: 0,
              DT: { results },
            })
          );
        }
        console.log("check result", results);
      }
    );
  });
});
app.listen(PORT, () => {
  console.log(">>>Backend is running on port  " + PORT);
});
app.use((req, res) => {
  return res.send("404 not found!");
});
