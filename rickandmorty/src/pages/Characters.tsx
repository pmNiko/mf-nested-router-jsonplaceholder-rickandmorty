import { useLoaderData } from "react-router-dom";
import { CharacterResponse } from "../interfaces/Rick&MortyApi/Caracters";

export default () => {
  const characters = useLoaderData() as CharacterResponse[];

  return (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap",
        gap: 40,
        color: "black",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            padding: "1em",
            borderRadius: "5%",
            boxShadow: "2px 3px 2px 2px rgba(0, 0, 0, 0.3)",
            width: "250px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            overflow: "hidden",
          }}
        >
          <h5>{character.name}</h5>
          <img
            width={100}
            src={character.image}
            alt={character.name}
            style={{
              borderRadius: "5%",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          />
          <p>{character.location.name}</p>
        </div>
      ))}
    </div>
  );
};
