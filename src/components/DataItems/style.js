import styled from 'styled-components'

export const FooterWrapper = styled.footer`

	form {
		display: flex;
		justify-content: space-between;
		margin: 2em 2.5em; 
	}

	form button {
		padding: 1em 1em;
		border-radius: 1em;
		border: none;
		cursor: pointer;
		background-color: var(--main-color);
		color: #888;
		font-weight: 600;
		font-size: 16px;
	}

	form button:hover {
		background-color: #590101;
		transition: .5s;
	}

	form button:disabled {
		background-color: transparent;
		border: 1px solid var(--main-color);
	}
	
`