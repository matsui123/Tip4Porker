import styled from "styled-components";

export const InitialValueContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const InputContainer = styled.div`
`;

export const InputContainerFlex = styled(InputContainer)`
    display: flex;
`;

export const InputContainerPadding = styled(InputContainer)`
    padding: 0 30px;
`;

export const SbInput = styled.input.attrs({ type: 'text'})`
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox'})`
`;

export const StartButton = styled.button`
    border-radius: 20px;s
`;