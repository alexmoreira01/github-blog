import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  
  header {
    display: flex;

    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 0.85rem;

    h3 {
      font-size: ${(props) => props.theme.textSizes["title-title-s"]};
      color: ${(props) => props.theme.colors["subtitle"]};
    }
    
    span {
      font-size: ${(props) => props.theme.textSizes["title-title-s"]};
      color: ${(props) => props.theme.colors["span"]};
    }
  }

  input {
    width: 100%;
    
    padding: 0.75rem 1rem;
    
    border-radius: 6px;
    
    background: ${(props) => props.theme.colors["input"]};
    border: 1px solid ${(props) => props.theme.colors["border"]};
    color: ${(props) => props.theme.colors["text"]};

    transition: 0.5s;

    &:focus {
      border-color: ${(props) => props.theme.colors["brand-blue"]};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors["label"]};
    }
  }

`;