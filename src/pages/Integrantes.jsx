import { CardContainer, HeaderContainer, AContainer, BContainer, NContainer, DownContainer} from "./Home.styled";

import Logo  from '../assets/Logo-svg.svg';

export default function Integrantes() {
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

      
      <AContainer>
        <img src="" alt="FT Anny" />
        <p>Anny Elly Pantoja - Responsável pela aquisição dos componentes físicos do projeto e pela integração entre eles</p>
        <button> 
        <a href="https://www.instagram.com/annyelly_pantoja?igsh=OGozM2Q0eXZvbTRm" target="_blank">Instagram</a>
        </button>
      </AContainer>


      <BContainer>
        <img src="" alt="FT Benando" />
        <p>Bernardo Xavier - Futuro designer digital, responsável pela interface do site e pelos aspectos estéticos do nosso projeto</p>
        <button>
        <a href="https://www.instagram.com/last_zey?igsh=MXY2Mjd6anA4c3p0ZA==" target="_blank">Instagram</a>
        </button>
      </BContainer>


      <NContainer>
        <img src="" alt="FT Nicole" />
        <p>Nicole de Sá - Responsável pelo desenvolvimento de software do projeto e pela sua conexão com os componentes físicos.</p>
        <button>
        <a href="https://www.instagram.com/eine_nick/" target="_blank">Instagram</a>
        </button>
      </NContainer>

      <DownContainer>
        <h1>LOCAPET</h1>
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>

    </CardContainer>
    )
}
