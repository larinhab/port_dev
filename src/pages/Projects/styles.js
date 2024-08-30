import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;


    h2{
        font-family: 'Bellarina';
        font-size: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem auto;
    }

   
    .Swiper {
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }

  .SwiperSlide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
  }

  .projects h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .projects p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .projects a {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;
  }

  .projects a:hover {
    color: #0056b3;
  }
`