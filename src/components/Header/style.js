import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	width: 100%;
	background-color: var(--main-color);
	color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 1em 2em;


	@media(max-width: 414px) {
		& {
			display: block;
			text-align: center;
		}

		& div {
			margin-bottom: 1em;
		}
	}
`