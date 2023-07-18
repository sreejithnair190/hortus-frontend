import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar/navbar";
import Plants from "./components/products/plants/plants";
import Fertilizers from "./components/products/fertilizers/fertilizers"
import Seeds from "./components/products/seeds/seeds"
import Accessories from "./components/products/accessories/accessories"
import Categories from "./components/home/category/categories";
import Auth from "./components/auth/auth";
import "./app.css"

function App() {
  return (
    <Routes>
      <Route path="/" Component={Navbar}>
        <Route path="/" Component={Categories}></Route>

        //Products
        <Route path="/plants" Component={Plants}></Route>
        <Route path="/fertilizers" Component={Fertilizers}></Route>
        <Route path="/seeds" Component={Seeds}></Route>
        <Route path="/accessories" Component={Accessories}></Route>

        // Auth
        <Route path="/auth/sign-in" Component={Auth}></Route>
        <Route path="/auth/sign-up" Component={Auth}></Route>
      </Route>
    </Routes>
  );
}

export default App;
