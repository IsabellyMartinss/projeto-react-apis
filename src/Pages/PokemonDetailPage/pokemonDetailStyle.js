import styled from "styled-components";

export const H1 = styled.h1`
position: absolute;
width: 220px;
height: 72px;
left: 40px;
top: 220px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`

export const MainDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 188px;
height: 663px;
padding-bottom: 188px;
`

export const MainCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
columns: 1fr 1fr 2fr;
position: relative;
width: 95vw;
left: 0px;
top: 0px;
background-color: ${(props) => props.color};
border-radius: 37.8857px;
`

export const PokeFrente = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`

export const PokeCosta = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`

export const Coluna1 = styled.div`
display: flex;
position: relative;
height: 40vh;
`

export const Coluna2 = styled.div`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;
background: #FFFFFF;
border-radius: 12px;
`

export const Coluna1e2 = styled.div`
width: 47vw;
`

export const Coluna3 = styled.div`
display: flex;
align-items: baseline;
top: 50px;
height: 600px;
width: 30vw;
`

export const Linha1 = styled.div`
display:flex;
width: 200px;
top: 184px;
right: 10px;
padding-right: 2vw;
align-items: center;
`

export const Img = styled.img`
position: absolute;
width: 270px;
height: 270px;
left: 1000px;
top: -80px;
`

export const IdStyle = styled.p`
position: absolute;
width: 30px;
height: 19px;
left: 774px;
top: 24px;
font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`

export const TitlePoke = styled.p`
position: absolute;
width: 238px;
height: 58px;
left: 771px;
top: 39px;
font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #FFFFFF;
text-transform: capitalize;
`

//Estilo Moves

export const MovesH2 = styled.h2`
position: relative;
padding-left: 15px;
padding-top: 20px;
padding-bottom: 20px;
font-size: 2rem;
font-weight: 700;
`

export const Linha2 = styled.div`
display: flex;
flex-direction: column;
columns: 1fr 1fr 1fr 1fr;
align-items: start;
justify-items: center;
position: absolute;
font-family: sans-serif;
width: 292px;
height: 453px;
left: 771px;
top: 184px;
background: #FFFFFF;
border-radius: 8px;
text-transform: capitalize;
`

export const Moves = styled.div`
font-family: 'Montserrat', sans-serif;
display:flex;
align-items: center;
position: relative;
text-align: center;
padding: 10px;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
height: fit-content;
width: fit-content;
background: #ECECEC;
left: 10px;
top: 10px;
margin-top: 10px;
`

//Estilo tipo dos pokemons
export const Type1 = styled.div`
display: flex;
position: relative;
top: 100px;
left: 10px;
gap: 10px;
`

export const Type2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 8px;
gap: 17px;
width: 5.5vw;
height: 3.5vh;
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

//Estilo Barra Stats

export const BarraStats = styled.div`
  display: flex;
  --progress: ${(props) => props.stats};
  border-radius: 4px;
  height: 2vh;
  width: calc(var(--progress) * 1%);
  background-color: hsl(calc(var(--progress) * 0.7), 90%, 50%);
  `

export const DivBarraStats = styled.div`
  display: flex;
  position: relative;
  left: 154px;
  gap: 1px;
  margin: 3vh;
  width: 15vw;
  `

export const DivTextoProgresso = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const TextoStats = styled.p`
  border-top: 1px solid rgb(0,0,0,0.2);
  padding-top: 5px;
  display: flex;
  position: absolute;
  text-transform: capitalize;
  color: grey;
  font-size: 1.1rem;
  font-weight: 600;
  width: 25vw;
  `

export const StatsH2 = styled.p`
  position: relative;
  font-family: sans-serif;
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  `

//Estilo DivTotal

export const DivTotal = styled.div`
display: flex;
flex-direction: row;
color: grey;
font-size: 1.1rem;
font-weight: 800;
gap: 10px;
border-top: 1px solid rgb(0,0,0,0.2);
padding-top: 5px;
padding-left: 5px;
`