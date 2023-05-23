import { styled } from "styled-components";
import headerImg from '../../assets/headerImg.png';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${headerImg}) no-repeat center;
  background-size: cover;

  img {
    margin-bottom: 5rem;
  }
`;