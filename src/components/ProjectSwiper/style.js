import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem 15rem;
    
    main {
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr); 
        gap: 3rem; 
    }

    .projects-box {
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 8px;
        padding: 1rem;
        margin-top: 2rem;
        
        
        backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            -webkit-box-shadow: 5px 5px 15px 0px;
            -moz-box-shadow: 10px 10px 21px 0px;
            border-radius: 30px;
    }

    .projects{
      background: none;
      border: none;
      word-wrap: break-word;
    }

    h3 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
    }

    p {
        color: #666;
        margin-bottom: 0.5rem;
    }

    a {
        color: #0070f3;
        text-decoration: none;
        font-weight: bold;
    }
`;