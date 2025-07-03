import styled from "styled-components";

export const Container = styled.div`
height: 540px;
width: 1510px;
margin-top: 140px;
margin-left: 495px;

@media(max-width: 2309px) {
margin-left: 380px;
}

@media(max-width: 1920px) {
margin-left: 200px;
}

@media(max-width: 1779px) {
margin-left: 152px;
width: 1255px;
height: 530px;
}
`;

export const GamesTitle = styled.h1`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 25px;
font-size: 35px;
color: #fff;

@media(max-width: 1779px) {
font-size: 25px;
}
`;

export const SubGamesTitle = styled.h2`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 25px;
font-size: 20px;
color: #fff;

@media(max-width: 1779px) {
font-size: 15px;
}
`;

export const SeeMoreButton = styled.div`
display: flex;
height: 30px;
width: 100px;
margin: -100px 0 75px 91%;
border: 2px solid;
border-radius: 10px;
border-color: #fff;
background-color: none;

@media(max-width: 1779px) {
margin: -75px 0 79px 90%;
}

&:hover {
 box-shadow: 0px 0px 20px rgb(26, 211, 211);
background-color: #fff;
cursor: pointer;
}

span {
width: 100%;
padding-left: 21px;
padding-top: 5px;
font-size: 14px;
border-radius: 10px;
font-weight: bold;
color: #fff;

&:hover {color: #000;}}
}

`;

export const GamesContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 10px;
height: 410px;
width: 1490px;
margin-left: 20px;

@media(max-width: 1779px) {
column-gap: 3px;
width: 1235px;
}
`;