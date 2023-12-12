import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      federation({
        name: "mf-rickandmorty",
        filename: "mf-rickandmorty-entry.js",
        shared: ["react", "react-dom"],
        exposes: {
          "./RickAndMortyRouter": "./src/router/RickAndMortyRouter",
        },
        remotes: {},
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },

    base: process.env.VITE_BASENAME_RICKANDMORTY,
  };
});
