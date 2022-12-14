import React, {useState} from "react";
import * as S from "./Header_style.js"
import logo from "../../assets/logo_todecacho.png"
import facebook from "../../assets/facebook_media.png"
import youtube from "../../assets/youtube_media.png"
import instagram from "../../assets/instagram_media.png"
import lupa from "../../assets/pesquisa.png"
import { GlobalStyle } from "../GlobalStyle/globalstyle.js";

export default function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <GlobalStyle />
    <S.Header>
      <S.LogoBox id="logo">
        <img src={logo} alt="logo em cor rosa escrito to de cacho" />
      </S.LogoBox>
   <nav>
    <ul>
      <li>Dicas</li>
      <li>Cronograma Capilar</li>
      <li>ReferĂȘncias</li>
      <li>Produtos</li>
      <li>Cadastre-se</li>
      <li>Contato</li>
    </ul>
   </nav>
    <S.SectionHeader>
      <S.InputBox>
      <input type="search" id="search" style={ open === true ? {width:'14.5vw', visibility:'visible' }:{ width:'3vw', visibility:'hidden'}}  />
      <S.Lupa onClick={()=>{setOpen(!open)}} src={lupa} alt="" style={ open === true ? {right:'13vw'}: {right: '2vw'}} />
      </S.InputBox>
      <S.SectionImagesBox>
        <img src={facebook} alt="icone do facebook em roxo" />
        <img src={instagram} alt="" />
        <img src={youtube} alt="icone do youtube em roxo" />
      </S.SectionImagesBox>
    </S.SectionHeader>
    </S.Header>
    </>
  )
}