import { NavLink, useLoaderData } from "react-router-dom";
import { Episode } from "../interfaces/Episode";

const Episodes = ({ pathname }: { pathname: string }) => {
  const episodes = useLoaderData() as Episode[];

  return (
    <div>
      <h4>Episodes</h4>

      <NavLink to={`/${pathname}/blog/home`}>Ir al home</NavLink>

      {episodes.length > 0 ? (
        episodes.map((episode) => <li>{episode.name}</li>)
      ) : (
        <h5>Loading....</h5>
      )}
    </div>
  );
};

export default Episodes;

export const loaderEpisodes = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/episode");
  const { results: episodes } = await data.json();
  return episodes;
};
