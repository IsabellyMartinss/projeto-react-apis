import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);

  const [pagina, setPagina] = useState("home");

  const [estado, setEstado] = useState();

  const [pokedex, setPokedex] = useState([]);

  const [detalhes, setDetalhes] = useState([]);

  function headerDetails() {
    setPagina("details");
  }

  const detalhesPoke = (pokemonzinho) => {
    setDetalhes(pokemonzinho)
  }
    console.log(detalhes);
  //Função que de forma assíncrona faz um laço para requisição, o laço foi feito para requisitar o dado por ID por 20x, enquanto o parâmetro do laço não for <= 20 ele continua executando e dentro do laço a primeira execução é o incremento do parâmetro do laço. Na linha 23 foi criada uma variável pra tratar os dados do type (tipo de pokemon), tratando os dados, podemos pegar na api os dados que preferirmos, sem receber dados desnecessários. O for percorre o array de objetos que api retorna, buscando o dado solicitado (name). Então é feita uma verificação em arrayTypes (variável que guarda os tipos) pra quando arrayTypes.length for igual a 2 ele para de executar o laço for feito para pegar os tipos.   
  const getPokemon = async (arrayEstado, setEstado) => {
    const copiaEstado = [...arrayEstado];
    let pegaId = 0;
    while (pegaId <= 20) {
      pegaId = pegaId + 1;
      let arrayTypes = [];
      let arrayMoves = [];
      try {
        const resposta = await axios.get(`
        https://pokeapi.co/api/v2/pokemon/${pegaId}
        `);
        const objTypes = resposta.data.types;
        for (let i in objTypes) {
          let pegaTypes = objTypes[i].type.name;
          arrayTypes.push(pegaTypes);
          if (arrayTypes.length === 2) {
            break;
          }
        }
        const objMoves = resposta.data.moves;
        for (let i in objMoves) {
          let pegaMoves = objMoves[i].move.name
          arrayMoves.push(pegaMoves);
          if (arrayMoves.length === 4) {
            break;
          }
        }
        //A partir daqui é feito o tratamento dos dados, fazendo o push de um objeto contendo os dados solicitados para dentro do estado que é um spread operator do parâmetro da função.        
        copiaEstado.push({
          name: resposta.data.name,
          id: resposta.data.id,
          type: arrayTypes,
          img: resposta.data.sprites.other["official-artwork"].front_default,
          moves: arrayMoves,
          stats: resposta.data.stats,
          imgFrente: resposta.data.sprites.versions["generation-v"]["black-white"].front_default,
          imgCosta: resposta.data.sprites.versions["generation-v"]["black-white"].back_default
        });
        //Estado é o parâmetro da função e quando chamamos a função em algum lugar do código é preciso passar como parâmentro um estado que receberá o retorno da função(copiaEstado) e o respectivo setState que vai setar para o estado o retorno da função (copiaEstado, variável onde estão guardados os dados tratados). O setEstado é o retorno do try (try é um atributo do axios).
        setEstado(copiaEstado);
      } catch (error) {
        console.log(error.resposta);
      }
    }
  };

  //chamei o getPokemon dentro do useEffect, pois sempre que a função termina o try ela altera o estado. Se a função fosse chamada fora do useEffect ela entraria em looping infinito pois sempre que o estado fosse alterado ela chamaria a função novamente (laço infinito).
  useEffect(() => {
    getPokemon(pokemons, setPokemons);
  }, []);
  const data = { pokemons, setPokemons, estado, setEstado, pagina, setPagina, pokedex, setPokedex, headerDetails, detalhesPoke, detalhes };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
