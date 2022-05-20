import React from 'react';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer'

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Content />
//     </div>
//   );
// }

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

console.log(Header);

export default App;
