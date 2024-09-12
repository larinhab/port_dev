import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 2.3rem;
  border-radius: 0.8rem;
  border: 1px;
    backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            -webkit-box-shadow: 2px 2px 10px 0px;
            -moz-box-shadow: 10px 10px 21px 0px;
            border-radius: 6px;

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