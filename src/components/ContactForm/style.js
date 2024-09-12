import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    form{
        width: 600px;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
        padding: 3rem;

        backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            -webkit-box-shadow: 5px 5px 21px 0px;
            -moz-box-shadow: 10px 10px 21px 0px;
            border-radius: 30px;
    }
    
    input{
        width: 100%;
        border-radius: 0.5rem;
        border: none;
        padding: 0.8rem;
        margin-top: -1rem;
        margin-bottom: 1.2rem;

        background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        -webkit-box-shadow: 0px 0px 14px 0px;
        -moz-box-shadow: 0px 0px 14px 0px;

        font-family: "Grandstander";
    }
    
    label{
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-family: "Grandstander";
        font-weight: 600;
        font-size: 1.4rem;
    }
    
    textarea{   
        padding: 1rem;
        width: 500px;
        height: 450px;
        border-radius: 0.3rem;
        border: none;
        font-family: 'Grandstander';
        
        background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        -webkit-box-shadow: 0px 0px 14px 0px;
        -moz-box-shadow: 0px 0px 14px 0px;

    }
    
    svg{
        font-size: 2rem;
    }
    
    button{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        border-radius: 2rem;
        border: none;
        
        margin: 1rem auto;
        padding: 0.3rem;
        cursor: pointer;
        font-family: 'Grandstander';
        font-weight: 500;

        background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        -webkit-box-shadow: 2px 2px 10px 2px;
        -moz-box-shadow: 5px 5px 1px 1px;
    }

    button:hover{
        transition: 3s;
    }
`