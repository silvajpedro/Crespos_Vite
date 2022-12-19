import styled from "styled-components";
import Cabeludo from "../assets/cabeludo.png"


export const Main = styled.main`
border: solid;
height: 630vh;
`
export const FirstSectionMain = styled.section`

height: 141vh;
background-color: #9767A9;
`
export const FirstDivSection = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
display: flex;
align-items: center;
justify-content: space-evenly;
height: 87vh;
background-image: url(${Cabeludo});
background-repeat: no-repeat;
background-size:100%;
h2,h3{
    display: flex;
    position: relative;
    top: 7vh;
    color: #ffff;
    line-height: 78px;
}
h2{
    font-size: 74px;
    word-break: break-word;
    width: 30%;
}
h3{
    width: 25%;
    line-height: 35px;
    font-size: 28px;
    word-break: break-word;
    font-weight: lighter;
    font-family: "Open Sans", sans-serif;
}
`
export const SecondDivSection = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap');

height: 40vh;
color: #ffff;
position: relative;
top: 5vh;
display: flex;
justify-content: center;
column-gap:2vw;
h4{
    width: 48%;
    font-family: 'Playfair Display', serif;
    font-size: 50px;
}
p{
    position: relative;
    top: 2.5vh;
    width: 34%;
    font-size: 22.2px;
    font-weight:lighter;
    
}
`
export const SecondSectionMain = styled.section`
position: relative;
top: -10vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
height:480vh;
border: solid firebrick;
div{
    position: absolute;
    top:54vh;
    background-color: #9767A9;
    width: 30vw;
    height: 50vh;
    border: solid orange;
}
figure{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid yellow;
    width: 45%;
    height: 106vh;
}
figure:nth-child(1){
    border: solid red;
   
}
figure:nth-child(2){
  margin-top: 42vh;
}
figure:nth-child(3), figure:nth-child(5){
  position: relative;
  top:-42vh;
}
`

export const HairImage = styled.img`
width: 43vw;
`