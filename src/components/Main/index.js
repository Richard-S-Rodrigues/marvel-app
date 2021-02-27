import React, { useState } from 'react'

import DataItems from '../DataItems'
import Header from '../Header'


import { MainWrapper } from './style'

export default function Main() {

	const [isComics, setIsComics] = useState(true)

	const handleData = (value) => {

		if (value === 'comics') {

			setIsComics(true)

			document.getElementById('comics')
			.classList
			.add('active')

			document.getElementById('characters')
			.classList
			.remove('active')

		} else if (value === 'characters') {

			setIsComics(false)

			document.getElementById('characters')
			.classList
			.add('active')

			document.getElementById('comics')
			.classList
			.remove('active')
		}
	}

	return (
		<>
			<Header />

			<MainWrapper>
		     	<div id='changeSection'>
			     	<h1 
			     	onClick={() => handleData('comics')}
			     	id='comics'
			     	className='active'

			     	>Comics</h1>
			     	<h1 
			     	onClick={() => handleData('characters')}
			     	id='characters'
			     	>Characters</h1>
			     </div>
			     	
			     <>
			     	<DataItems isComics={isComics} />
			     </>
		    </MainWrapper>
	    </>
	)
}