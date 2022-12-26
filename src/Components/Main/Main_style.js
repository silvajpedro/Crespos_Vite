import styled from "styled-components";
import Cabeludo from "../../assets/cabeludo.png";

export const Main = styled.main`
  height: 572vh;
`;
export const FirstSectionMain = styled.section`
  height: 138vh;
  background-color: #9767a9;
`;
export const FirstDivSection = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 87vh;
  background-image: url(${Cabeludo});
  background-repeat: no-repeat;
  background-size: 100%;
  h2,
  h3 {
    display: flex;
    position: relative;
    top: 7vh;
    color: #ffff;
    line-height: 78px;
  }
  h2 {
    font-size: 74px;
    word-break: break-word;
    width: 30%;
  }
  h3 {
    width: 25%;
    line-height: 35px;
    font-size: 28px;
    word-break: break-word;
    font-weight: lighter;
    font-family: "Open Sans", sans-serif;
  }
`;
export const SecondDivSection = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&display=swap");

  height: 40vh;
  color: #ffff;
  position: relative;
  top: 5vh;
  display: flex;
  justify-content: center;
  column-gap: 2vw;
  h4 {
    width: 48%;
    font-family: "Playfair Display", serif;
    font-size: 50px;
  }
  p {
    position: relative;
    top: 2.5vh;
    width: 34%;
    font-size: 22.2px;
    font-weight: lighter;
  }
`;
export const SecondSectionMain = styled.section`
  position: relative;
  top: -8.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 442vh;
  /* border: solid red; */
  h2 {
    position: relative;
    display: flex;
    align-items: center;
    color: #ffff;
  }
  figure {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 106vh;
  }
  figure:nth-child(1) {
    height: 114vh;
  }
  figure:nth-child(2) {
    margin-top: 41vh;
  }
  figure:nth-child(4) {
    margin-top: 4vh;
  }
  figure:nth-child(6){
    top: 4vh;
  }
  figure:nth-child(3),
  figure:nth-child(5){
    position: relative;
    top: -34vh;
  }
  figure:nth-child(7){
    top: -30vh;
  }
  figure:nth-child(8) {
    justify-content: center;
    height: 58vh;
    img {
      width: 27vw;
      transition: ease-in-out 1s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  figcaption {
    width: 90%;
    font-size: 1.36vw;
    color: #ffff;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 54vh;
    background-color: #9767a9;
    width: 30vw;
    height: 50vh;
  }
  figure:nth-child(1) div {
    height: 58vh;
    h2 {
      top: 1vh;
      width: 74%;
      left: -2.4vw;
      height: 16vh;
      font-size: 2.2vw;
    }
  }
  figure:nth-child(2) div {
    h2 {
        height: 10vh;
      left: -2.5vw;
      font-size:  2.50vw;
    }
  }
  figure:nth-child(3) div {
    height: 39vh;
    top: 55vh;
    h2 {
      left: -3vw;
      top: 1.1vh;
      height: 14vh;
      display: block;
      width: 68%;
      font-size:  2.56vw;
    }
    figcaption {
      margin-top: 0.5vh;
    }
  }
  figure:nth-child(4) div {
    height: 39.5vh;
    top: 69vh;
    h2 {
      left: -1.2vw;
      height: 7.5vh;
      font-size:  2.1vw;
    }
    figcaption{
        font-size: 1.36vw;
    }
  }
  figure:nth-child(5) div {
    height: 44vh;
    h2 {
      left: -2vw;
      height: 8vh;
      font-size: 2.2vw;
    }
  }
  figure:nth-child(6) div {
    top: 65vh;
    height: 40vh;
    h2{
        height: 9vh;
        left: -3.5vw;
        font-size: 2.2vw;
    }
  }
  figure:nth-child(7) div {
    height: 40vh;
    h2{
        height: 9vh;
        left: -2vw;
        font-size: 2.5vw;
    }
  }
`;
export const HairImage = styled.img`
  width: 43vw;
`;
