import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProductsList from "../src/components/Products/ProductsList";
import Cart from "./components/Shopping-Cart/Cart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<ProductsList/>} />
          <Route path="/my-cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

