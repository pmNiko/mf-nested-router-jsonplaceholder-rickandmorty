import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      console.log(key, val);
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    base: "./",
    plugins: [
      react(),
      federation({
        name: "jsonplaceholder",
        exposes: {
          "./RouterJSONPlaceholder": "./src/router/RouterJSONPlaceholder",
        },
        shared: ["react", "react-dom"],
      }),
    ],

    define: processEnvValues,
    server: {
      port: 3000,
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
