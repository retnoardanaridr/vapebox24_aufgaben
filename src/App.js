import React from "react";
import Header from "./components/navbar";
import HomePage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import ShopProducts from "./pages/shop_product";
import Footer from "./components/footer";
import ProductDetail from "./pages/product_detail";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop-products" element={<ShopProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
