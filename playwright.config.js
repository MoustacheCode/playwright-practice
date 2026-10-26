import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
    testDir: "./tests",
    outputDir: "test-results",
    reporter: "html",

    use: {
        browserName: "chromium",
        headless: false,
        screenshot: "only-on-failure",
        baseURL: process.env.BASE_URL,
        trace: "on-first-retry",
    },
});
