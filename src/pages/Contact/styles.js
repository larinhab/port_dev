import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 10rem;
        padding: 4rem;
    }

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
                font-size: 5rem;
                font-weight: 500;
                margin-left: 25rem;
                font-family: 'Bellarina';
            }
    }

    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        margin-left: 60rem;
    }

`