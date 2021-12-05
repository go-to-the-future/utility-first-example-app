import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/system';

interface IButtonProps extends ButtonProps {}

const CustomButton = (props: IButtonProps): JSX.Element => (
  <Button {...props}>{props.children}</Button>
);

export const StyledButton = styled(CustomButton)({
    backgroundColor: 'green'
});