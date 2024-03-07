'use client'

import { useState } from "react";

interface QuestionProps {
    question: string;
    options: string[];
    onSelect: (selectedOption: string) => void;
    value? : string;
  }

export default function DropDownQuestion ({question, options, onSelect, ...props}: QuestionProps) {
    const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

return (
    <div>
        <label>{question}</label>
      <select value={selectedOption} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
)
}