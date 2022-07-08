import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import presets from "./presets/presets";

// https://vitejs.dev/config/

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd());

  return {
    base: viteEnv.VITE_BASE,
    plugins: [presets(env)],
    define: {
      "process.platform": null,
      "process.version": null,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        path: "path-browserify",
      },
    },
    server: {
      host: true,
      port: 8080,
      open: true,
      cors: true,
      strictPort: true,
    },
  };
});
