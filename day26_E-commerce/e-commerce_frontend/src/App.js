import "./App.css";
import React from "react";
import ProductList from "./ProductList";
import NewProduct from "./NewProduct";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";
import MyUpload from "./MyUpload";
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/view-product/:id" element={<ViewProduct />} />
      <Route path="/myupload" element={<MyUpload />} />
    </Routes>
  );
}

export default App;






