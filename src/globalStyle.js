import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
	
	:root {
		--main-color: #115aad;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	body {
		background-color: #363636;
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	small {
		color: #a1a1a1;
	}

`

export const Input = styled.input`
	width: 100%;
	font-size: 16px;
	padding: 1em;
	border: none;
	border-radius: 1em;
`
