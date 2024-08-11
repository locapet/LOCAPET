import { CardContainer, HeaderContainer, MainContainer, DownContainer } from "./Home.styled";
export default function Home() {
  return (
    <CardContainer>
      
      <HeaderContainer>
        <h1 onClick={("/")}>LOCAPET</h1>
        <p onClick={("/")}>Guia De Uso</p>
        <p onClick={("/")}>Materiais</p>
        <p onClick={("/")}>Bibliografias</p>
        <p onClick={("/")}>Integrantes</p>
      </HeaderContainer>

      <MainContainer>
        <p>A LocaPet é uma coleira inovadora que rastreia o seu animal de estimação utilizando tecnologia Bluetooth, transmitindo a localização para um aplicativo.</p>
        <img src="" alt="Imagem do cachorro" />
      </MainContainer>
      <MainContainer>
        <img src="" alt="imagem do gato" />
        <p>O nosso projeto visa solucionar um problema relativamente comum: a perda e o desaparecimento de animais.</p>
      </MainContainer>

      <DownContainer>
        <h1>LOCAPET</h1>
        <p>Alguma dúvida? Entre em contato pelo 
        e-mail: locapet.support@gmail.com</p>
      </DownContainer>

      
    </CardContainer>
  );
}
