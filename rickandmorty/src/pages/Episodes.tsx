import { useLoaderData } from "react-router-dom";
import { EpisodeResponse } from "../interfaces/Rick&MortyApi/Episodes";

export default () => {
  const episodes = useLoaderData() as EpisodeResponse[];

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
      {episodes.map(({ id, air_date, name, episode }) => (
        <div
          key={id}
          style={{
            padding: "1em",
            borderRadius: "5%",
            boxShadow: "2px 3px 2px 2px rgba(0, 0, 0, 0.3)",
            width: "250px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            overflow: "hidden",
          }}
        >
          <h5>{name}</h5>
          <p
            style={{
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            {air_date}
          </p>

          <h4>{episode}</h4>
        </div>
      ))}
    </div>
  );
};
