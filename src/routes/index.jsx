import { Home } from "../pages/Home"
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { BrowserRouter as Router, 
         Routes as RouterRoutes, Route } from 'react-router-dom';

export function AppRoutes(){ 
    return(
        <Router>
             <RouterRoutes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/projects" element={<Projects />} />
        </RouterRoutes>
        </Router>
    )
}