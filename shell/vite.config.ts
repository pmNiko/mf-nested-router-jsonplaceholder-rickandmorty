import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      federation({
        name: "mf-shell",
        filename: "mf-shell-entry.js",
        shared: ["react", "react-dom"],
        exposes: {},
        remotes: {
          "mf-jsonplaceholder": process.env.VITE_MF_URL_JSONPLACEHOLDER,
          "mf-rickandmorty": process.env.VITE_MF_URL_RICKANDMORTY,
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },

    base: process.env.VITE_BASENAME_SHELL,
  };
});
