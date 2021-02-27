import React, { createContext } from 'react'

export const ComicsContext = createContext()

export default function ComicsProvider({ children, data }) {

	return (
		<ComicsContext.Provider
			value={data}
		>
			{ children }
		</ComicsContext.Provider>
	)
}