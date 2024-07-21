import React, { useState } from 'react';

export default function Textfrom(props) {

const handleUpClick = ()=>{
  // console.log("upper case was clicked" + text)
  let newText=text.toUpperCase();
  setText(newText)
}

const handleLoClick = ()=>{
  // console.log("upper case was clicked" + text)
  let newText=text.toLowerCase();
  setText(newText)
}

const handleReClick = ()=>{
  // console.log("upper case was clicked" + text)
  let newText=text.split('').reverse().join('');
  setText(newText)
}


const handleOnchange = (event)=>{
  console.log("click on change")
  setText(event.target.value)
}



  const [text, setText] = useState("enter your text");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} rows="9"></textarea>
      </div>
      <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1 my-2" onClick={handleReClick}>Reverse your text</button>
    </div>
    <div className="container my-3">
      <h3>Your Text Summary</h3>
      <p><b>{text.split(" ").length} word and {text.length} characters</b></p>
    </div>
    </>
  );
}
