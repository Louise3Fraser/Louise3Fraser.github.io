import React from "react";
import AppRouter from "./AppRouter"
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/organization/Navigation";
import Footer from "./components/organization/Footer";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter basename="/dev-portfolio">
      <New/>
    </BrowserRouter>
  );
}

export default App;
