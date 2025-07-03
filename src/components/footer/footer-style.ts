import styled from "styled-components";

export const FooterLine = styled.div`
width: 1473px;
height: 1px;
margin-top: 5%;
margin-left: 520px;
box-shadow: 0 0 8px #ff073a, 0 0 16px #ff073a;
background-color: #ff073a;

@media(max-width: 2309px) {
margin-left: 380px;
}

@media(max-width: 1920px) {
margin-left: 216px;
}

@media(max-width: 1779px) {
width: 1212px;
margin-left: 180px;
}
`;

export const FooterContainer = styled.div`
display: flex;
height: 400px;
width: 1473px;
margin-left: 520px;

@media(max-width: 2309px) {
margin-left: 380px;
}

@media(max-width: 1920px) {
margin-left: 220px;
}

@media(max-width: 1779px) {
height: 400px;
width: 1212px;
margin-left: 180px;
}
`;

export const SocialMediaContainer = styled.div`
width: 491px;   
height: 170px;
margin-top: 100px;

@media(max-width: 1779px) {
width: 404px;
}
`;


export const SocialMediaSpan = styled.span`
display: flex;
width: fit-content;
font-size: 22px;
font-weight: 700;
color: #fff;
cursor: default;
`;

export const SocialMediaColumn = styled.div`
display: flex;
flex-direction: column;
width: 115px;
height: 120px;
margin-top: 20px;
row-gap: 20px;
`;

export const GeneralMediaContainer = styled.div`
display: flex;
width: fit-content;
`;

export const SocialMediaIcon = styled.img`
display: flex;
width: 20px;
height: 20px;
cursor: pointer;
`;

export const SocialMediaTitle = styled.span`
display: flex;
width: fit-content;
margin-top: -2px;
margin-left: 15px;
font-size: 17px;
font-weight: 600;
color: #fff;
cursor: pointer;
`;

export const InfoContainer = styled.div`
width: 491px;
height: 170px;
margin-top: 100px;

@media(max-width: 1779px) {
width: 404px;
}
`;

export const InfoSpan = styled.span`
display: flex;
width: fit-content;
margin-left: 180px;
font-size: 22px;
font-weight: 700;
color: #fff;
cursor: default;
`;

export const InfoColumn = styled.div`
display: flex;
flex-direction: column;
row-gap: 15px;
width: 190px;
height: 120px;
margin-top: 20px;
margin-left: 180px;

span {
display: flex;
height: fit-content;
width: fit-content;
font-weight: 500;
font-size: 18px;
cursor: pointer;
color: #fff;
}
`;

export const HelpContainer = styled.div`
width: 491px;
height: 170px;
margin-top: 100px;

@media(max-width: 1779px) {
width: 404px;
}
`;

export const HelpSpan = styled.span`
display: flex;
width: fit-content;
margin-left: 360px;
font-size: 22px;
font-weight: 700;
color: #fff;
cursor: default;

@media(max-width: 1779px) {
margin-left: 273px;
}
`;

export const HelpColumn = styled.div`
display: flex;
flex-direction: column;
row-gap: 15px;
width: 130px;
height: 120px;
margin-top: 20px;
margin-left: 360px;

span {
display: flex;
height: fit-content;
width: fit-content;
font-weight: 500;
font-size: 18px;
cursor: pointer;
color: #fff;
}

@media(max-width: 1779px) {
margin-left: 273px;
}
`;

export const SecondFooterLine = styled.div`
width: 1473px;
height: 1px;
margin-top: 23%;
margin-left: -100%;
box-shadow: 0 0 8px #ff073a, 0 0 16px #ff073a;
background-color: #ff073a;

@media(max-width: 1779px) {
width: 1212px;
margin-top: 28%;
}
`;

export const LogoContainer = styled.div`
display: flex;
height: 43px;
margin-left: -100%;   
margin-top: 344px;

@media(max-width: 1779px) {
margin-top: 351px;
}
`;

export const Logo = styled.span`
font-family: 'Orbitron', sans-serif;
font-size: 40px;
font-weight: 700;
margin-left: 20px;
cursor: pointer;
color: #fff;

@media(max-width: 1779px) {
font-size: 35px;
}
`;

export const CopyrightSpan = styled.span`
display: flex;
height: fit-content;
margin-top: 350px;
margin-left: 10px;
font-size: 18px;
font-weight: 500;
color:#fff;

@media(max-width: 1779px) {
margin-top: 355px;
font-size: 16px;
}
`;