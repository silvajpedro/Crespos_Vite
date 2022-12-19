import styled from "styled-components";
import Cabeludo from "../assets/cabeludo.png"


export const Main = styled.main`
/* border: solid; */
height: 200vh;
`
export const FirstSectionMain = styled.section`

height: 140vh;
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
    /* border: solid; */
    word-break: break-word;
    width: 30%;
}
h3{
    width: 25%;
    line-height: 35px;
    /* border: solid; */
    font-size: 28px;
    word-break: break-word;
    font-weight: lighter;
    font-family: "Open Sans", sans-serif;
}
`
export const SecondDivSection = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap');

/* border: solid; */
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
    /* border: solid yellow; */
}
p{
    position: relative;
    top: 2.5vh;
    width: 34%;
    font-size: 22.2px;
    font-weight:lighter;
}
`