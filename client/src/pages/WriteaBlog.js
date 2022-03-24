import "../Css/Editor.css"
import React, { useState } from "react"
import Summernote from "./summernote"

export default function WriteaBlog() {

    const [text, setText] = useState("")
    
  return (
    <>
    <div className="myWay1" >
         <div className="blog">
        <textarea type="text" className="title" placeholder="Blog title..."></textarea>
        {/* <textarea class ="article" id="summernote"></textarea> */}
        <Summernote />
        </div>

    <div className="blog-options">
        <button className="btn-dark  publish-btn">Publish</button>
        {/* <input type="file" accept="image/*" id="image-upload" hidden /> */}
    </div>
        
        </div>
    </>
  )
}
