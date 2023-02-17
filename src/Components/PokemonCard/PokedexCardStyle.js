import styled from "styled-components";
//Estilo Div Pai dos Cards
export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100vw;
  min-height: 100vh;
  gap: 2vw;
  row-gap: 9vh;
`;

export const Titulo = styled.h1`
font-family: 'Poppins', sans-serif;
display: flex;
align-items: center;
padding-left: 20px;
width: 420px;
height: 188px;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`

//Estilo Card Principal
export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
  padding-top: 20px;
  width: 400px;
  height: 180px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  `;

//Estilo img pokemon e da pokebola
export const Img = styled.img`
  position: absolute;
  width: 193px;
  height: 193px;
  left: 225px;
  top: -55px;
  z-index: 1;
`;

export const PokebolaImg = styled.img`
  position: absolute;
  width: 230px;
  height: 200px;
  left: 190px;
  top: -1px;
  z-index: 0;
`;

//Estilo Nome e ID[i]
export const IdStyle = styled.p`
font-family: 'Poppins', sans-serif;
width: 30px;
height: 19px;
left: 23px;
top: 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`;

export const Title = styled.p`
font-family: 'Poppins', sans-serif;
width: 151px;
height: 39px;
left: 23px;
top: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
text-transform: capitalize;
`;

//Estilo tipo dos pokemons
export const Type2 = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 8px;
gap: 17px;
width: 5.5vw;
height: 3.5vh;
left: 23px;
top: 89px;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
background: ${(props) => props.colorType};
`

export const Texto = styled.p` 
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
text-transform: capitalize;
`

export const Detail = styled.p`
width: 74px;
height: 24px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
`

export const Linha1 = styled.div`
height: 10vh;
`

export const Linha2 = styled.div`
display: flex;
gap: 1vh;
z-index: 1;
height: 10vh;
`

export const Linha3 = styled.div`
display:flex;
justify-content: space-between;
padding-right: 2vw;
align-items: center;
`

export const EstiloBotao = styled.p`
width: 78px;
height: 24px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: white;
`

export const ButtonStyle = styled.button`
display: flex;
font-family: 'Poppins', sans-serif;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FF6262;
border-radius: 8px;
border: none;
z-index: 2;
`