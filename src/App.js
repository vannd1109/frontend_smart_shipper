import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Food from "./pages/Food";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import FoodDetail from "./pages/FoodDetail";
import Admin from "./resources/admin";

function App() {
  const [isAdmin, setAdmin] = useState(false);
  let location = useLocation();

  useEffect(() => {
      setAdmin(Boolean (location.pathname.search("/admin")));
  }, [location.pathname]);

  return (
    <div className="App" style={{overflow: 'hidden'}}>
      {isAdmin && (
        <NavBar />
      )}
      <div style={{marginTop: isAdmin ? '80px' : '0px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cua-hang" element={<Restaurant />} />
          <Route path="/do-an" element={<Food />} />
          <Route path="/do-an/:id" element={<FoodDetail />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
