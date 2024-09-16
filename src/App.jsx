import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Homepage /> */}
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
