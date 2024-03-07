'use client'

import React from "react";
import { TableContainer, TableData, TableHeader, TableWrapper } from "./Table.styled";
import { tableHeaders } from "@/app/Data/TableData";

interface TableProps {
  label: string;
  data: { name: string; hours: string; specialities: string }[];
}

 export default function Table({label, data}: TableProps) {
 
    return (
      <TableWrapper>
            <TableContainer>
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => <TableHeader key={index}>{header}</TableHeader>)}

                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <TableData>{val.name}</TableData>
                            <TableData>{val.hours}</TableData>
                            <TableData>{val.specialities}</TableData>
                        </tr>
                    )
                })}
                </tbody>
            </TableContainer>
        </TableWrapper>
    );
  }