import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar/navbar";
import Plants from "./components/plants/plants";
import Categories from "./components/home/category/categories";
import Auth from "./components/auth/auth";

import "./app.css"

function App() {
  return (
    <Routes>
      <Route path="/" Component={Navbar}>
        <Route path="/" Component={Categories}></Route>
        <Route path="/plants" Component={Plants}></Route>
        <Route path="/auth/sign-in" Component={Auth}></Route>
        <Route path="/auth/sign-up" Component={Auth}></Route>
      </Route>
    </Routes>
  );
}

export default App;
