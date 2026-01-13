import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    color: #ff6262ff;
  }
`

export default function Logo(props) {
  return (
    <LogoLink {...props}>Secure Client</LogoLink>
  )
}