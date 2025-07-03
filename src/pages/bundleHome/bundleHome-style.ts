import styled from "styled-components";

export const Container = styled.div`
height: fit-content;
width: 1510px;
margin-left: 495px;
margin-top: 90px;

@media(max-width: 2309px) {
margin-left: 380px;
}

@media(max-width: 1920px) {
margin-left: 200px;
}

@media(max-width: 1779px) {
width: 1238px;
margin-left: 156px;
}
`;

export const BundleContainer = styled.div`
height: 300px;
width: 98%;
margin-left: 20px;
border-radius: 15px;

@media(max-width: 1779px) {
height: 285px;
}
`;