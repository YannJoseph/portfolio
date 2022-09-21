// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home/Home";




function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
     
      
      
    </div>
  );
}

export default App;
