import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";
import Footer from "./components/Footer";
import Services from "./pages/Service";
import Learn from "./pages/Learn";
import DSA from "./Topics/DSA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Learn" element={<Learn />} />
          {/* <Route path="/sign-up" element={<SignUp />} /> */}
          <Route exact path="/" component={Learn} />
          <Route path="/dsa" element={<DSA />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
