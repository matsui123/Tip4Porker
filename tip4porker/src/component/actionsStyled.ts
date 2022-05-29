import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BetInput = styled.input.attrs({ type: 'text'})`

    height: 80px;
    font-size:40px;
`;

export const BetButton = styled.button`

    margin: 10px 0px;
    border-radius: 20px;
    height: 80px;
`;

export const BetContainer = styled.div`
    display: flex;
`;
