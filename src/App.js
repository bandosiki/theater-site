import React from "react";
import Main from "./Main";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Footer />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="*" element={<h2><br /><br />ЗАвали ебало, быдло<br /><br /></h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
