import axios from "axios";

const apiTeams = axios.create({
  baseURL: "https://api-nba-v1.p.rapidapi.com/",

  headers: {
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "1ffe295876msh25eb305e6c62da5p1af18cjsn99a9f0ae72ac",
  },
});

export default apiTeams;
