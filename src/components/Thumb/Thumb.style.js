import styled from "styled-components";


export const Wrapper = styled.div`
    overflow: hidden;
    border-radius: 20px;
    position: relative;

    .thumb-height{
        max-height: 340px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 340px;
    max-width: 720px;
    transition: all 0.5s;
    object-fit: cover;
    border-radius: 20px;
    animation: imageFadeUp 0.5s;
    :hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    @keyframes imageFadeUp {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;


export const ImageMovie = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.5s;
    object-fit: cover;
    border-radius: 20px;
    animation: imageFadeUp 0.5s;
    :hover{
        opacity: 0.8;
    }
    @keyframes imageFadeUp {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;