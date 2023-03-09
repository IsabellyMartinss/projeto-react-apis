import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { goToPokedexPage } from "../../Router/coordinator";
import { goToListPage } from "../../Router/coordinator";
import seta from "../../Assets/setaVoltar.png"
import {
  BotaoAdd,
  BotaoExcluir,
  ButtonStyle,
  DivMainPokedex,
  DivStyleHeader,
  ImgHeader,
  TextButtonStyle,
  TextVoltaPagina,
} from "./headerStyle";
import header from "../../Assets/header.png";
import { GlobalContext } from "../../GlobalState/GlobalContext";

export function Header() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { pagina, setPagina, pokedex, detalhes, RemovePokemon, capturaPokemon } = context;

  function headerPokedex() {
    setPagina("pokedex");
  }
  function headerHome() {
    setPagina("home");
  }

  //RENDERIZAÇÃO CONDICIONAL DA PAGINA HOME
  if (pagina === "home") {
    return (
      <DivStyleHeader>
        <div>
          <ImgHeader src={header} />
        </div>
        <ButtonStyle
          onClick={() => {
            headerPokedex();
            goToPokedexPage(navigate);
          }}
        >
          <TextButtonStyle>Pokédex</TextButtonStyle>
        </ButtonStyle>
      </DivStyleHeader>
    );
  }

  //RENDERIZAÇÃO CONDICIONAL - POKEDEX
  if (pagina === "pokedex") {
    return (
      <DivMainPokedex>
        <TextVoltaPagina
          onClick={() => {
            headerHome();
            goToListPage(navigate);
          }}
        >
          <img src={seta} /> Todos Pokémons
        </TextVoltaPagina>
        <div>
          <ImgHeader src={header} />
        </div>
      </DivMainPokedex>
    );
  }

  //RENDERIZAÇÃO CONDICIONAL - DETALHES
  if (pagina === "details") {
    return (
      <DivMainPokedex>
        <TextVoltaPagina
          onClick={() => {
            headerHome();
            goToListPage(navigate);
          }}
        >
          <img src={seta} /> Todos Pokémons
        </TextVoltaPagina>
        <div>
          <ImgHeader src={header} />
        </div>
        <div>
          {pokedex.find((pokemon) => pokemon.id === detalhes.id) ===
            undefined ? (
            <BotaoAdd onClick={() => { capturaPokemon(detalhes) }}>Adicionar a Pokédex</BotaoAdd>
          ) : (
            <BotaoExcluir onClick={() => { RemovePokemon(detalhes) }}>Excluir da Pokédex</BotaoExcluir>)}
        </div>
      </DivMainPokedex>
    );
  }
}
