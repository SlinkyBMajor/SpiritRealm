import styled from '@emotion/styled';
import { Box } from './box';

export const Button = styled(Box)<{
  type?: string;
  disabled?: boolean;
}>`
  outline: none;
  appearance: none;
  border-style: none;
  font-size: 14px;
  font-weight: 600;
  height: 42px;
  min-width: 62px;
  font-family: 'Eina01', 'HelveticaNeue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.24px;
  line-height: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    background-color: black;
  }
  ${({ disabled }) => disabled && 'opacity: .2; pointer-events: none;'}
`;

Button.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  as: 'button',
  padding: 'small',
  backgroundColor: 'colorBlueGray200',
};

export const OutlinedButton = styled(Button)`
  border: solid 1px #dadada;
`;
