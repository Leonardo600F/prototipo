import styled from "styled-components";

export const BuyContainer = styled.div`
display: flex;
height: 45px;
width: 140px;
position: absolute;
margin-left: 95px;
margin-top: 75px;
border-radius: 9px;
transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 4px #ffee58, 0 0 15px #fff200;
  }

  span {
display: flex;
font-size: 21px;
font-weight: 800;
margin-top: 8px;
margin-left: 5px;
color: #fff;
}

@media(max-width: 1779px) {
margin-top: 70px;

span {font-size: 18px}
}
`;

export const FavoriteButton = styled.div`
display: none;
width: 45px;
height: 45px;
position: absolute;
margin-left: 262px;
margin-top: 75px;
border-radius: 10px;
background-color: #fff;
transition: box-shadow 0.3s ease;

&:hover {
   box-shadow: 0 0 10px rgba(247, 218, 223, 0.3), 0 0 10px rgba(243, 0, 32, 0.2);    
  }

@media(max-width: 1779px) {
width: 42px;
height: 42px;
margin-top: 69px;
margin-left: 255px;
}
`;

export const Icon = styled.img`
display: flex;
width: 20px;
height: 20px;
margin-left: 12px;
margin-top: 12px;

@media(max-width: 1779px) {
width: 18px;
height: 18px;
margin-top: 13px;
}
`;

export const ShoppingIconContainer = styled.img`
display: none;
width: 23px;
height: 23px;
margin-top: 10px;
margin-left: 12px;

@media(max-width: 1779px) {
width: 20px;
height: 20px;
}
`;

export const Container = styled.div`
display: flex;
height: 250px;
width: 100%;
border: 1px solid #ff0000;
border-radius: 20px;
cursor: pointer;
color: #ff0000;

  box-shadow:
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 5px #ff0000;

    &:hover ${BuyContainer} {
  background: linear-gradient(to right, #fff176, #ffee58, #fff200);
  width: 140px;
  height: 45px;
  margin-left: 105px;
  margin-top: 75px;

  span {
  font-size: 17px;
  color: #000;
  font-weight: 700;
  margin-top: 11px;
  margin-left: 11px;
  }

@media(max-width: 1779px) {
  width: 135px;
  height: 41px;
  margin-left: 105px;
  margin-top: 70px;

  span {
  font-size: 15px;
  }
}

}

&:hover ${FavoriteButton} {
  display: flex;
}

&:hover ${BuyContainer} > ${ShoppingIconContainer} {
  display: flex;
}

@media(max-width: 1779px) {
height: 205px;
}
`;

export const ImageContainer = styled.img`
display: flex;
height: 100%;
width: 100%;
border-radius: 20px;
object-fit: cover;
object-position: center;
`;

export const SteamContainer = styled.div`
display: flex;
height: 25px;
width: 85px;
border-radius: 10px;
margin-top: -12px;
margin-left: -95%;
 background: linear-gradient(to right, #0b2b4b,rgb(10, 57, 90),rgb(10, 83, 136));

 span {
color: #fff;
margin-left: 8px;
margin-top: 3px;
font-size: 14px;
font-weight: 700;
}

@media(max-width: 1779px) {
height: 23px;
width: 83px;

span {
font-size: 13px;
font-weight: 600;
}
}
`;

export const SteamIconContainer = styled.img`
width: 15px;
height: 20px;
border-radius: 50px;
margin-left: 10px;
margin-top: 3px;

@media(max-width: 1779px) {
width: 13px;
height: 18px;
}
`;

export const InformationContainer = styled.div`
display: flex;
width: 100%;
height: 135px;
margin-top: 116px;
margin-left: -111px; 
border-radius: 0px 0px 20px 20px;

background: linear-gradient(
to bottom,
rgba(173, 0, 0, 0) 0%,
rgba(187, 3, 3, 0.83) 50%,
rgb(148, 0, 20)100%
);

@media(max-width: 1779px) {
height: 60%;
margin-top: 84px;
margin-left: -103px; 
}
`;

export const TitleSpan = styled.span`
display: flex;
font-size: 23px;
font-weight: 700;
margin-left: 20px;
margin-top: 30px;
color: #fff;

@media(max-width: 1779px) {
font-size: 19px;
}
`;

export const DiscountContainer = styled.div`
height: 35px;
width: 65px;
position: absolute;
margin-top: 80px;
margin-left: 20px;
border-radius: 9px;
background: linear-gradient(to right,rgb(112, 56, 0),rgb(141, 96, 12),rgb(212, 146, 23));

span {
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
font-size: 17px;
font-weight: 800;
color: #fff;
}

@media(max-width: 1779px) {
margin-top: 73px;

span {font-size: 15px;}

}
`;