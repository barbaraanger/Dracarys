import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { envVariables } from "../environment";
import { CharacterCard } from "./CharacterCard/CharacterCard";

export function CharactersList(): React.ReactElement {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${envVariables.CHARACTERS_API_URL}`)
      .then((res) => {
        console.log(res.data);
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container style={{margin: '1vh'}}>
      {characters.map((character) => {
        return <CharacterCard character={character} />;
      })}
    </Grid>
  );
}
