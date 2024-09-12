import { Container } from './styles.js'
import imagemPerfil from '../../assets/eugremio.jpeg'
import { MdAlternateEmail } from "react-icons/md";


import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState, useContext } from 'react';
import { useColorToggle } from '../../hooks/colorToggle'

export function About(){
  const [color, toggleColor] = useColorToggle();
  return (
    <Container>
      <Header/>
      
      <main>
          <div className="img-box">
            <img className="imgProfile" src={imagemPerfil} alt="Lara com a camisa do Grêmio" />
          </div>
          <div className="text-box">
          <h2>Lara Barbosa Viana</h2>
            <div className='text'>
              <p>Aqui vou contar um pouquinho mais sobre minha história, tenho 29 anos e sou natural do Rio Grande do Sul no Brasil, 
                sou apaixonada por tecnologia desde criancinha.. <br/>
                Quando pequena meu pai tinha uma lan house, lá dentro me criei e me tornei aficionada por computadores, ajudava a montar e instalar softwares, já na
                pré adolescencia gostaria de ter feito a faculdade de Desenvolvimento de Jogos…  
                <br/> Hoje, curso 
                <span style={{color, transition: 'color 1s ease'}} 
                      onMouseOver={toggleColor}> Engenharia de Software </span> 
                na Unopar e estudo 
                <span style={{color, transition: 'color 0.7s ease'}} 
                      onMouseOver={toggleColor}> Desenvolvimento Web </span>
                na Rocketseat e na Hora de codar. <br/>
                Desenvolvo projetos fullstack com React e Node, gosto de priorizar a experiência do usuário procurando trazer um layout moderno e intuitivo para as aplicações, 
                mantendo as boas práticas. 
                <br/> Sou familiarizada com a metodologia Scrum e Kanban e com banco de dados SQL.  
                <br/> Sou uma pessoa paciente e resiliente, gosto do sentimento após solucionar problemas e trazer soluções, tenho uma mente resolutiva, objetiva e aberta.  
                <br/> Além disso, na minha rotina gosto de praticar esportes, faço academia e jogo beach tennis, sou apaixonada por motociclismo, 
                video games e momentos de paz na natureza, tenho alguns hobbies entre eles: cerâmica fria e plantas🪴💭 </p>
               
               <span style={{color, transition: 'color .3s ease'}} 
                      onMouseOver={toggleColor}>larabviana@outlook.com</span>
              </div>
          </div>
      </main>

    <Footer/>
    </Container>
    )
}