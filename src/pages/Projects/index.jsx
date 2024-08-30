import { Container } from './styles.js'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ThemeContext } from 'styled-components'; 
import { ProjectSwiper } from '../../components/ProjectSwiper/index.jsx';

export function Projects(){

  return (
    <Container>
      <Header/>
      
      <main>
          <h2>Meus Projetos</h2>
          <ProjectSwiper/>
      </main>

    <Footer/>
    </Container>
    )
}