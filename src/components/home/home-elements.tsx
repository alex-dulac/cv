import styled from "styled-components";

export const HomeContainer = styled.div`
  	width: 1100px;
`;

export const HomeContentContainer = styled.div`
  	text-align: center;
  	justify-content: center;
`;

export const ProfileImageContainer = styled.div`
  	@media screen and (min-width: 0px) and (max-width: 768px) {
		display: none !important;
	}
 
 	@media screen and (min-width: 768px) and (max-width: 3000px) {
 		justify-content: space-around;
 		align-items: center;
 		padding: 20px;
 	}
`;

export const MobileProfileImageContainer = styled.div`
  	@media screen and (min-width: 0px) and (max-width: 768px) {
		justify-content: space-around;
 		align-items: center;
 		padding: 20px;
	}
 
 	@media screen and (min-width: 768px) and (max-width: 3000px) {
 		display: none !important;
 	}
`;

export const ProfileImage = styled.img`
    max-width: 25rem;
    max-height: 25rem;
`;

export const MobileProfileImage = styled.img`
    max-width: 13rem;
    max-height: 13rem;
`;

export const HomeContent = styled.div`
	color: ${props => props.theme['navy-text']};
	font-size: 1.6rem;
	flex-direction: row !important;
	justify-content: space-between;
	margin-bottom: 2rem;
	align-items: center;
`;

export const HomeItem = styled.div`
    padding: 19px;
`;
