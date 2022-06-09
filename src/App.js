import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
