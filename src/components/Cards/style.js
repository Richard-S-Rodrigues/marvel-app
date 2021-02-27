import styled from 'styled-components'

export const CardWrapper = styled.section`
	width: min(90vw, 100vw);
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1.5em;
	justify-items: center;
	margin: 2.6em 1.5em;
	transition: 1s;

	article {
		cursor: pointer;
		width: 90%;
		position: relative;
		transition: bottom 1s;
		border-radius: 50%;
	}

	article:hover {
		bottom: 1em;
	}

	article div:first-child {
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}

	article div img {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: -2;

	}

	article div:nth-child(2) {
		color: #fff;
	}

	article div:nth-child(2) h2 {
		font-size: 14px;
		letter-spacing: .5px;
	}


`