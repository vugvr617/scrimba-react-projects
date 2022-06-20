import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/Navbar/NavBar';
import MainContent from './Components/MainContent/MainContent'

function App() {
  const pageContent = (<div>
    <NavBar></NavBar>
    <MainContent></MainContent>
  </div>)

  ReactDOM.render(pageContent, document.getElementById('root'));
}

export default App;