// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
     <Footer/>
      
      
    </div>
  );
}

export default App;
