import React, { useEffect, useState } from 'react';
import { Container } from './style'
import { api } from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

export function ProjectSwiper() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <main>

        {projects.map((project) => (
          <div className='projects-box' key={project.id}>
            <div className='projects'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                Visitar Repositório
              </a>
            </div>
          </div>
        ))}
      </main>
    </Container>
  );
}