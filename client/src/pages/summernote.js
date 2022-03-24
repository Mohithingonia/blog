import React, { Component } from 'react'
import '../Css/Editor.css'
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class Summernote extends Component {
   
    state = {
        editorState:EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) =>{
        this.setState({
            editorState,
        })
    }


  render() {
      const {editorState} = this.state;

    return (
        <>
        <div className='myWay'>
          <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>
      </div>
        </>
      
    )
  }
}
