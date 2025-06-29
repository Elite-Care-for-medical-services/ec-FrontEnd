import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Navbar from "./components/navbar/Navbar";
import PatientsAPI from './components/navbar/PatientsAPI';
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/PatientsAPI" element={<PatientsAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
