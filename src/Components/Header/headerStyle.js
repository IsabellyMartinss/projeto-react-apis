import styled from "styled-components";

//Estilo Header
export const DivStyleHeader = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  max-width: 100vw;
  justify-content: center;
  background-color: white;
`;

//Estilo Button Pokédex
export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: -490px;
  height: 74px;
  width: 287px;
  border-radius: 8px;
  background: #33a4f5;
  border: none;
`;

export const TextButtonStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 287px;
  height: 70px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;

//Estilo Header pela pokedex
//Estilo do texto de voltar pagina
export const TextVoltaPagina = styled.p`
  display: flex;
  align-items: center;
  width: 300px;
  height: 36px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #1a1a1a;
`;

export const DivMainPokedex = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 100vw;
  height: 160px;
  padding-left: 100px ;
  background-color: white;
`;

export const ImgHeader = styled.img`
  position: absolute;
  top: 2.5vh;
  left: 36vw;
`

export const BotaoAdd= styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 226px;
height: 57px;
left: 1050px;
top: 51px;
background: #33A4F5;
border-radius: 8px;
border: none;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

export const BotaoExcluir= styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 226px;
height: 57px;
left: 1050px;
top: 51px;
background: #FF6262;
border-radius: 8px;
border: none;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`

