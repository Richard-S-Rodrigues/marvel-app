import styled from 'styled-components'

export const MainWrapper = styled.main`
	width: 100%;

	div#changeSection {
		max-width: 80%;
		display: flex;
		justify-content: center;
		margin: 2em auto;
	}

	div#changeSection h1 {
		cursor: pointer;
		color: #fff;
	}

	div#changeSection h1:hover {
		font-size: 28px;
		transition: .5s;
	}

	div#changeSection h1.active {
		border-bottom: 2px solid var(--main-color);
		font-size: 28px; 
	}

	div#changeSection h1:nth-child(2) {
		margin-left: 2em;
	}

	@media(max-width: 400px) {
		div#changeSection h1 {
			font-size: 22px;
		}
	}
`