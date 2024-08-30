import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    display: flex;

    .menu-dropdown{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        gap: 1rem;

        position: absolute;
        top: 42px; 
        right: 320px;
        padding: 1rem;
    
        opacity: 0;
        transform: translateY(-10px); 
        transition: opacity 300ms ease, transform 300ms ease;
  }
  
  .menu-dropdown.open {
    opacity: 1;
    transform: translateY(0);
  }
  
  .menu-dropdown.closed {
    opacity: 0;
    transform: translateY(-10px);
  }
        
        a{
            text-decoration: none;
            color: black;
            font-family: "Grandstander";
            font-weight: 600;
        }
`