import styled from "styled-components";

export const Container = styled.div`
height: 540px;
width: 520px;
margin-top: -542px;
margin-left: 63%;
border-radius: 20px;

@media(max-width: 1779px) {
width: 420px;
height: fit-content;
margin-top: -450px;
margin-left: 66%;
}
`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
height: 100%;
width: 100%;
border-radius: 20px;
row-gap: 37px;
`;