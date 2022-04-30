import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import apiPlayer from "../../Services/ApiPlayer";
import apiTeams from "../../Services/ApiTeam";
import { Container, PlayerButton, PlayerList, PlayerText, Subtitle, TeamButton, TeamList, Title } from "./styles";

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

    setPlayers(data.response);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Container>
      <Image style={{ width: 100, height: 100 }} source={require("../../assets/nbaLogo.png")} />

      <Image style={{ width: "70%", height: "7%" }} source={require("../../assets/esportudoLogo.png")} />

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
                width: 60,
                height: 60,
                overflow: "visible",
              }}
              source={{
                uri: item.logo,
              }}
            />
          </TeamButton>
        )}
      />

      {/* Listagem do elenco de acordo com o time selecionado */}
      <Title>Elenco 2021/22</Title>
      <Subtitle>Nome | Data de nascimento | Altura | Peso | Anos de experiência | Universidade </Subtitle>

      <PlayerList
        data={player}
        keyExtractor={(item: { id: any }) => String(item.id)}
        renderItem={({ item }) => (
          <PlayerButton>
            <PlayerText>
              {item.firstname} {item.lastname} | {item.birth.date} | {item.height.meters}m | {item.weight.kilograms} kg
              | {item.nba.pro} anos | {item.college}
            </PlayerText>
          </PlayerButton>
        )}
      />
    </Container>
  );
};

export default Home;
