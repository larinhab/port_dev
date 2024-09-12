import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 8rem;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    .box-footer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p{
            font-size: 0.8rem;
        }

        ul {
            display: flex;
            justify-content: space-around;
            gap: 2rem;
            margin: 2rem;
        }

        svg{
            text-decoration: none;
            font-size: 36px;
        }
    }

`