import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    react(),
    tailwindcss(),
    cloudflare(),
  ],
  optimizeDeps: {
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/react-start",
      "@tanstack/react-start/client",
      "@tanstack/react-start/server",
    ],
  },
  environments: {
    ssr: {
      optimizeDeps: {
        exclude: [
          "@tanstack/start-server-core",
          "@tanstack/react-start",
          "@tanstack/react-start/client",
          "@tanstack/react-start/server",
        ],
      },
    },
    tanstack_start_app: {
      optimizeDeps: {
        exclude: [
          "@tanstack/start-server-core",
          "@tanstack/react-start",
          "@tanstack/react-start/client",
          "@tanstack/react-start/server",
        ],
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});

