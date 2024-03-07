'use client'

import Button from "@/Components/Button/Button";
import PageContainer from "@/Components/PageContainer/PageContainer";
import Table from "@/Components/Table/Table";
import TextInput from "@/Components/TextInput/TextInput";
import React, { ChangeEvent, useState } from "react";
import { hoursOptions, initialData } from "../Data/TableData";
import DropDownQuestion from "@/Components/DropDownQuestion/DropDownQuestion";

export default function Rota() {
  const [data, setData] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [addingPerson, setAddingPerson] = useState(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddPerson = async () => {
    const capitalizedInput = inputValue.trim();
    if (capitalizedInput !== "") {
      setAddingPerson(true);
      setInputValue(capitalizedInput); 
    }
  };

  const handleHours = () => {
    if (selectedHour) {
      setAddingPerson(false); 
      setShowQuestion(true); 
    }
  };

  const handleSpecialities = (specialities: string | null) => {
    if (specialities !== null) {
      const newPerson = {
        name: inputValue,
        hours: selectedHour || "8-4",
        specialities: specialities.trim() || "use client",
      };

      setData([...data, newPerson]);
      setInputValue("");
      setSelectedHour("");
      setShowQuestion(false);
    }
  };

  return (
    <PageContainer>
      <div>
        <TextInput value={inputValue} onChange={handleInput} />
        <Button label="Add Person" onClick={handleAddPerson} />
        {addingPerson && (
          <>
            <DropDownQuestion
              question="Select working hours:"
              options={hoursOptions}
              onSelect={setSelectedHour}
              value={selectedHour}
            />
            <Button label="Add Hours" onClick={handleHours} />
          </>
        )}
        {showQuestion && (
          <DropDownQuestion
            question={`Enter specialities for ${inputValue}:`}
            options={["DV", "RunUp"]}
            onSelect={handleSpecialities}
          />
        )}
        <Table label="Rota" data={data} />
      </div>
    </PageContainer>
  );
}
