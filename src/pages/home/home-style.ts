import styled from "styled-components";

export const HomeContainer = styled.div`
width: 100%;
background: linear-gradient(
to bottom,
rgb(120, 1, 18) 0%,
rgb(100, 0, 18) 50%,
rgb(80, 0, 16)100%
);
`;

export const MainContainer = styled.div`
width: 100%;
`;

export const InfoContainer = styled.div`
display: flex;
width: 58%;
height: 160px;
border-radius: 20px;
margin-left: 520px;
margin-top: 120px;
background-color: #660000;

span {
display: flex;  
height: fit-content;
font-size: 20px;
color: white;
font-weight: bold;

&:nth-child(2) {
    margin-top: 50px;
    margin-left: 20px;
}

&:nth-child(3) {
    font-size: 30px;
    margin-top: 70px;
    margin-left: -41px;
}


&:nth-child(5) {
    margin-top: 50px;
    margin-left: 20px;
}

&:nth-child(6) {
    font-size: 30px;
    margin-top: 70px;
    margin-left: -107px;
}

&:nth-child(8) {
    margin-top: 50px;
    margin-left: 20px;
}

&:nth-child(9) {
    font-size: 30px;
    margin-top: 70px;
    margin-left: -87px;
}
}

@media(max-width: 2309px) {
width: 1470px;
margin-left: 400px;
}

@media(max-width: 1920px) {
width: 1470px;
height: 140px;
margin-left: 212px;
}

@media(max-width: 1779px) {
width: 1260px;
margin-left: 150px;
margin-top: 90px;

span {
&:nth-child(2) {
    margin-top: 40px;
    margin-left: 20px;
    
}

&:nth-child(3) {
width: 152px;
font-size: 25px;
margin-top: 65px;
margin-left: -41px;
}


&:nth-child(5) {
    margin-top: 40px;
    margin-left: 20px;
}

&:nth-child(6) {
    font-size: 25px;
    margin-top: 65px;
    margin-left: -107px;
}

&:nth-child(8) {
    margin-top: 40px;
    margin-left: 20px;
}

&:nth-child(9) {
    font-size: 25px;
    margin-top: 65px;
    margin-left: -88px;
    
}
}
}

@media(max-width: 1200px) {
width: 90%;
margin-left: 5%;
margin-top: 60px;
height: auto;
flex-wrap: wrap;
padding: 20px;

span {
    &:nth-child(2) {
        margin-left: 10px;
        margin-top: 30px;
    }
    
    &:nth-child(3) {
        font-size: 24px;
        margin-left: -20px;
        margin-top: 50px;
    }
    
    &:nth-child(5) {
        margin-left: 10px;
        margin-top: 30px;
    }
    
    &:nth-child(6) {
        font-size: 24px;
        margin-left: -60px;
        margin-top: 50px;
    }
    
    &:nth-child(8) {
        margin-left: 10px;
        margin-top: 30px;
    }
    
    &:nth-child(9) {
        font-size: 24px;
        margin-left: -50px;
        margin-top: 50px;
    }
}
}

@media(max-width: 768px) {
width: 95%;
margin-left: 2.5%;
margin-top: 40px;
flex-direction: column;
align-items: center;
text-align: center;

span {
    &:nth-child(2) {
        margin-left: 0;
        margin-top: 10px;
    }
    
    &:nth-child(3) {
        font-size: 20px;
        margin-left: 0;
        margin-top: 5px;
    }
    
    &:nth-child(5) {
        margin-left: 0;
        margin-top: 10px;
    }
    
    &:nth-child(6) {
        font-size: 20px;
        margin-left: 0;
        margin-top: 5px;
    }
    
    &:nth-child(8) {
        margin-left: 0;
        margin-top: 10px;
    }
    
    &:nth-child(9) {
        font-size: 20px;
        margin-left: 0;
        margin-top: 5px;
    }
}
}
`;

export const VerifiedIconContainer = styled.img`
width: 55px;
height: 55px;
margin-top: 55px;
margin-left: 60px;

@media(max-width: 1779px) {
margin-top: 45px;
}

@media(max-width: 768px) {
margin-left: 0;
margin-top: 20px;
}
`;

export const ShieldIconContainer = styled.img`
width: 55px;
height: 55px;
margin-left: 15%;
margin-top: 50px;

@media(max-width: 1779px) {
margin-top: 45px;
}

@media(max-width: 768px) {
margin-left: 0;
margin-top: 20px;
}
`;

export const ControllerIconContainer = styled.img`
width: 55px;
height: 55px;
margin-left: 18%;
margin-top: 50px;

@media(max-width: 1779px) {
margin-top: 45px;
}

@media(max-width: 768px) {
margin-left: 0;
margin-top: 20px;
}
`;

export const InfoIcons = styled.img`
display: flex;
width: 60px;
height: 60px;
`;

export const InfoSpan = styled.span`
font-weight: 800;
margin-left: 140px;
color: #fff;
`;