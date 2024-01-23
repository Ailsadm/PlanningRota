import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

export default function CalendarRota() { 
	const [value, onChange] = useState(new Date()); 

	return ( 
		<div> 
			<h1>NextJs Calendar - GeeksforGeeks</h1> 
			<Calendar 
				onChange={onChange} 
				value={value} 
			/> 
		</div> 
	); 
}
