import { css, styled } from "styled-components";

interface ExternalLinkProps {
  variant?: "iconLeft";
} 

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  height: 1.1875rem;

  display: flex;
  align-items: center;

  line-height: 19px;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSizes["components-link"]};
  text-transform: uppercase;

  border: none;
  border-bottom: 1px solid transparent;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors["brand-blue"]};
  background: none;

  transition: 0.4s;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors["brand-blue"]};
  }

  ${({variant}) => variant === 'iconLeft' && css`
    flex-direction: row-reverse;
  `}
`;