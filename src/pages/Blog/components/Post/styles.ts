import { styled } from "styled-components";

export const PostContainer = styled.div`
  width: 100%;

  height: 16.25rem;

  padding: 2rem;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors["post"]};
  background: ${(props) => props.theme.colors["post"]};

  transition: 0.4s;

  &:hover {
    border-color: ${(props) => props.theme.colors["label"]};
  }

  div { 
    display: flex;

    gap: 1rem;
    
    margin-bottom: 1.25rem;

    strong {
      /* Tudo que conseguir ocupar da div */
      flex: 1;
      font-size: ${(props) => props.theme.textSizes["title-title-m"]};
      color: ${(props) => props.theme.colors["title"]};

       /* Quantidade maxima de linhas - 2 linhas aqui */
      overflow: hidden;
      text-overflow: ellipsis; /* ... */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      /* Vai ocupar o maximo possivel dele mesmo e com o flex 1 acima ele ocupara oque ele precisar  */
      width: max-content;

      font-size: ${(props) => props.theme.textSizes["text-text-s"]};
      color: ${(props) => props.theme.colors["span"]};

    }
  }

  p {
    /* Quantidade maxima de linhas - 4 linhas aqui */
    overflow: hidden;
    text-overflow: ellipsis; /* ... */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;