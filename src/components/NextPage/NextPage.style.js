import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 30px;
    align-items: center;
    margin: 30px auto 10px auto;
`;
export const PrevButton = styled.button`
    padding: 10px 20px;
    color: white;
    font-size: var(--fontSmall);
    text-transform: uppercase;
    background: var(--darkGrey);
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
`;

export const NextButton = styled.button`
    padding: 10px 20px;
    color: white;
    font-size: var(--fontSmall);
    text-transform: uppercase;
    background: var(--darkGrey);
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
`;