import React from 'react';
import DocumentEditor from './components/DocumentEditor'
import './App.css'

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log(e.target)
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    return (
      <div className='edit-box'>
        <div>
          <h1>Chapter 1</h1>
        </div>
        <div>
          <DocumentEditor />
        </div>
      </div>
    );
  }
}

export default App;
