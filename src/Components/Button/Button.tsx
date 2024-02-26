'use client';

import {StyledButton} from './Button.styled';


interface ButtonProps {
    label: string;
    onClick: () => void;
}


export default function Button({ label, onClick, ...props}: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
}


