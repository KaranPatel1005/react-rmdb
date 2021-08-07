import styled from "styled-components";

export const Spinner = styled.div`
    border: 5px solid var(--lightGrey);
    border-top: 5px solid var(--medGrey);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 20px auto;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(360deg);
        }
        50%{
            transform: rotate(90deg);
        }
        70%{
            transform: rotate(140deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;