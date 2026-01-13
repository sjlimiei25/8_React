import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`

export const LogoArea = styled.header`
    padding: 1rem;
`

export const ContentArea = styled.main`
    width: 80%;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`