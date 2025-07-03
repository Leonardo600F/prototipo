import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100%;
width: 100%;
border: 1px solid #ff0000;
border-radius: 15px;
cursor: pointer;
color: #ff0000;

  box-shadow:
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 0px #ff0000,
    0 0 5px #ff0000;
`;

export const ImageBanner = styled.img`
display: flex;
height: 100%;
width: 100%;
border-radius: 15px;
object-fit: cover;
object-position: 0px -62px;
cursor: pointer;

@media(max-width: 1779px) {
object-position: 0px -10px;
}
`;

export const InformationContainer = styled.div`
display: flex;
width: 100%;
height: 135px;
margin-top: 166px;
margin-left: -100%; 
border-radius: 0px 0px 20px 20px;
cursor: default;

background: linear-gradient(
to bottom,
rgba(173, 0, 0, 0) 0%,
rgba(187, 3, 3, 0.83) 50%,
rgb(148, 0, 20)100%
);

@media(max-width: 1779px) {
margin-top: 152px;
}
`;

export const Title = styled.span`
width: fit-content;
height: fit-content;
margin-top: -40px;
margin-left: 90px;
font-weight: 700;
font-size: 25px;
color: #fff;

@media(max-width: 1779px) {
font-size: 19px;
margin-left: 75px;
margin-top: -10px;
}
`;

export const DetailsContainer = styled.div`
display: flex;
align-items: center;
width: 61%;
margin-top: 35px;
border-radius: 20px;

@media(max-width: 1779px) {
height: 85px;
width: 63%;
margin-top: 48px;
}
`;

export const PlataformContainer = styled.div`
display: flex;
position: absolute;
align-items: center;
height: 50px;
width: 200px;
margin-left: 50px;
border: 1px solid #ff073a;;
box-shadow: 0 0 8px #ff073a, 0 0 16px #ff073a;
border-radius: 10px;

span {
font-size: 22px;
font-weight: bold;
color: #fff;
margin-left: 15px;
}

@media(max-width: 1920px) {
margin-left: 80px;
}

@media(max-width: 1779px) {
height: 45px;
width: 185px;
margin-left: 60px;

span {
font-size: 19px;
margin-left: 10px;
margin-top: -2px;
}
}
`;

export const PlataformIconContainer = styled.img`
width: 25px;
height: 35px;
margin-left: 55px;
border-radius: 50%;

@media(max-width: 1779px) {
height: 25px;
width: 19px;
margin-left: 50px;
}
`;

export const DiscountContainer = styled.div`
position: absolute;
height: 55px;
width: 90px;
margin-left: 350px;
border-radius: 9px;
background: linear-gradient(to right,rgb(112, 56, 0),rgb(141, 96, 12),rgb(212, 146, 23));

span {
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
font-size: 25px;
font-weight: 800;
color: #fff;
}

@media(max-width: 1920px) {
margin-left: 380px;
}

@media(max-width: 1779px) {
height: 45px;
width: 70px;
margin-left: 330px;

span {font-size: 20px}
}
`;

export const PricesContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
position: absolute;
height: fit-content;
width: fit-content;
margin-left: 470px;

span {
width: 100%;
height: 100%;
font-weight: bold;
color: #fff;

&:first-child {
    text-decoration: line-through;
    font-size: 18px;
    opacity: 0.7;
}

&:last-child {
    font-size: 24px;
    font-weight: 800;
    margin-top: -5px;
}
}

@media(max-width: 1920px) {
margin-left: 500px;
}

@media(max-width: 1779px) {
margin-left: 420px;

span {
    &:first-child {
        font-size: 14px;
    }
    
    &:last-child {
        font-size: 20px;
        margin-top: -3px;
    }
}
}

@media(max-width: 1200px) {
margin-left: 45%;
margin-top: 60px;

span {
    &:first-child {
        font-size: 12px;
    }
    
    &:last-child {
        font-size: 18px;
        margin-top: -2px;
    }
}
}

@media(max-width: 768px) {
margin-left: 35%;
margin-top: 55px;

span {
    &:first-child {
        font-size: 10px;
    }
    
    &:last-child {
        font-size: 16px;
        margin-top: -1px;
    }
}
}
`;

export const BuyContainer = styled.div`
display: flex;
position: absolute;
width: 160px;
height: 50px;
margin-left: 620px;
border-radius: 9px;
transition: box-shadow 0.3s ease;
cursor: pointer;
background: linear-gradient(to right, #fff176, #ffee58, #fff200);

  &:hover {
    box-shadow: 0 0 4px #ffee58, 0 0 15px #fff200;
  }

  span  {
  display: flex;
  align-items: center;
  padding-left: 12px;
  font-weight: bold;
  font-size: 21px;
  color: #000;
  }

  @media(max-width: 1920px) {
  margin-left: 650px;
  }

@media(max-width: 1779px) {
width: 145px;
height: 45px;
margin-left: 540px;

span {font-size: 18px}
}
`;

export const ShoppingIconContainer = styled.img`
width: 26px;
height: 26px;
margin-left: 10px;
margin-top: 11px;

@media(max-width: 1779px) {
width: 22px;
height: 22px;
margin-left: 15px;
}
`;

export const FavoriteButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: 50px;
height: 50px;
margin-left: 800px;
border-radius: 10px;
background-color: #fff;
cursor: pointer;
transition: box-shadow 0.3s ease;

&:hover {
 box-shadow: 0 0 24px #ff073a;
}
 
@media(max-width: 1920px) {
margin-left: 830px;
}

@media(max-width: 1779px) {
width: 45px;
height: 45px;
margin-left: 700px;
}
`;

export const FavoriteIcon = styled.img`
display: flex;
width: 22px;
height: 22px;

@media(max-width: 1779px) {
width: 19px;
height: 19px;
}
`;