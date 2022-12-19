import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Header = styled.header`
position: sticky;
top: 0;
display: flex;
justify-content: space-between;
height: 14vh;
background-color: #ffff;
z-index: 1;
nav{
    display: flex;
    width: 47vw;
}
ul{
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 100%;
}
li{
    color: #9767A9;
    font-family: "Roboto", sans-serif;
    font-weight:300;
    font-size: 16px;
    &:hover{
        transform: scale(112%);
        cursor: pointer;
    }
}
`
export const LogoBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 19vw;
img{
    width: 8vw;
}
`
export const SectionHeader = styled.section`
display: flex;
align-items: center;
justify-content:space-evenly;
width:31vw;
gap: 24px;
`
export const InputBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
width: 16vw;
height: 7vh;
input{
    position: relative;
    right: 1vw;
    height: 4.5vh;
    border-radius: 30px;
    padding-left: 36px;
    width: 3vw;
    transition: ease-in-out 1.2s;
 &:focus{
    border: #9767A9 solid 2.5px;
 }
}
`
export const Lupa = styled.img`
position: absolute;
transition: ease-in-out 1.20s;
cursor: pointer;
z-index: 10;
`
export const SectionImagesBox = styled.section`
display: flex;
justify-content: space-evenly;
width: 11vw;
img{
    width: 2.4vw;
    &:hover{
        transform: scale(110%);
        cursor: pointer;
    }
}
`