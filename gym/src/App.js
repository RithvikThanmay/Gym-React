import About from './About';
import './App.css';
import Amenities from './Amenities';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Programs from './Programs';
import Footer from './Footer';

function Error(){
  return(
    <>
      <h1>Error page 404 not found</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
          <Nav />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Amenities" element={<Amenities/>}/>
        <Route path="/Programs" element={<Programs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
