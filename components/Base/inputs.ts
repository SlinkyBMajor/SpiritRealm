import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from './box';
import { Button } from './buttons';

const BaseInputStyling = css`
  background-color: #eff1f3;
  min-height: 42px;
  border-radius: 4px;
  &:focus {
    outline: 0;
    // Box shadow outline to avoid position shifting
    box-shadow: 0 0 0 1px #444;
  }
`;

/* .... INPUT .... */
export const Input = styled(Box)<{
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  uppercase?: boolean;
}>`
  ${BaseInputStyling}
  ${({ uppercase }) =>
    uppercase && 'text-transform:uppercase; ::placeholder{text-transform: none}'};
  border: 1px solid ${({ error }) => (error ? '#e3273b' : '#eff1f3')};
`;

Input.defaultProps = {
  as: 'input',
  padding: 'small',
};

/* .... SELECT .... */
export const Select = styled(Box)<{
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}>`
  appearance: none;
  ${BaseInputStyling}
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1em bottom 12px;
  background-size: 16px;
  border: 1px solid ${({ error }) => (error ? '#e3273b' : '#eff1f3')};
`;

Select.defaultProps = {
  as: 'select',
  padding: 'small',
};

/* .... SELECTABLE BUTTON .... */
export const SelectableButton = styled(Button)<{
  type?: string;
  name?: string;
  disabled?: boolean;
  value: string | number;
  label: string;
}>`
  appearance: none;
  position: relative;
  &:after {
    display: flex;
    height: 100%;
    width: 100%;
    content: '${(props) => `${props.label}`}';
    justify-content: center;
    align-items: center;
  }
  &:checked {
    border: 2px solid var(--colorBlack);
  }
`;

SelectableButton.defaultProps = {
  as: 'input',
  type: 'radio',
  backgroundColor: 'colorBlueGray50',
};
