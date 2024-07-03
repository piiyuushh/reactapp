import React, {useState} from 'react'

export default function TextForm(props) {
    
    function handleClicks(){
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleLowClicks(){
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    function copyText(){
        console.log("Text copied");
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    function removeExtraSpaces(){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    function clearText(){
        let clearedText = text;
        setText("");
        console.log("Text cleared");
    }
    const handleClear = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>Word editor</h1>
        <div classname="mb-3">
        <textarea classname="form-control" id="exampleFormControlTextarea1" rows="8" cols="50" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClicks}>Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClicks}>Convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={clearText} value={text}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={copyText} value={text}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces} value={text}>Remove extra spaces</button>
    </div>

    <div className="container my-2"></div>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes will require to read this entire sentence.</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </>
  )
}
