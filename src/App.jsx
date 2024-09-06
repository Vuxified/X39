import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        <Footer />
      </Router>
    </>
  );
}

export default App;
