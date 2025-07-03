import styled from "styled-components";

export const Container = styled.div`
display: flex;
max-width: 97%;
width: 730px;
height: 170px;
border-radius: 20px;
transition: 0.3s;

&:hover {
background-color: rgb(250, 38, 38);
}

@media(max-width: 1779px) {
width: 612px;
height: 160px;
}
`;

export const BannerContainer = styled.div`
width: 99%;
height: 96%;
border-radius: 20px;
cursor: pointer;
background: linear-gradient(to right,rgb(170, 14, 14),rgb(130, 14, 14),rgb(110, 14, 14));
`;

export const PositionContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
margin-top: -12px;
margin-left: -12px;
border-radius: 10px;
background-color: #fff;

span {
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-weight: bold;
}
`;

export const PlataformContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 30px;
border-radius: 10px 10px 0 0px;
background: linear-gradient(to right,rgb(95, 0, 0),rgb(100, 9, 9),rgb(110, 11, 11));

span {
display: flex;
align-items: center;
margin-left: 10px;
font-weight: 700;
font-size: 14px;
color: #fff;
}

@media(max-width: 1779px) {
width: 190px;
height: 25px;

span {
margin-left: 10px;
font-weight: 600;
font-size: 13px;
}
}
`;

export const PlataformIcon = styled.img`
display: flex;
width: 15px;
height: 22px;
margin-top: 4px;

@media(max-width: 1779px) {
width: 13px;
height: 20px;
margin-top: 2px;
}
`;

export const GameContainer = styled.div`
display: flex;
width: 200px;
height: 120px;
border-radius: 10px;
margin-left: 23px;

@media(max-width: 1779px) {
width: 200px;
height: 130px;
margin-left: 23px;
}
`;

export const ImageContainer = styled.img`
display: flex;
width: 100%;
height: 100%;
margin-left: -100%;
margin-top: 30px;
height: fit-content;
border-radius: 0px 0px 10px 10px;

@media(max-width: 1779px) {
width: 190px;
margin-top: 25px;
margin-left: -190px;
}
`;

export const TitleSpan = styled.span`
display: flex;
height: fit-content;
width: fit-content;
margin-top: -116px;
margin-left: 240px;
font-weight: 700;
font-size: 16px;
color: #fff;

@media(max-width: 1779px) {
margin-top: -126px;
margin-left: 228px;
font-size: 14px;
}
`;

export const OperationalSystemContainer = styled.div`
display: flex;
position: absolute;
height: 28px;
width: 73px;
margin-left: 242px;
margin-top: 10px;
border-radius: 7px;
background-color:rgb(65, 1, 1);

span {
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 13px;
border-radius: 7px;
color: #fff;
}

@media(max-width: 1779px) {
margin-left: 230px;
margin-top: 10px;
}
`;

export const InfoContainer = styled.div`
display: flex;
width: 442px;
height: 50px;
margin-left: 242px;
margin-top: 55px;

@media(max-width: 1779px) {
width: 355px;
margin-left: 230px;
margin-top: 48px;
}
`;

export const DiscountContainer = styled.div`
display: flex;
position: absolute;
width: 58px;
height: 30px;
margin-top: 7px;
border-radius: 6px;
background: linear-gradient(to right,rgb(88, 44, 0),rgb(141, 96, 12),rgb(148, 96, 1));

span {
display: flex;
width: 100%;
align-items: center;
justify-content: center;
border-radius: 10px;
font-weight: 750;
font-size: 17px;
color: #fff;
}

@media(max-width: 1779px) {
width: 60px;
height: 30px;

span {
font-weight: 700;
font-size: 16px;
}
}
`;

export const PriceContainer = styled.span`
display: flex;
position: absolute;
width: fit-content;
height: fit-content;
margin-left: 70px;
margin-top: 10px;
font-weight: 800;
font-size: 18px;
color: #fff;

@media(max-width: 1779px) {
font-size: 18px;
}
`;

export const BuyContainer = styled.div`
display: flex;
position: absolute;
width: 140px;
height: 41px;
margin-left: 250px;
border-radius: 9px;
transition: box-shadow 0.3s ease;
background: linear-gradient(to right, #fff176, #ffee58, #fff200);

  &:hover {
    box-shadow: 0 0 4px #ffee58, 0 0 15px #fff200;
  }

  span  {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 7px;
  font-weight: bold;
  font-size: 16px;
  }

@media(max-width: 1779px) {
width: 110px;
height: 38px;
margin-left: 180px;

span {
font-size: 14px;
}
}
`;

export const ShoppingIconContainer = styled.img`
display: flex;
width: 20px;
height: 20px;
margin-top: 10px;
margin-left: 25px;

@media(max-width: 1779px) {
width: 17px;
height: 17px;
margin-left: 15px;
}
`;

export const FavoriteButton = styled.div`
display: flex;
position: absolute;
width: 41px;
height: 41px;
margin-left: 400px;
border-radius: 10px;
background-color: #fff;
transition: box-shadow 0.3s ease;

&:hover {
 box-shadow: 0 0 24px #ff073a;
}

@media(max-width: 1779px) {
width: 38px;
height: 38px;
margin-left: 300px;
}
`;

export const FavoriteIcon = styled.img`
display: flex;
width: 15px;
height: 15px;
padding: 4px;

@media(max-width: 1779px) {
padding: 3px;
}
`;