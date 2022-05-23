import React from 'react';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Content />
       <Footer />
     </div>
    );
  }
}


export default App;
