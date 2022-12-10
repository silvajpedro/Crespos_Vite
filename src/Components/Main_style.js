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
display: flex;
border: solid;
justify-content: space-between;
height: 14vh;
nav{
    width: 47vw;
    border: solid purple;
}
ul{
    height: 13vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border: solid;
}
li{
    color: #9767A9;
    font-family: "Roboto", sans-serif;
    font-weight:300;
    font-size: 16px;
    border: solid;
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
border: solid yellow;
width:31vw;
gap: 24px;
`
export const InputBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
border: solid purple;
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
/* border: solid; */
img{
    width: 2.4vw;
    &:hover{
        transform: scale(110%);
        cursor: pointer;
    }
}
`