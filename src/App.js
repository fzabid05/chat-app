import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Brad Gibson"
        avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        online
      />
      <Contact
        name="Matilde goli"
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Contact
        name="Jack Moon"
        avatar="https://randomuser.me/api/portraits/men/15.jpg"
        online
      />
    </div>
  );
}

export default App;
