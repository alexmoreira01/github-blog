import { ComponentProps } from "react";
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Pelo o container ser um link ele pode receber todas as propriedades do link
type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
}
// Assim também e possivel repassar para o styled
export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}