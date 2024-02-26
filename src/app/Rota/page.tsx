'use client'

import Button from "@/Components/Button/Button";
import PageContainer from "@/Components/PageContainer/PageContainer";
import Table from "@/Components/Table/Table";
import TextInput from "@/Components/TextInput/TextInput";
import React, { useState} from "react";

export default function Rota() {

  const [addPersonArray, setAddPersonArray] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event: any) => {
    setInputValue(event.target.value);
  };
  
  const handleAddPerson = () => {
    const capitalizedInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setAddPersonArray([...addPersonArray, capitalizedInput]);
    setInputValue("");
  };

  return (
    <PageContainer>
    <div>
      <TextInput value={inputValue} onChange={handleInput} />
    <Button label="Add Person" onClick={handleAddPerson} />
    {addPersonArray.map((person, index) => (
        <Table key={index} label={person}/>
      ))}
      </div>
    </PageContainer>
  );
}