import styled from "styled-components";

export const HeaderWrapper = styled.header`
	width: 100%;
	background: linear-gradient(
		90deg,
		rgba(17, 90, 173, 1) 0%,
		rgba(18, 18, 20, 1) 100%
	);
	color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 1em 2em;

	@media (max-width: 414px) {
		& {
			display: block;
			text-align: center;
		}

		& div {
			margin-bottom: 1em;
		}
	}
`;
