import styled from "styled-components";
import Cabeludo from "../assets/cabeludo.png"


export const Main = styled.main`
border: solid;
height: 200vh;
`
export const FirstSectionMain = styled.section`
border: solid red;
height: 100vh;

`
export const FirstDivSection = styled.div`

display: flex;
align-items: center;
justify-content: space-evenly;
height: 87vh;
background-image: url(${Cabeludo});
background-repeat: no-repeat;
background-size:100%;
border: solid purple;
h2,h3{
    display: flex;
    position: relative;
    top: 7vh;
    color: #ffff;
    line-height: 78px;
}
h2{
    font-size: 74px;
    border: solid;
    word-break: break-word;
    width: 30%;
}
`
export const SecondDivSection = styled.div`
`