import styled from "styled-components";

export const MainProductContainer = styled.div`
height: 550px;
width: 1490px;
margin: 90px auto 0 auto;

@media(max-width: 1779px) {
width: 1260px;
height: 460px;
margin: 90px auto 0 150px;
}
`;

export const ProductContainer = styled.div`
width: 900px;
height: 540px;
border: 1px solid #ff0000;
border-radius: 20px;
font-weight: bold;
cursor: pointer;
color: #ff0000;

  box-shadow:
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 5px #ff0000;

  background-image: url('https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5');
  background-size: 100%;
  background-repeat: no-repeat;

@media(max-width: 1779px) {
width: 800px;
height: 450px;
}
`;

export const InformationContainer = styled.div`
width: 100%;
height: 220px;
margin-top: 321px;
border-radius: 0px 0px 20px 20px;

background: linear-gradient(
to bottom,
rgba(173, 0, 0, 0) 0%,
rgba(187, 3, 3, 0.83) 50%,
rgb(148, 0, 20)100%
);

@media(max-width: 1779px) {
height: 195px;
margin-top: 256px;
}
`;

export const SteamContainer = styled.div`
display: flex;
height: 25px;
width: 85px;
border-radius: 10px;
margin-left: 30px;
margin-top: 15px;
background: linear-gradient(to right, #0b2b4b,rgb(10, 57, 90),rgb(10, 83, 136));

span {
  font-size: 14px;
  margin-left: 8px;
  margin-top: 3px;
  color: #fff;
}

@media(max-width: 1779px) {
margin-top: 25px;
}
`;

export const SteamIconContainer = styled.img`
width: 15px;
height: 20px;
border-radius: 50px;
margin-left: 10px;
margin-top: 3px;
`;

export const TitleSpan = styled.span`
display: flex;
width: fit-content;
font-size: 35px;
font-weight: 700;
margin-left: 30px;
margin-top: 5px;
color: #fff;

@media(max-width: 1779px) {
font-size: 28px;
margin-top: 15px;
}
`;

export const SecondarySpan = styled.span`
display: flex;
width: fit-content;
font-size: 20px;
font-weight: 500;
margin-top: 5px;
margin-left: 35px;
color: #fff;

@media(max-width: 1779px) {
font-size: 15px;
margin-top: 10px;
}
`;

export const InformationSpanThree = styled.span`
display: flex;
font-size: 29px;
font-weight: 900;
margin-top: 35px;
margin-left: 40px;
color: #fff;

@media(max-width: 1779px) {
font-size: 23px;
margin-top: 25px;
}
`;

export const BuyButton = styled.div`
display: flex;
width: 150px;
height: 40px;
margin-left: 210px;
margin-top: -45px;
border-radius: 10px;
background: linear-gradient(to right, #fff176, #ffee58, #fff200);
transition: box-shadow 0.3s ease;

span {
font-size: 20px;
font-weight: bold;
margin-top: 5px;
margin-left: 10px;
color: #000;
}

&:hover {
  box-shadow: 0 0 4px #ffee58, 0 0 15px #fff200;
}

@media(max-width: 1779px) {
width: 140px;
height: 35px;
margin-left: 180px;
margin-top: -35px;

span {
font-size: 18px;
margin-top: 5px;
margin-left: 10px;
}

}
`;

export const WishlistIcon = styled.img`
width: 23px;
height: 23px;
margin-top: 8px;
margin-left: 11px;

@media(max-width: 1779px) {
width: 20px;
height: 20px;
margin-top: 6px;
margin-left: 11px;
}
`;

export const FavoriteButton = styled.div`
width: 40px;
height: 40px;
margin-left: 375px;
margin-top: -40px;
border-radius: 10px;
background-color: #fff;
transition: box-shadow 0.3s ease;

&:hover {
 box-shadow: 0 0 24px #ff073a;
}

@media(max-width: 1779px) {
width: 35px;
height: 35px;
margin-left: 335px;
margin-top: -35px;
}
`;

export const HeartIconContainer = styled.img`
width: 20px;
height: 20px;
margin-top: 11px;
margin-left: 10px;

@media(max-width: 1779px) {
width: 15px;
height: 15px;
}
`;