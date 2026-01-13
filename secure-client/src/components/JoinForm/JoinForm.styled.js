import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const JoinButton = styled.button`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #007bff;
    color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`

export const ErrorMessage = styled.span`
    color: red;
`