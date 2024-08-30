import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 8rem;
    padding-bottom: 2rem;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;

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
            color: rgb(29, 28, 28);
            font-size: 36px;
        }
    }

`