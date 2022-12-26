import React from "react";
import * as S from "./Main_style.js";
import foto_espelho from "../../assets/cabelo no espelho.png";
import maju from "../../assets/NoPath - Copia (18).png";
import praia from "../../assets/NoPath - Copia (19).png";
import realeza from "../../assets/NoPath - Copia (49).png";
import familia from "../../assets/NoPath - Copia (55).png";
import banho from "../../assets/NoPath - Copia (56).png";
import last from "../../assets/NoPath - Copia (57).png";
import cacho from "../../assets/cacho.png"
import { GlobalStyle } from "../GlobalStyle/globalstyle.js";

export default function Main() {
  return (
    <>
    <GlobalStyle/>
      <S.Main>
        <S.FirstSectionMain>
          <S.FirstDivSection>
            <h2>Dicas e Truques</h2>
            <h3>De quem sabe muito sobre cabelos crespos</h3>
          </S.FirstDivSection>
          <S.SecondDivSection>
            <h4>7 passos para se apaixonar pelo seu cabelo crespo natural</h4>
            <p>
              Sabemos que a jornada para a aceitação do cabelo crespo natural é
              longa e nada fácil de trilhar. Afinal, é difícil se libetar das
              amarras e aprender a se amar depois de anos vivendo em uma
              sociedade preconceituosa que reprime as características mais
              comuns do ser humano, como a textura do seu cabelo. Se você está
              disposta a se aventura nesse caminho de autoconhecimento e
              aceitação, vem com a gente! E um segredo: não precisa ter medo!
            </p>
          </S.SecondDivSection>
        </S.FirstSectionMain>
        <S.SecondSectionMain>
          <figure>
            <S.HairImage src={foto_espelho} alt="foto de cabelo no espelho" />
            <div>
              <h2>1. Olhe para o espelho e toque no seu cabelo</h2>
              <figcaption>
                Olhando para o espelho, toque no seu cabelo com carinho, veja
                como é macio, totalmente diferente do que a sociedade fez você
                acreditar por toda a sua vida. Afinal, não é porque a sua
                textura é diferente do liso, que ele é duro, feio… Toque nele
                sem julgamentos e você vai sentir. Vai perceber que essa textura
                inclusive é incrível para penteados. Você já viu quanto
                penteados incríveis dá para fazer com o seu cabelo crespo? E o
                volume, então!? De invejar… É lindo e cheio de poder. É como
                coroa que nasceu com você.
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={maju} alt="foto da maju coutinho adulta e criança" />
            <div>
              <h2>2. Tenha referências</h2>
              <figcaption>
                Que tal parar de tentar se encaixar em padrões menores que
                você? O que a sociedade diz que é bonito, não importa, você é
                maior do que isso. As pessoas são diferentes e essa é a beleza
                da vida. Já pensou que chato todo mundo igual? Procure se
                inspirar em pessoas semelhantes. Com o corpo parecido, tom de
                pele similar e um cabelo crespo, como o seu… Mas não igual ao
                seu, porque você é única. Se inspire nessas pessoas, pessoas que
                você admira, mas não se esqueça de que você é tão incrível
                quanto elas, do jeitinho que você é.
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={praia} alt="foto na praia" />
            <div>
              <h2>3. Seja amável com seus detalhes</h2>
              <figcaption>
                Sabe aquele frizz que você tenta esconder? E aquele volume que
                você tenta abaixar? Quem disse que eles são feios? E quem são
                “eles” para dizer o que quer que seja? O seu volume, o seu
                frizz, são parte de você. Use-os ao seu favor, tente enxergar
                cada detalhe do seu cabelo com carinho.
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={realeza} alt="foto da rainha" />
            <div>
              <h2>4. Ignore as opiniões alheias</h2>
              <figcaption>
                Ouvir a opinião dos outros, principalmente as negativas, nunca
                levou ninguém a lugar nenhum. A sociedade é cruel e algumas
                pessoas também. Não se deixe levar por pessoas que só conseguem
                enxergar olhando de dentro de uma caixinha muito pequena para um
                mundo grande, lindo e cheio de diversidade. Levante a cabeça,
                balance o seu cabelo e saia da caixa porque o mundo é seu!
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={familia} alt="foto da familia" />
            <div>
              <h2>5. Procure as suas raízes</h2>
              <figcaption>
                Passar pela transição é uma das formas de encontrar as suas
                raízes, aquelas literais. Mas também é a porta de entrada para
                que você procure a sua ancestralidade, sua origem. Toda a
                história que conta porque você tem esse cabelo crespo. A sua
                história e a de tantas outras pessoas formam uma história só.
                Esta é cheia de luta e resistência. Então resista a todos que
                quiserem te colocar para baixo nessa jornada e se apegue a como
                a sua história é linda e cheia de força.
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={banho} alt="cabelo no banho " />
            <div>
              <h2>6. Respeite suas fases</h2>
              <figcaption>
                Você não precisa ter aquele cabelo enorme e super volumoso. Um
                cabelo crespo curto também é lindo, assim como o médio, aquele
                com duas texturas, durante a transição… Todos esses cabelos são
                seus, todos importantes e lindos a sua maneira. Respeite as
                fases do seu cabelo natural crespo e lembre-se que tudo passa,
                por mais difícil que seja a situação.
              </figcaption>
            </div>
          </figure>
          <figure>
            <S.HairImage src={last} alt="cabelos brancos" />
            <div>
              <h2>7. Tenha orgulho dele</h2>
              <figcaption>
                Se você chegou até aqui, é porque enfrentou uma sociedade
                inteira, entrou em uma luta difícil consigo mesma(o), mas
                aprendeu a enxergar toda a beleza que você carrega aí, no topo
                da sua cabeça. Agora que você conquistou e ama esse seu cabelo
                crespo natural, carregue-o com orgulho! Ele merece e você
                também!
              </figcaption>
            </div>
          </figure>
          <figure>
            <img src={cacho} alt="" />
          </figure>
        </S.SecondSectionMain>
      </S.Main>
    </>
  );
}
