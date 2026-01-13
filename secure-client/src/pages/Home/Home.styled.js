import styled from "styled-components";

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;
    padding: 1rem;
    margin: 0 auto;
`

export const WelcomeMessage = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`

export const LogoutButton = styled.button`
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