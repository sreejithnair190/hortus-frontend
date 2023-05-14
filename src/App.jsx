import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar/navbar";
import Plants from "./components/plants/plants";
import "./assets/css/app.css"
import Categories from "./components/home/category/categories";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Navbar}>
        <Route path="/" Component={Categories}></Route>
        <Route path="/plants" Component={Plants}></Route>
      </Route>
    </Routes>
  );
}

export default App;
