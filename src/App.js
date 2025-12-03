import React from "react";
import { Routes, Route} from "react-router-dom";
import Nav from "./components/nav"
import Footer from "./components/footer"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales"
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import './App.css';


function App() {
    return (
        <div className="App">
            {}
            <Nav/>
            
         <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/Contact" element={<Contact/>}></Route>
             <Route path="/MentionsLegales" element={<MentionsLegales/>}></Route>
             <Route path="/Services" element={<Services/>}></Route>
             <Route path="/Portfolio" element={<Portfolio/>}></Route>
         </Routes>

         <Footer/>

        </div>
    );
}

export default App;
