import React, { createContext } from 'react'

export const CharactersContext = createContext()

export default function CharactersProvider({ children, data }) {

	return (
		<CharactersContext.Provider
			value={data}
		>
			{ children }
		</CharactersContext.Provider>
	)
}