import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { Input } from '../../globalStyle'
import { HeaderWrapper } from './style'


export default function Header() {

	const [searchItem, setSearchItem] = useState('')

	const handleOnChangeSearchBox = (event) => { 

		setSearchItem(event.currentTarget.value)
		
	}

	const history = useHistory()
	const handleSearchBox = (event) => {
		event.preventDefault()

		if (searchItem === '') return history.push('/')

		history.push(`/?query=${searchItem}`)
		
	}

	return (
		<>
			<HeaderWrapper>
				<div>
					<h2>Marvel App</h2>
				</div>

				<form onSubmit={(event) => handleSearchBox(event)}>
					<Input type='text'
					value={searchItem}
					onChange={(event) => handleOnChangeSearchBox(event)} 
					placeholder='Search for Comics or Characters'/>
				</form>
			</HeaderWrapper>
		</>
	)
}