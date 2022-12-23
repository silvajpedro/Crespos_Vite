import React from "react";
import * as S from "./Footer_style.js"
import rei from "../assets/NoPath - Copia (52).png"
import gloria from "../assets/gloriamaria.png"
import beyonce from "../assets/NoPath - Copia (54).png"
import killmonger from  "../assets/NoPath - Copia (53).png"
import thais from  "../assets/NoPath - Copia (14).png"
import man from  "../assets/NoPath - Copia (11).png"
import snoop from "../assets/cabelo snoopydog.png"
import bighair from  "../assets/NoPath - Copia (10).png"
import tranca from  "../assets/NoPath - Copia (12).png"
import beard from  "../assets/NoPath - Copia (9).png"
export default function Footer(){
    return(
        <>
        <S.Footer>
        <S.SectionFooterImages>
            <S.BoxImages>
            <figure>
                <S.mediumImageSection src={rei} primary alt="" />
            </figure>
            <figure>
                <S.mediumImageSection src={gloria} primary alt="" />
            </figure>

            </S.BoxImages>
            <S.BoxImages>
            <figure>
                <S.smallImageSection src={beyonce} primary alt="" />
            </figure>
            <figure>
                <S.smallImageSection src={killmonger} primary style={{height:'30.62vh'}} alt="" />
            </figure>
            <figure>
                <S.smallImageSection src={thais} alt="" primary />
            </figure>
            </S.BoxImages>
            <S.BoxImages>
                <figure>
                <S.mediumImageSection src={man} style={{height:'63.4vh'}} alt="" />
                </figure>
                <figure>
                <S.smallImageSection src={snoop} style={{height:'25vh'}} alt="" />
                </figure>
            </S.BoxImages>
            <S.bigImageSection src={bighair} style={{height:'89vh'}} alt="" />
            <S.BoxImages>
            <figure>
                <S.smallImageSection src={tranca} alt="" />
                </figure>
                <figure>
                <S.mediumImageSection style={{height:'60.5vh'}} src={beard} alt="" />
                </figure>
            </S.BoxImages>
        </S.SectionFooterImages>
        <S.SecondFooterSection>
            <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/464644886562532897/ e https://todecacho.com.br/cabelo-crespo-natural/</p>
            <nav>
                <button>página</button>
                <button>voltar</button>
                <button>próxima</button>
            </nav>
        </S.SecondFooterSection>
        </S.Footer>
        </>
    )
}