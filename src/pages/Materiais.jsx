import { CardContainer, HeaderContainer, MateContainer, DownContainer} from "./Home.styled";

import Logo  from '../assets/Logo-svg.svg';

export default function Materiais() {
  return (
    <CardContainer>
                <HeaderContainer>
       <h1>
        <a href="/">LOCAPET</a>
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

      <MateContainer>
        <div>
            <img src="" alt="Arduino Uno R3" />
            <p>é a placa Arduino mais vendida e usada atualmente no Brasil e no mundo</p>
        </div>
        <div>
            <img src="" alt="Protoboard" />
            <p>sta Protoboard é uma excelente ferramenta para a montagem de circuitos eletrônico</p>
        </div>
        <div>
            <img src="" alt="jumpers" />
            <p>cabos ou fios elétricos com pontas devidamente preparadas para fazer as conexões elétricas</p>
        </div>
        <div>
            <img src="" alt="Baterias de 9V" />
            <p>Baterias de 9V</p>

        </div>
        <div>
            <img src="" alt="Lora (3.3V.)" />
            <p>Lora (3.3V.)</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>GPS</p>
        </div> 
        <div>
            <img src="" alt="" />
            <p>módulo de batimentos cardíacos</p>
        </div>
        <div>
            <img src="" alt="" />
            <p></p>
        </div>

      </MateContainer>

      <DownContainer>
        <h1>LOCAPET</h1>
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>




    </CardContainer>  )
}
