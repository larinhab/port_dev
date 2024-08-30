import { Logo } from '../Logo'
import { Input } from '../Input'
import { Container } from './style'
import { Menu } from '../Menu';
import { ThemeMode } from '../ThemeMode'

import { IoIosSearch } from "react-icons/io";

export function Header({ children }){
    return (
      <Container>

        <nav>
          <div className="left">
            <Logo/>
        
          </div>

            <div className="center">
            <Input icon={ IoIosSearch }
               placeholder="Busque por projetos">
            </Input>
            </div>
          
          <div className="right">
            <Menu/>
            <ThemeMode/>
          </div>
          </nav>
        
      
  </Container>
    )
  }
  