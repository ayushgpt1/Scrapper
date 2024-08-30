import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detection from "./pages/Detection";
import Prevention from "./pages/Prevention";
import Support from "./pages/Support";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/support" element={<Support />} />
      
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
