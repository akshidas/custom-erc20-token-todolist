import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            theme: "/src/theme",
            store: "/src/store",
            components: "/src/components",
            config: "/src/config/index.ts",
            utils: "/src/utils",
        },
    },
});
