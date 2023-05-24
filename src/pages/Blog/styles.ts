import { styled } from "styled-components";

export const PostsListContainer = styled.section`
  width: 100%;

  display: grid;

  /* Duas Colunas */
  /* grid-template-columns: 1fr 1fr; */

  /* Se ajustar quando o tamanho da tela mudar -- no minimo ira ocupar 26rem 3 no maximo 1 linha inteira */
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));

  gap: 2rem;

  margin-bottom: 14rem;
`;