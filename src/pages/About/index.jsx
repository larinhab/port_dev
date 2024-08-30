import { Container } from './styles.js'
import imagemPerfil from '../../assets/eugremio.jpeg'
import { MdAlternateEmail } from "react-icons/md";


import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState, useContext } from 'react';

export function About(){
  return (
    <Container>
      <Header/>
      
      <main>
          <div className="img-box">
            <img className="imgProfile" src={imagemPerfil} alt="Lara com a camisa do Grêmio" />
          </div>
          <h2>Lara Barbosa Viana</h2>
          <div className="text-box">
              <p>Aqui vou contar um pouquinho mais sobre minha história, tenho 29 anos e sou natural do Rio Grande do Sul no Brasil,
               👩🏽‍💻Sou apaixonada por tecnologia desde criancinha, quando pequena meu pai tinha uma lan house, lá dentro me criei e me tornei aficionada por computadores, quando pré adolescente gostaria de ter feito a faculdade de Desenvolvimento de Jogos… 
              📍Hoje, faço Engenharia de Software na Unopar e estudo Desenvolvimento Web na Rocketseat e na Hora de codar 🚀
               👩🏽‍💻Desenvolvo projetos fullstack com React e Node, gosto de priorizar a experiência do usuário procurando trazer um layout moderno e intuitivo para as aplicações, mantendo as boas práticas. Sou familiarizada com a metodologia Scrum e Kanban e com banco de dados SQL. 
                👩🏽‍💻Sou uma pessoa paciente e resiliente, gosto do sentimento após solucionar problemas e trazer soluções, tenho uma mente resolutiva, objetiva e aberta. 
               💭 Além disso, na minha rotina gosto de praticar esportes, faço academia e jogo beach tennis, sou apaixonada por motociclismo, video games e momentos de paz na natureza, tenho alguns hobbies entre eles: cerâmica fria e plantas🪴
               <MdAlternateEmail size={32} /> larabviana@outlook.com</p>
          </div>
      </main>

    <Footer/>
    </Container>
    )
}