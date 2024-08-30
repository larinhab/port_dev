import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
    backdrop-filter: blur(20px);
    margin: 0;

    nav{
        width: 100%;
        height: 7rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        flex-direction: row;
        
        padding: 0 12rem;

        .center{
            width: 40%;
        }
    }
    
    svg{
        cursor: pointer;
    }

    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
    }

    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
    }
    
`