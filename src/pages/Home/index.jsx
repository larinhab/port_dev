import { Container } from './styles.js'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import '../../utilis/global.js'; 
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


import Lottie3 from "react-lottie";
import animationData from "../../assets/animation_1.json";
import { useColorToggle } from '../../hooks/colorToggle'

export function Home(){
      const [color, toggleColor] = useColorToggle();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <Container>
      <Header/>
      
      <main>
        <div>
             <Lottie3 options={defaultOptions}
            style={{
              width: '800px',
              aspectRatio: "16:9",
          }}
            />
          </div>

          <div className="welcome">
            <h2>Bem vindo,</h2>
            <p>este é o meu portfólio, sou uma
                <span style={{color, transition: 'color 0.7s ease'}} 
                onMouseOver={toggleColor}> desenvolvedora web </span> 
                e estudante de  
                <span style={{color, transition: 'color 1s ease'}} 
                onMouseOver={toggleColor}> engenharia de software </span> 
                 e minhas tecnologias são:
            </p>
            <div className="tech">
              <FaGitAlt />
              <FaReact />
              <FaNodeJs />
              <SiMysql />
              <FaJsSquare />
            </div>

          </div>
      </main>

    <Footer/>
    </Container>

  )
}

