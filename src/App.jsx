import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { cartPage, productDetails } from "./Variables/pathes";

function App() {
  return (
    <div style={{ fontFamily: "Cairo" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={productDetails(":id")} element={<ProductDetails />} />
        <Route path={cartPage()} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
