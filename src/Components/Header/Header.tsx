'use client'

import React, { useState } from 'react'; 
import { HeaderContainer, Title } from './Header.styled';
import Link from 'next/link';

export default function Header() { 
	const [value, onChange] = useState(new Date()); 

	return ( 
		<HeaderContainer> 
			<Title>Planning Rota</Title> 
  <nav>
        <Link href="/Rota">
          <p>Rota</p>
        </Link>
   
  </nav>
		</HeaderContainer> 
	); 
    }