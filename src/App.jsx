// import dotenv from 'dotenv';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar/navbar";
import Plants from "./components/plants/plants";
import "./app.css"
import Categories from "./components/home/category/categories";
import Auth from "./components/auth/auth";

// require('dotenv').config()

function App() {
  return (
    <Routes>
      <Route path="/" Component={Navbar}>
        <Route path="/" Component={Categories}></Route>
        <Route path="/plants" Component={Plants}></Route>
        <Route path="/auth" Component={Auth}></Route>
      </Route>
    </Routes>
  );
}

export default App;
