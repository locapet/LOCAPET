import { CardContainer, HeaderContainer, MainContainer, DownContainer } from "./Home.styled";

import Logo  from '../assets/Logo-svg.svg';

import Cachorro from '../assets/inicio cachorro.png';

import Gato from '../assets/gato inicio.png';

export default function Home() {
  return (
    <CardContainer>
      
      <HeaderContainer>
       <h1>
        <a href="/"><img src= { Logo } alt="" width={200} /></a>
       </h1>

        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/GuiaDeUso">Guia De Uso</a>
        </div>

        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/Materiais">Materiais</a>
        </div>

        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/Bibliografias">Bibliografias</a>
        </div>

        <div>
        <a href="https://5173-annyellyp-locapet-67sesp33z5l.ws-us115.gitpod.io/integrantes">Integrantes</a>
        </div>

      </HeaderContainer>

      <MainContainer>
        <p>A segurança do seu pet 
        em primeiro lugar</p>
        <img src= {Cachorro} alt="Imagem do cachorro" />
      </MainContainer>

      <MainContainer>
        <img src= {Gato} alt="imagem do gato" />
        <p>Nossa coleira possui um design anatômico e uma bateria durável. O dispositivo conta com GPS, sensor de temperatura e sensor de batimentos cardíacos.</p>
      </MainContainer>

      <DownContainer>
        <img src= { Logo } alt="" width={200} />
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>

      
    </CardContainer>
  );
}
