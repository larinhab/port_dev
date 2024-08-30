import { Container } from './style';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

export function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(prev => !prev);

  return (
    <Container>
      <div className="menu-toggle" onClick={handleToggle}>
        <IoMenu size={52} style={{ marginTop: "0.3rem"}} />
      </div>

      <div className={`menu-dropdown ${showMenu ? 'open' : 'closed'}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/about">Sobre</Link>
      </div>
    
    </Container>
  );
}