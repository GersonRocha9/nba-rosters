import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import apiPlayer from "../../Services/ApiPlayer";
import apiTeams from "../../Services/ApiTeam";
import {
  Container,
  Info,
  PlayerButton,
  PlayerList,
  PlayerText,
  Subtitle,
  TeamButton,
  TeamList,
  TeamName,
  Title,
} from "./styles";

const Home = () => {
  let [team, setTeam] = useState({});
  let [player, setPlayers] = useState({});

  // Requisição da lista de times
  const getTeam = async () => {
    const { data } = await apiTeams.get("/teams/");
    setTeam(data.response.filter((team) => team.nbaFranchise === true && team.allStar === false));
  };

  // Requisição da lista de jogadores
  const getPlayer = async (id) => {
    const { data } = await apiPlayer.get(`/players?team=${id}`);

    setPlayers(
      data.response.sort(
        (a, b) => a.firstname.localeCompare(b.firstname) // Ordenação alfabética
      )
    );

    console.log(data.response);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Container>
      <Image style={{ width: 250, height: 50, marginTop: 50 }} source={require("../../assets/esportudoLogo.png")} />
      <Image style={{ width: 100, height: 100 }} source={require("../../assets/nbaLogo.png")} />

      <Title>Escolha seu time:</Title>

      {/* Listagem principal com os times da NBA */}
      <TeamList
        horizontal={true}
        data={team}
        keyExtractor={(item: { id: any }) => String(item.id)}
        renderItem={({ item }) => (
          // Botão para selecionar o time e listar os jogadores passando o id do time
          <TeamButton onPress={() => getPlayer(item.id)}>
            <Image
              style={{
                width: 50,
                height: 50,
                overflow: "visible",
              }}
              source={{
                uri: item.logo,
              }}
            />

            <TeamName>{item.name}</TeamName>
          </TeamButton>
        )}
      />

      {/* Listagem do elenco de acordo com o time selecionado */}
      <Title>Elenco 2021/22</Title>
      {/* <Subtitle>Nome | Data de nascimento | Altura | Peso </Subtitle> */}
      <Info>
        <Subtitle>Nome</Subtitle>
        <Subtitle>Nascimento</Subtitle>
        <Subtitle>Altura</Subtitle>
        <Subtitle>Peso</Subtitle>
      </Info>

      <PlayerList
        data={player}
        keyExtractor={(item: { id: any }) => String(item.id)}
        renderItem={({ item }) => (
          <PlayerButton>
            <PlayerText>
              {item.firstname} {item.lastname}
            </PlayerText>

            <PlayerText>{item.birth.date}</PlayerText>

            <PlayerText>{item.height.meters}m</PlayerText>

            <PlayerText>{item.weight.kilograms}kg</PlayerText>
          </PlayerButton>
        )}
      />
    </Container>
  );
};

export default Home;
