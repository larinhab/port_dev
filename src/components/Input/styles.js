import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 2.3rem;
  
  background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  -webkit-box-shadow: 2px 2px 1px 1px;
  -moz-box-shadow: 5px 5px 1px 1px;
  border-radius: 0.8rem;

  svg {
    margin: 1rem;
    filter: contrast(0);
  }

  input {
    width: 100%;
    height: 100%;
    padding: .5rem 0;
    background: none;
    outline: none;
    border: none;
    text-align: start;
    font-family: "Grandstander";
  }

  &::placeholder {
    
}
`