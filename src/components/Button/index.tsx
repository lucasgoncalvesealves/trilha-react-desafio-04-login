import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title }: IButtonProps) => {
  return <ButtonContainer>{title}</ButtonContainer>;
};

export default Button;
