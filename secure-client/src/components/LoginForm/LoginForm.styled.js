import { Link } from "react-router-dom";
import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`

export const Button = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`

export const JoinLink = styled(Link)`
    text-decoration: none;
    color: #ccc;

    &:hover {
        color: #0056b3;
    }
`