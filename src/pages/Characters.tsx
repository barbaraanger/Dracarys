import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllCharacters } from "../client/fetchCharacters";
import { CharacterCard } from "../Components/Characters";
import { CharacterProps } from "../types";

export function Characters(): React.ReactElement {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters
      .then((response) => {
        const seenNames = new Set();
        const uniqueCharacters = response.data.filter(
          (character: CharacterProps) => {
            if (seenNames.has(character.fullName)) {
              return false;
            }
            seenNames.add(character.fullName);
            return true;
          }
        );
        setCharacters(uniqueCharacters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      {characters.map((character) => {
        return (
          <Grid item md={3} key={character.name}>
            {" "}
            <CharacterCard {...character} />{" "}
          </Grid>
        );
      })}
    </Grid>
  );
}
