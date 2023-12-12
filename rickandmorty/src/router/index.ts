export enum Paths {
  INDEX = "/rickandmorty",
  CHARACTERS = "characters",
  EPISODES = "episodes",
  LOCATIONS = "locations",
}

export const Routes = {
  index: {
    label: "Home",
    routerPath: Paths.INDEX,
  },
  characters: {
    label: "Personajes",
    routerPath: Paths.CHARACTERS,
    absolutePath: Paths.INDEX + "/" + Paths.CHARACTERS,
  },
  episodes: {
    label: "Episodios",
    routerPath: Paths.EPISODES,
    absolutePath: Paths.INDEX + "/" + Paths.EPISODES,
  },
  locations: {
    label: "Localizaciónes",
    routerPath: Paths.LOCATIONS,
    absolutePath: Paths.INDEX + "/" + Paths.LOCATIONS,
  },
};
