import styled from "styled-components"

export const Container = styled.div`
    height: 100dvh;
    width: 100%;
    margin: auto;

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        margin: 5rem 10rem;
        padding: 4rem;
    }

    h2{
            font-family: 'Bellarina';
            font-size: 6rem;
            font-weight: 500;
            text-align: center;
            position: absolute;
            top: 180px;
            right: 200px;
        }


    .img-box{
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 1000px;
    }

    .imgProfile {
        width: 550px;
        height: 735px;
        border-radius: 6rem;
        animation: rotateImage 5s linear infinite;

        transition: transform 0.6s; 
        transform-style: preserve-3d
    }
     .img-box:hover .imgProfile {
            transform: rotateY(180deg); 
  }
        .text-box{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            width: 800px;

        p{
            text-align: right;
            font-family: "Grandstander";
            font-weight: 300;
            font-size: 1.2rem;
            
        }
    }
`