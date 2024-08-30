import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;

    .welcome{
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;

        h2{
            font-family: 'Bellarina';
            font-size: 8rem;
            font-weight: 500;
            text-align: center;
            position: absolute;
            top: 180px;
            right: 300px;
        }

        p{
            width: 500px;
            font-family: "Grandstander";
            font-size: 2.3rem;
            font-weight: 300;
            text-align: right;

            position: absolute;
            top: 400px;
            right: 300px;
        }


    .tech{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        font-size: 3rem;
        position: absolute;
        top: 630px;
        right: 300px;
    }
    }
`
