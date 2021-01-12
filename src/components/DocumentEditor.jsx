import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class DocumentEditor extends Component {
  constructor(props) {
    super(props);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.state = {
      documentName: "Document 1",
      editorContent: '<span><p>Hello</p></span>',
      displayIsSaving: false
    };
  }

  handleEditorChange(editorContent) {
    this.setState({ editorContent })
  }

  render() {
    return (
      <Editor
        value={this.state.editorContent}
        disabled={true}
        init={{
          readonly: 1,
          height: 750,
          resize: false,
          readonly: true,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor |' +
            'alignleft aligncenter alignright alignjustify |' +
            'bullist numlist outdent indent |'
        }}
        setmode
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default DocumentEditor;