import React, { useState } from "react";
export default function Form(props) {
  const [text, setText] = useState("");
  let handleonchange = (event) => {
    setText(event.target.value);
  };
  let handleonclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  let handleonlower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  let handelonclear = () => {
    let newtext = "";
    setText(newtext);
  };
  let handleoncopy = async () => {
    var copyText = document.getElementById("editor");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    if (!navigator.clipboard) {
      var retVal = document.execCommand("copy");
      console.log("Copy to clipboard returns: " + retVal);
    } else {
      navigator.clipboard
        .writeText(copyText.value)
        .then(function () {
          console.log("success");
        })
        .catch(function () {
          console.log("error");
        });
    }
  };

  let numtext = text.split(/\s+/).length - 1;

  return (
    <>
      <div id="textmain">
        <h1 id="texthead">write your text here</h1>
        <textarea
          name="editor"
          value={text}
          id="editor"
          className={`${props.mode}`}
          cols="30"
          onChange={handleonchange}
          rows="10"
        ></textarea>
        <div className="btncontainer">
          <button className={`btn ${props.showcolor}`} onClick={handleonclick}>
            uppercase
          </button>
          <button className={`btn ${props.showcolor}`} onClick={handleonlower}>
            lowercase
          </button>
          <button className={`btn ${props.showcolor}`} onClick={handelonclear}>
            cleartext
          </button>
          <button className={`btn ${props.showcolor}`} onClick={handleoncopy}>
            copytext
          </button>
        </div>
      </div>
      <div className={`infocontainer ${props.showcolor}`}>
        <div className="info">text length {text.length}</div>
        <div className="info">number of words {numtext}</div>
        <div className="info">{0.008 * numtext} minutes taken to read</div>
      </div>
    </>
  );
}
