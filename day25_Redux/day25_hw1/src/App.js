
import './App.css';
import { Routes, Route, } from "react-router-dom";
import ProductList from './routing/ProductList'
import Layouts from './routing/Layout'
import Profile from './routing/Profile'
import Cart from './routing/Cart'


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layouts />}>
      <Route index element={<ProductList/>}/>
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Cart" element={<Cart />} />
      </Route>
    
    </Routes>
  
  </>);
}

export default App;