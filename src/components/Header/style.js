import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin: 0;

    
    backdrop-filter: blur(50px);
            -webkit-backdrop-filter: blur(50px);
            -webkit-box-shadow: 0px 2px 15px 0px;
            -moz-box-shadow: 10px 10px 21px 0px;
            border-radius: 6px;
    
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