import {
  useGetCharacters,
  useGetEpisodes,
  useGetLocations,
} from "../api/Rick&Morty";

export const loaderCharacters = () => useGetCharacters();
export const loaderEpisodes = () => useGetEpisodes();
export const loaderLocations = () => useGetLocations();
