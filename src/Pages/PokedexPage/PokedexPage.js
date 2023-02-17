import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../Components/Header/Header";
import { PokedexCard } from "../../Components/PokemonCard/PokedexCard";

export function PokedexPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PokedexCard/>
    </>
  );
}