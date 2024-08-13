import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --azul: #003049;
    --laranja: #F26419;
    --cinza: E9E9E9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,700;1,700&display=swap');
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;

    }

    span {
        color: var(--laranja);
    }
`;

export const HeaderContainer = styled.div`
    


`

export const CardContainer = styled.div``


// HOME
export const MainContainer = styled.div`
     display: flex;
    align-items: center; 
    justify-content: space-between; 
   

    

`




export const DownContainer = styled.div`
     display: flex;
    align-items: center; 
    justify-content: space-between; 

`

export const PContainer = styled.div``

export const AContainer = styled.div``

export const BContainer = styled.div``

export const NContainer = styled.div``

export const MateContainer = styled.div``






