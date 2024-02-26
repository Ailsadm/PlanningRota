'use client'

import React, { ChangeEvent } from "react";
import { StyledInput } from "./TextInput.styled";
import { inter } from "@/app/Fonts/fonts";

interface TextInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}


 export default function TextInput({onChange, value}: TextInputProps) {
 
    return (
      <StyledInput onChange={onChange} value={value}/>
    );
  }