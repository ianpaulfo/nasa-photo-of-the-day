import React from "react";

import NasaCard from "./Components/NasaCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      <h1>Welcome to the <span>NASA</span>🚀 Photo of the Day!</h1>
      {
      <NasaCard />
}
    </div>
  );
}

export default App;

