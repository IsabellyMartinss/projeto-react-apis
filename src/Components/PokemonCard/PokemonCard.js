import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import { goToDetailsPage } from "../../Router/coordinator";
import { ButtonStyle, Detail, EstiloBotao, IdStyle, Img, Linha1, Linha2, Linha3, MainCard, MainDiv, PokebolaImg, Texto, Title, Titulo, Type2 } from "./pokemonCardStyle";
import pokebola from "../../Assets/pokebola.png";
import bug from "../../Assets/bug.png";
import fire from "../../Assets/fire.png";
import flying from "../../Assets/flying.png";
import grass from "../../Assets/grass.png";
import poison from "../../Assets/poison.png";
import normal from "../../Assets/normal.png";
import water from "../../Assets/water.png";


export function PokemonCard() {
  const context = useContext(GlobalContext);
  const { pokemons, headerDetails, pokedex, setPokedex, detalhesPoke } = context;
  const navigate = useNavigate();
  console.log(pokedex);

  const capturaPokemon = (pokemon) => {

    const copiaPokedex = [...pokedex]

    const verificaCopia = copiaPokedex.find(
      (poke) => poke.id === pokemon.id
    );
    if (verificaCopia === undefined) {
      copiaPokedex.push(pokemon)
    }
    setPokedex(copiaPokedex)
  }

  return (
    <div>
      <Titulo>Todos Pokémons</Titulo>
      <MainDiv>
        {pokemons
        .filter((poke) => !pokedex.find((pokemon) => pokemon.id === poke.id))
        .map((poke, index) => {
          let color = "";
          switch (poke.type[0]) {
            case "grass":
              color = "#729F92";
              break;
            case "fire":
              color = "#EAAB7D";
              break;
            case "water":
              color = "#71C3FF";
              break;
            case "bug":
              color = "#76A866";
              break;
            case "normal":
              color = "#BF9762";
              break;
            default:
              break;
          }
          return (
            <MainCard key={index} color={color}>
              <Linha1>
                <IdStyle>#0{poke.id}</IdStyle>
                <Title>{poke.name}</Title>
                <Img src={poke.img} />
                <PokebolaImg src={pokebola} />
              </Linha1>
              <Linha2>
                {poke.type.map((a, i) => {
                  let imgType = "";
                  let colorType = "";
                  switch (poke.type[i]) {
                    case "grass":
                      colorType = "#70B873";
                      imgType = grass;
                      break;
                    case "fire":
                      colorType = "#F44900";
                      imgType = fire;
                      break;
                    case "water":
                      colorType = "#33A4F5";
                      imgType = water;
                      break;
                    case "bug":
                      colorType = "#316520";
                      imgType = bug;
                      break;
                    case "normal":
                      colorType = "#8A8A8A";
                      imgType = normal;
                      break;
                    case "poison":
                      colorType = "#AD61AE";
                      imgType = poison;
                      break;
                    case "flying":
                      colorType = "#6892B0";
                      imgType = flying;
                      break;
                    default:
                      break;
                  }
                  return (
                    <Type2 colorType={colorType}>
                      <img src={imgType} />
                      <Texto>{a}</Texto>
                    </Type2>
                  );
                })}
              </Linha2>
              <Linha3>
                <Detail onClick={() => {
                  goToDetailsPage(navigate);
                  headerDetails();
                  detalhesPoke(poke);
                }}>Detalhes</Detail>
                <ButtonStyle onClick={() => {
                  capturaPokemon(poke)
                }}><EstiloBotao>Capturar!</EstiloBotao></ButtonStyle>
              </Linha3>
            </MainCard>
          );
        })}
        </MainDiv>
    </div>
  );
}
