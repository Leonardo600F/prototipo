import styled from "styled-components";

export const Container = styled.div`
display: flex;
max-width: 97%;
width: 365px;
height: 410px;
border-radius: 20px;
transition: 0.3s;

&:hover {
background-color: rgb(250, 38, 38);
}

@media(max-width: 1779px) {
width: 295px;
height: 408px;
}
`;

export const BuyContainer = styled.div`
display: flex;
width: 100px;
height: 30px;
margin-left: 105px;
margin-top: -32px;
border-radius: 9px;
transition: box-shadow 0.3s ease;

span {
font-size: 20px;
font-weight: 800;
border-radius: 9px;
color: #fff;
}

  &:hover {
    box-shadow: 0 0 4px #ffee58, 0 0 15px #fff200;
  }

  @media(max-width: 1779px) {
  margin-top: -27px;
  span{font-size: 18px;}
  }
`;

export const ShoppingIconContainer = styled.img`
display: none;
width: 22px;
height: 22px;
margin-left: 44px;
margin-top: 8px;

  @media(max-width: 1779px) {
  margin-left: 25px
  }
`;

export const FavoriteButton = styled.div`
position: absolute;
display: none;
width: 35px;
height: 35px;
right: 10px;
margin-top: 125px;
border-radius: 10px;
background-color: #fff;
transition: box-shadow 0.3s ease;

&:hover {
 box-shadow: 0 0 24px #ff073a;
}
`;

export const FavoriteIcon = styled.img`
display: flex;
width: 15px;
height: 15px;
padding-top: 2px;
padding-left: 2px;
`;

export const PromoBannerContainer = styled.div`
position: relative;
height: 400px;
width: 350px;
border-radius: 20px;
background: linear-gradient(to right,rgb(95, 0, 0),rgb(100, 9, 9),rgb(110, 11, 11));
cursor: pointer;

&:hover > ${BuyContainer} {
  background: linear-gradient(to right, #fff176, #ffee58, #fff200);
  width: 220px;
  height: 40px;
  margin-top: -37px;

  span {
  color: #000;
  font-weight: 700;
  padding-top: 5px;
  padding-left: 10px;
  }

  @media(max-width: 1779px) {
  width: 160px;
  margin-top: -36px;

  span {
  padding-top: 8px;
  }
  }
}

&:hover ${FavoriteButton} {
  display: flex;
}

&:hover > ${BuyContainer} > ${ShoppingIconContainer} {
  display: block;
}

@media(max-width: 1779px) {
width: 290px;
}
`;

export const PlataformContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 30px;
border-radius: 20px 20px 0px 0px;
background: linear-gradient(to right,rgb(95, 0, 0),rgb(100, 9, 9),rgb(110, 11, 11));

span {
display: flex;
align-items: center;
margin-left: 10px;
font-size: 14px;
font-weight: 700;
color: #fff;
}
`;

export const PlataformIcon = styled.img`
display: flex;
height: 20px;
width: 13px;
`;

export const ImageBannerContainer = styled.div`
display: flex;
width: 100%;
height: 170px;
object-fit: cover;
object-position: center;
`;

export const ImageBanner = styled.img`
display: flex;
width: 100%;
height: 170px;
object-fit: cover;
object-position: center;
`;

export const GameName = styled.span`
display: flex;
height: 18px;
width: 85%;
margin-top: 25px;
margin-left: 25px;
font-weight: 700;
font-size: 16px;
color: #fff;
`;

export const OperationalSystemContainer = styled.div`
display: flex;
height: 20px;
width: 67px;
margin-top: 15px;
margin-left: 28px;
border-radius: 7px;
background-color:rgb(65, 1, 1);

span  {
display: flex;
margin-left: 8px;
font-size: 12px;
font-weight: 700;
color: #fff;
}
`;

export const DiscountContainer = styled.div`
display: flex;
height: 35px;
width: 70px;
margin-top: 60px;
margin-left: 25px;
border-radius: 6px;
background: linear-gradient(to right,rgb(88, 44, 0),rgb(141, 96, 12),rgb(148, 96, 1));

span {
display: flex;
width: 100%;
padding-top: 5px;
padding-left: 13px;
border-radius: 10px;
font-size: 18px;
font-weight: 800;
color: #fff;
}

@media(max-width: 1779px) {
height: 30px;
width: 65px;

span {
font-size: 15px;
}
}
`;