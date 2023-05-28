import { styled } from "styled-components";

export const PostHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 10.5rem;
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;

  background: ${(props) => props.theme.colors["profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2); 

  header {
    display: flex;
    justify-content: space-between;

    width: 100%;
    align-items: center;

    margin-bottom: 1.25rem;
  }
  
  h1 {
    font-size: ${(props) => props.theme.textSizes["title-title-l"]};
    color: ${(props) => props.theme.colors["title"]};

    line-height: 130%;

    margin-bottom: 0.25rem;

  } 

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    /* Caso a tela for menor ele irar quebrar o layout */
    flex-wrap: wrap;

    li {
      display: flex;

      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.colors["span"]};
      line-height: 0px;

      svg {
        color: ${(props) => props.theme.colors["label"]};

      }

    }
  }

`;