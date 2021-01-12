import React from 'react';
import DocumentEditor from './components/DocumentEditor'
import { Container} from 'semantic-ui-react'
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
      <Container text>
        <DocumentEditor />
      </Container>
    );
  }
}

export default App;
