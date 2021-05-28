import styled from "styled-components";

export const StyledDiv = styled.div`

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			border: none;
		}

		img{
			    width:  293px;
				height: 293px;
							
			@media only screen and (max-width: 1200px) {
					width: 253px;
					height: 253px;
			}

			@media only screen and (max-width: 1000px) {
				width: 193px;
				height: 193px;
			}

			@media only screen and (max-width: 990px) {
				width: 173px;
				height: 173px;
			}

			@media only screen and (max-width: 789px) {
				width: 143px;
				height: 143px;
			}

			@media only screen and (max-width: 434px) {
				width: 93px;
				height: 93px;
			}
		}
	
`;