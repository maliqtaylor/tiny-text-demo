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
        apiKey='f9a3a5diqq6tdf5nkmcqqp4byzf722meh65tsj8jsf5hme9g'
        value={this.state.editorContent}
        init={{
          height: 700,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent |'
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default DocumentEditor;