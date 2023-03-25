/* eslint-disable */
import { Route, Routes } from "react-router";
import "./App.css";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
