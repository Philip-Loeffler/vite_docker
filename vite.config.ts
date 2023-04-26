import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// strict port = exit if port is already in use
// specifiy which ip addresses the server should listen on
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
});
