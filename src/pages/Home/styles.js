import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;
    background-color: var(--background);

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30rem;
        margin: 7rem 10rem;
        padding: 0 10rem;
    }

    .welcome{
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        text-align: right;


        h2{
            font-family: 'Bellarina';
            font-size: 7rem;
            font-weight: 500;
        }

        p{
            width: 500px;
            font-family: "Grandstander";
            font-size: 2.3rem;
            font-weight: 500;
        }

        span{
            font-weight: 600;
        }

    .tech{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
        font-size: 3rem;
        margin-top: 2rem;
    }
    }
`
