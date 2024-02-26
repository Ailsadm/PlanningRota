'use client'

import { inter } from "@/app/Fonts/fonts";
import React from "react";

interface TableProps {
  label: string;

}


 export default function Table({label}: TableProps) {
 
    return (
      <div>{label}</div>
    );
  }