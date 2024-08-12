import { CardContainer, HeaderContainer, PContainer, DownContainer} from "./Home.styled";

import Logo  from '../assets/Logo-svg.svg';

import Cachorro1 from '../assets/guia de uso 1.png'
import Cachorro2 from '../assets/guia2.png'

export default function Guia() {
  return (
    <CardContainer>
               <HeaderContainer>

        /* fazer componente do header todo */
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
      
      <PContainer>
        <div>
            <img src= {Cachorro1} alt="cachorro e tela de computador" width={1200} />
        </div>

        <div>
          <p>Tendo tanto a coleira quanto o programa de computador/celular, você poderá começar a usar o dispositivo. 

Utilizando a tecnologia LoRa, a interface do aplicativo mostrará a localização do seu pet, juntamente com os batimentos cardíacos e a temperatura.</p>
          <img src= {Cachorro2} alt="cachorro e setas com símbolos" width={1200} />

        </div>
        <div>
            <p>Você também poderá acessar essas informações com os horários em que foram coletadas.</p>
        </div>
      </PContainer>

      <DownContainer>
        <h1>LOCAPET</h1>
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>


    </CardContainer>
  )
}
