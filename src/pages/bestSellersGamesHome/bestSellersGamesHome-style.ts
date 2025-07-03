import styled from "styled-components";

export const Container = styled.div`
width: 1510px;
height: 1090px;
margin-top: 140px;
margin-left: 495px;

@media(max-width: 2309px) {
margin-left: 380px;
}

@media(max-width: 1920px) {
margin-left: 200px;
}

@media(max-width: 1779px) {
width: 1212px;
height: 1030px;
margin-left: 180px;
}
`;

export const BestSellersTitle = styled.h1`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 18px;
font-size: 46px;
color: #fff;

@media(max-width: 1779px) {
font-size: 36px;
}
`;

export const SeeMoreButton = styled.div`
display: flex;
height: 30px;
width: 100px;
margin: -73px 0 40px 89%;
border: 2px solid;
border-radius: 10px;
border-color: #fff;

@media(max-width: 1779px) {
margin: -60px 0 40px 89%;
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
border-radius: 10px;
font-size: 14px;
font-weight: bold;
color: #fff;

&:hover {color: #000;}}
}
`;

export const BestSellersContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 15px;
row-gap: 35px;
width: fit-content;
height: fit-content;
margin-left: 20px;

@media(max-width: 1779px) {
width: 1212px;
column-gap: 5px;
margin-left: 0;
}
`; 