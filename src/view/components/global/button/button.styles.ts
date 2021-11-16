import styled from 'styled-components';
import { ButtonProps } from './button.types';

export const ButtonStyles = styled.button<ButtonProps>`
  height: 48px;
  width: 240px;

  padding: 13px 16px;

  margin: 0;
  outline: 0;
  border: 0;

  border-radius: 8px;

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;

  background: ${props => props.color};
  color: ${props => props.textColor};
`;
