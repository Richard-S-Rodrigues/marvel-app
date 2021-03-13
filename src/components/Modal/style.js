import styled from "styled-components";

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;

	background-color: rgba(0, 0, 0, 0.7);

	position: fixed;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: 0.5s;

	opacity: 0;
	visibility: hidden;

	&.active {
		opacity: 1;
		visibility: visible;
	}

	div.close-btn {
		position: fixed;
		top: 1em;
		right: 1em;
		z-index: 10;
	}

	div.close-btn button {
		font-weight: 600;
		font-size: 28px;
		padding: 0.5em;
		background-color: transparent;
		color: #fff;
		border: none;
		cursor: pointer;
	}

	div.close-btn button:hover {
		font-size: 30px;
		transition: 1s;
	}

	div.main-section {
		width: 50em;
		position: relative;
		overflow: auto;
		height: auto;
		background: #f0f2f5;
		border-radius: 1em;
	}

	div.main-section header {
		width: 100%;
		height: auto;
		border-radius: 1em 1em 0 0;
		text-align: start;
		margin-top: 0;
		padding-bottom: 2em;
		background-color: var(--main-color);
	}

	div.main-section header div {
		display: inline-block;
		width: 90%;
		background-color: transparent;
		color: #fff;
		margin: 1em auto auto 1em;
	}

	.main-container {
		width: 100%;
		height: inherit;
		display: block;
	}

	.main-container div:first-child {
		display: flex;
		width: 100%;
	}

	.info-container {
		width: 100%;
		height: 70%;
		margin-right: 4em;
	}

	.info-container .text-container {
		flex-direction: column;
		overflow: auto;
		width: 100%;
		height: 100%;
		padding: 0;

		/* Hide scrollbar for IE, Edge and Firefox */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.info-container .text-container::-webkit-scrollbar {
		display: none;
	}

	.info-container .text-container p {
		width: 95%;
		line-height: 1.8em;
	}

	.actions-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 20%;
		margin-top: 0.1em;
	}

	.actions-container button {
		width: 100%;
		background-color: var(--main-color);
		color: #fff;
		border: none;
		border-radius: 0.1em;
		padding: 1.2em;
		font-size: 18px;
		font-weight: 600;
		cursor: pointer;
	}

	.actions-container button a {
		color: #fff;
	}

	.actions-container button:hover {
		text-decoration: underline;
		font-size: 19px;
	}

	#pagination-group {
		display: flex;
		justify-content: space-between;
	}

	#pagination-group button {
		position: absolute;
		bottom: 50%;

		border: none;
		background-color: transparent;
		color: black;
		cursor: pointer;
	}

	#pagination-group button:disabled {
		color: transparent;
	}

	#pagination-group button:first-child {
		left: 1em;
	}

	#pagination-group button:last-child {
		right: 1em;
	}

	@media (max-width: 904px) {
		div.main-section {
			width: 90%;
			margin: auto;
		}

		.main-container div:first-child {
			flex-direction: column;
		}

		.image-container {
			max-width: 20em;
		}

		.info-container .text-container {
			margin-left: 1em;
			margin-bottom: 1em;
			max-height: 12em;
		}
	}
`;
