import React, { useEffect, useState } from 'react';
import { Container } from './style'
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

export function ProjectSwiper() {
  const [projects, setProjects] = useState([])
  const API_BASE_URL = import.meta.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        console.log(response.data)
        setProjects(response.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className='projects'>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                Visitar Repositório
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}