import { ButtonStyles } from './button.styles';
import { ButtonProps } from './button.types';

const ButtonComponent = ({
  color,
  text,
  textColor
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyles color={color} textColor={textColor}>
      {text}
    </ButtonStyles>
  );
};

export { ButtonComponent };
