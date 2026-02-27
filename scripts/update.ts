import { execSync } from "child_process";

function run(command: string) {
  execSync(command, { stdio: "inherit" });
}

// Update Docusaurus and core deps
run(
  "yarn up @docusaurus/*@latest @mdx-js/react@latest clsx@latest prism-react-renderer@latest react@^18 react-dom@^18",
);

// Update type definitions
run("yarn up @types/node@^24 @types/react@^18 @types/react-dom@^18");

// Update dev tooling
run(
  "yarn up prettier@latest typescript@latest eslint@latest @eslint/js@latest typescript-eslint@latest eslint-plugin-react-hooks@latest eslint-config-prettier@latest globals@latest",
);

// Update browserslist database
run("yarn dlx update-browserslist-db@latest");
