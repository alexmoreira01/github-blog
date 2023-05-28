import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Pelo o container ser um link ele pode receber todas as propriedades do link
type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
}
// Assim também e possivel repassar para o styled
export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    // Aplicando todas com o rest
    <ExternalLinkContainer {...rest}>
      {text}
      {/* Se n tiver um icon ira exibir o outro icone */}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  )
}