import styled, { css } from "styled-components";

interface SearchProps {
  openSearchBar: boolean
}

interface ClearButtonProps {
  clearButton: boolean;
}

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border box;
position: sticky;
height: 100px;
width: 100%;
top: 0%;
z-index: 1;

background: linear-gradient(
to bottom,
rgb(200, 0, 32) 0%,
rgb(190, 0, 27) 50%,
rgb(185, 0, 23)100%
);
box-shadow: inset 2px 2px 5px rgba(120, 0, 20, 0.3), inset -2px -2px 5px rgba(255, 100, 120, 0.2);

@media(max-width: 1920px) {
height: 90px;
}

@media(max-width: 819px) {
height: 70px;
}
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15px;

@media(max-width: 819px) {
margin-left: 0px;
}
`;

export const Logo = styled.span`
font-family: 'Orbitron', sans-serif;
font-size: 40px;
font-weight: 700;
margin-left: 20px;
cursor: pointer;
color: #fff;

@media(max-width: 1920px) {
font-size: 35px;
}

@media(max-width: 819px) {
font-size: 27px;
}
`;

export const SearchContainer = styled.div`
display: flex;
width: 610px;

@media(max-width: 1920px) {
width: 590px;
}

@media(max-width: 819px) {
display: none;
}

`;

export const SearchInputContainer = styled.div<SearchProps>`
display: flex;
width: ${({ openSearchBar }) => openSearchBar ? '100%' : '300px'};
border: ${({ openSearchBar }) => openSearchBar ? '3px solid transparent' : '1px solid #d3d3d3'};                       
border-radius: 40px;
height: 50px;
background-color: #fff;
transition: 0.3s;

  ${({ openSearchBar }) =>
    openSearchBar &&
    css`
      box-shadow:
        0 0 5px #e60026,
        0 0 10px #ff0033,
        0 0 15px #ff4d4d;
    `}

@media(max-width: 819px) {
width: ${({ openSearchBar }) => openSearchBar ? '100%' : '250px'};
height: 35px;
}
`;

export const SearchInput = styled.input`
height: 95%;
width: 100%;
border: none;
outline: none;
padding-left: 17px;
border-radius: 40px;
font-size: 16px;

@media(max-width: 819px) {
font-size: 12px;
}
`
export const SearchIconButton = styled.div`
display: flex;
width: 45px;
height: 35px;
border-radius: 50%;
margin-top: 8px;
margin-right: 10px;
background-color: #fff;
cursor: pointer;

@media(max-width: 819px) {
width: 35px;
height: 25px;
margin-top: 5px;
}
`;

export const ClearButton = styled.button<ClearButtonProps>`
display: ${({ clearButton }) => clearButton ? 'flex' : 'none'};
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
margin-top: 9px;
margin-right: 10px;
border-radius: 50%;
border: none;
transition: .4s;
cursor: pointer;

&:hover {
background-color:rgb(153, 78, 78);
}
`;

export const CloseImg = styled.img`
width: 25px;
`;

export const SearchIcon = styled.img`
display: flex;
width: 20px;
height: 20px;
margin-top: 9px;
margin-left: 7px;

@media(max-width: 819px) {
width: 15px;
height: 15px;
margin-top: 6px;
}
`;

export const ProductsIconContainer = styled.img`
display: flex;
width: 35px;
height: 45px;
margin-top: 28px;
margin-left: 10px;
cursor: pointer;

@media(max-width: 1920px) {
width: 30px;
height: 40px;
margin-top: 24px;
}

`;

export const GamesContainer = styled.div`
display: flex;
width: 120px;
height: 100%;
background-color: none;
cursor: pointer;

span {
display: flex;
font-size: 20px;
font-weight: 700;
align-items: center;
margin-left: 10px;
color: #fff;
}

&:hover {
  background: linear-gradient(
    to bottom,
    rgb(129, 0, 19)0%,
    rgb(78, 0, 10) 50%,
    rgba(34, 0, 0, 0.25) 100%
  );
}

&:hover > div {
display: block;
}

@media(max-width: 1920px) {
span {font-size: 15px;}
}

@media(max-width: 819px) {
display: none;
}
`;

export const GiftsContainer = styled.div`
display: flex;
width: 155px;
height: 100%;
background-color: none;
cursor: pointer;

&:hover {
  background: linear-gradient(
    to bottom,
    rgb(129, 0, 19)0%,
    rgb(78, 0, 10) 50%,
    rgba(34, 0, 0, 0.25) 100%
  );
}

@media(max-width: 819px) {
display: none;
}

span {
display: flex;
font-size: 20px;
font-weight: 700;
align-items: center;
margin-left: 10px;
color: #fff;
}

&:hover > div {
display: block;
}

@media(max-width: 1920px) {
span {font-size: 15px;}
}
}
`;

export const UserContainer = styled.div`
display: flex;
width: 300px;
height: 100%;

@media(max-width: 819px) {
align-items: center;
width: 115px;
}
`;

export const ShoppingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 50px;
margin-top: 27px;
margin-left: 15%;
border-radius: 20px;
background-color: rgb(153, 78, 78);

@media(max-width: 1920px) {
width: 85px;
height: 45px;
margin-top: 24px;
}

@media(max-width: 819px) {
display: none;
}
`;

export const ShoppingIconContainer = styled.img`
height: 50%; 
width: 50%; 
object-fit: contain; 
margin: 0; 
cursor: auto;

@media(max-width: 1920px) {
height: 45%; 
width: 45%; 
}
`;

export const LoginContainer = styled.div`
display: flex;
width: 110px;
height: 50px;
margin-top: 26px;
margin-left: 25px;
border-radius: 20px;
background-color: none;
cursor: pointer;

span {
height: fit-content;
margin-left: 10px;
margin-top: 18px;
font-size: 15px;
font-weight: bold;
color: #fff;
}

&:hover {
background: linear-gradient(
to bottom,
rgb(121, 0, 16)100%
);
box-shadow: inset 2px 2px 5px rgba(134, 0, 27, 0.3), inset -2px -2px 5px rgba(3, 0, 0, 0.2);
}

@media(max-width: 1920px)  {
height: 45px;
margin-top: 24px;

span {
margin-top: 14px;
margin-left: 8px;
}
}

@media(max-width: 819px) {
width: 100px;
height: 40px;
margin-top: 0px;
margin-left: 0px;

span {
font-size: 13px;
margin-top: 13px;
}
`;

export const LoginIconContainer = styled.img`
width: 25px; 
height: 35px;
margin-top: 10px; 
margin-left: 10px;

@media(max-width: 1920px) {
margin-top: 6px;
}

@media(max-width: 819px) {
margin-top: 4px;
}
`;

export const GamesDropDownMenu = styled.div`
display: none;
flex-direction: column;
box-sizing: border-box;
position: absolute;
width: 300px;
margin-top: 100px;
margin-left: -88px;
border-radius: 10px;
transition: 0.5s;
background-color: #d2d2d2;

@media(max-width: 1920px) {
  margin-top: 90px;
}
`;

export const GamesDropDownMenuContent = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
width: 280px;
height: 50px;
margin: 10px;
column-gap: 10px;
border-radius: 10px;
cursor: pointer;

span {
font-weight: 700;
color: #000;
}

&:hover  {
background: linear-gradient(
to bottom,
rgb(128, 0, 19) 0%,
rgb(172, 0, 26) 50%,
rgb(236, 0, 32)100%
);
box-shadow: inset 2px 2px 5px rgba(120, 0, 20, 0.3), inset -2px -2px 5px rgba(255, 100, 120, 0.2);
}
`;

export const GiftCardsDropDownMenu = styled.div`
display: none;
flex-direction: column;
box-sizing: border-box;
position: absolute;
width: 300px;
margin-top: 100px;
margin-left: -71px;
border-radius: 10px;
transition: 0.5s;
background-color: #d2d2d2;

@media(max-width: 1920px) {
  margin-top: 90px;
}
`;

export const GiftCardsDropDownMenuContent = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
width: 280px;
height: 50px;
margin: 10px;
border-radius: 10px;
column-gap: 10px;
cursor: pointer;

span  {
color: #000;
font-weight: 700;
}

&:hover  {
background: linear-gradient(
to bottom,
rgb(128, 0, 19) 0%,
rgb(172, 0, 26) 50%,
rgb(236, 0, 32)100%
);
box-shadow: inset 2px 2px 5px rgba(120, 0, 20, 0.3), inset -2px -2px 5px rgba(255, 100, 120, 0.2);
}
`;

export const DropDownMenuIconContainer = styled.img`
width: 20px;
height: 20px;
margin-left: 10px;
`;