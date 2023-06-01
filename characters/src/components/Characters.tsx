import { NavLink, useLoaderData } from "react-router-dom";
import { Character } from "../interfaces/Character";

const Characters = () => {
  const characters = useLoaderData() as Character[];

  return (
    <div>
      <h4>Characters</h4>

      <NavLink to="/shell/characters">Ir al home</NavLink>

      {characters.length > 0 ? (
        characters.map((character) => <li>{character.name}</li>)
      ) : (
        <h5>Loading....</h5>
      )}
    </div>
  );
};

export default Characters;

export const loaderCharacters = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const { results: character } = await data.json();
  return character;
};
