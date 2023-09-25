import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/Routes"; // Import the routes component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes /> {/* Use the routes component */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
