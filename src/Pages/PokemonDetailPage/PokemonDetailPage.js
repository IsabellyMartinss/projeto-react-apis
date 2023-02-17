import React, { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import { BarraStats, Coluna1, Coluna1e2, Coluna2, Coluna3, DivBarraStats, DivTextoProgresso, H1, IdStyle, Img, Linha1, Linha2, MainCard, MainDiv, Moves, MovesH2, PokeCosta, PokeFrente, StatsH2, Texto, TextoStats, TitlePoke, Type1, Type2 } from "./pokemonDetailStyle";
import bug from "../../Assets/bug.png";
import fire from "../../Assets/fire.png";
import flying from "../../Assets/flying.png";
import grass from "../../Assets/grass.png";
import poison from "../../Assets/poison.png";
import normal from "../../Assets/normal.png";
import water from "../../Assets/water.png";


export function DetailPage() {
    const context = useContext(GlobalContext);
    const { detalhes } = context;
    return (
        <div>
            <Header />
            <H1>Detalhes</H1>
            <MainDiv>
                <MainCard>
                    <Coluna1e2>
                        <Coluna1>
                            <PokeFrente src={detalhes.imgFrente} />
                            <PokeCosta src={detalhes.imgCosta} />
                        </Coluna1>
                        <Coluna2>
                            <StatsH2>Base Stats</StatsH2>
                            {detalhes.stats.map((stats, i) => {
                                return (
                                    <div key={i}>
                                        <DivBarraStats>
                                            <DivTextoProgresso>
                                                <TextoStats>
                                                    {stats.stat.name} {stats.base_stat}
                                                </TextoStats>
                                            </DivTextoProgresso>
                                            <BarraStats
                                                stats={stats.base_stat}
                                                class="progress-bar"
                                            ></BarraStats>
                                        </DivBarraStats>
                                    </div>
                                );
                            })}
                        </Coluna2>
                    </Coluna1e2>
                    <Coluna3>
                        <Linha1>
                            <TitlePoke>{detalhes.name}</TitlePoke>
                            <IdStyle>#0{detalhes.id}</IdStyle>
                            <Img src={detalhes.img} />
                            <Type1>
                                {detalhes.type.map((a, i) => {
                                    let imgType = "";
                                    let colorType = "";
                                    switch (detalhes.type[i]) {
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
                                    )
                                })}
                            </Type1>
                        </Linha1>

                        <Linha2>
                            <MovesH2><p>Moves:</p></MovesH2>
                                {detalhes.moves.map((moves, i) => {
                                    return (
                                        <Moves key={i}>
                                            <p>{moves}</p>
                                        </Moves>
                                    )
                                })}
                        </Linha2>
                    </Coluna3>
                </MainCard>
            </MainDiv>
        </div>
    )
}