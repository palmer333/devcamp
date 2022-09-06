import './App.css';
import { Routes, Route, } from "react-router-dom";
import Layouts from './component/Layout';
import Dashboard from './component/Dashboard';
import WarehouseManagement  from './component/Warehouse_Management';
import StockManagement from './component/Stock_Management';
import { CurrencyContext } from './component/CurrencyContext';
import Profile from './component/Profile';
import "antd/dist/antd.min.css";

const token = localStorage.getItem('token') || null;


function App() {
  return (
    <><h1>Test</h1>
      <CurrencyContext.Provider value={token}> 
            <Routes>
                  <Route path="/" element={<Layouts />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/Stock_Management" element={<StockManagement />} />
                  <Route path="/Warehouse_Management" element={<WarehouseManagement />} />
                  <Route path="/profile" element={<Profile />} />
                  </Route>
            </Routes>
      </CurrencyContext.Provider>
      </>
  );
}

export default App;