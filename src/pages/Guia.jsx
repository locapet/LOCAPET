import { CardContainer, HeaderContainer, PContainer, DownContainer} from "./Home.styled";

export default function Guia() {
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
      
      <PContainer>
        <div>
            <img src="" alt="imagem do celular" />
            <img src="" alt="imagem da coleira" />
            <p>Primeiramente, a coleira deverá estar carregada e ligada, e vai automaticamente estar em sincronização com o seu aplicativo. </p>
        </div>
        <div>
        <img src="" alt="imagem do gps" />
        <p>Na interface do aplicativo, será mostrada a localização do animal em tempo real.</p>
        </div>
        <div>
            <img src="" alt="imagem do coração" />
            <p>A coleira é feita de tecido à prova d'água e possui uma bateria duradoura, ideal para donos de pets fujões.</p>
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
