import { SpinnerContainer } from "./styles";

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </SpinnerContainer>
  )
}