'use client'

import React, { useState } from 'react'; 
import { HeaderContainer, Title } from './Header.styled';

export default function Header() { 
	const [value, onChange] = useState(new Date()); 

	return ( 
		<HeaderContainer> 
			<Title>Planning Rota</Title> 
		
        

		</HeaderContainer> 
	); 
    }