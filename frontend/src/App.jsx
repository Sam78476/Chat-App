import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div>
        <Navbar />

        
      </div>
    </div>
  );
}

export default App;
