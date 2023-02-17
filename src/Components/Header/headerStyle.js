import styled from "styled-components";

//Estilização Header
export const DivStyleHeader = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  max-width: 100vw;
  justify-content: center;
  background-color: white;
`;

//Estilização Button POKEDEX
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

// ----------------------------------------------------------------------
//ESTILIZAÇÃO DO HEADER A PARTIR DA POKEDEX
//Estilização do texto de voltar pagina
export const TextVoltaPagina = styled.p`
  display: flex;
  align-items: center;
  width: 300px;
  height: 36px;
  font-family: "Poppins";
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