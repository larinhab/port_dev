import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 2rem 10rem;
        padding: 4rem;
    }

    h2{
        font-size: 5rem;
        font-weight: 500;
        font-family: 'Bellarina';
        }

    .box{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20rem;
        width: 100%
    }
`