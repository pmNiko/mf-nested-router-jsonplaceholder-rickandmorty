export enum Paths {
  INDEX = "/shell",
  JSONPLACEHOLDER = "jsonplaceholder",
  RICK_AND_MORTY = "rickandmorty",
}

export const Routes = {
  index: {
    label: "Inicio",
    routerPath: Paths.INDEX,
  },
  jsonplaceholder: {
    label: "JSON Placeholder",
    routerPath: Paths.JSONPLACEHOLDER + "/*",
    relativePath: Paths.JSONPLACEHOLDER,
    absolutePath: Paths.INDEX + "/" + Paths.JSONPLACEHOLDER,
  },
  rickAndMorty: {
    label: "Rick and Morty",
    routerPath: Paths.RICK_AND_MORTY + "/*",
    relativePath: Paths.RICK_AND_MORTY,
    absolutePath: Paths.INDEX + "/" + Paths.RICK_AND_MORTY,
  },
};
