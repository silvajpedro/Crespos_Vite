import styled from "styled-components";

export const Footer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 119vh;
border: solid;
`
export const SectionFooterImages = styled.section`
display: flex;
justify-content: space-evenly;
border: solid red;
width: 90%;
height: 95vh;
`
export const BoxImages = styled.div`
display: flex;
flex-direction: column;

figure{
    overflow: hidden;
    &:hover{

    }
}
`
export const smallImageSection = styled.img`
width: ${props => props.primary ?"13.20vw":"14.5vw"};
transition: ease-in-out 0.5s;
&:hover{
    transform: scale(108%);

}

`
export const mediumImageSection = styled.img`
width: ${props => props.primary ? "20vw":"14.5vw"};
transition: ease-in-out 0.5s;
&:hover{
    transform: scale(110%);

}
`
export const bigImageSection = styled.img`
width: 20vw;
height: 92vh;
`
export const SecondFooterSection = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
color: #ffff;
width: 100%;
height: 15vh;
background-color: #9767A9;

address{
    /* border: solid; */
    width: 56%;
    font-style: normal;
    p{      
        word-break: break-word;
        line-break: strict;
    }
}
nav{
    display: flex;
    align-items: center;
    /* border: solid; */
}
button{
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #9767A9;
    cursor: pointer;
    height: 12vh;
    width: 9.5vw;
    font-size: 1.5vw;
    padding: 8px;
    color: #ffff;
    border:none ;
    &:hover{
        background-color:#AC95BB;
    }
}
`
export const Seta = styled.img`
width: 2.8vw;

`