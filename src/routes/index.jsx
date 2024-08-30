import { Home } from "../pages/Home"
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom"

export function AppRoutes(){ 
    return(
        <BrowserRouter>
             <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<Projects />} />
        </Routes>
        </BrowserRouter>
    )
}