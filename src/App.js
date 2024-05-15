import logo from './logo.svg';
import './App.css';
import SpaceMissions from './SpaceMissions';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightDeatils from './FlightDeatils';



function App() {
  return (
    <>
      <Router>
      <Navbar />
        <div className="App container-fluid ">
          <Routes>
            <Route path="/" element={<SpaceMissions />} />
            <Route path="/about" element={<Footer />} />
            <Route path="/:flight_id" element={<FlightDeatils />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;




// jsx:  html + javascript
// jsx should have only one parent