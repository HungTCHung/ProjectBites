import React from "react";
import * as ReactDOM from "react-dom";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { useState } from "react";
import UploadImages from "./uploadFile";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Editor from "react-markdown-editor-lite";
import "./write.scss";
const mdParser = new MarkdownIt(/* Markdown-it options */);

const WritePost = (props) => {
  let [postContent, setPostContent] = useState("");
  let [rawPostContent, setRawPostContent] = useState("");

  let handleEditorChange = ({ html, text }) => {
    console.log("handleEditorChange", html, text);
  };
  let views = {
    html: true,
    md: true,
  };
  let canviews = {
    md: true,
    html: true,
  };
  // let handleChangeFile = (e) => {
  //   // console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };
  return (
    <>
      <div className="container">
        <div>viet bai di</div>
        <div className="content">
          <div className="content-left">
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(html) => mdParser.render(html)}
              renderMd={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
              canView={canviews}
              view={views}
            />
          </div>
          <div className="content-right">
            do sth
            <UploadImages />
          </div>
        </div>
      </div>
    </>
  );
};
export default WritePost;
