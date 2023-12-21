// import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./modules/pages/homepage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
