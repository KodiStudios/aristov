# Development

## Prerequisites

### Node.js

This project requires **Node.js LTS**, managed via [nvm](https://github.com/nvm-sh/nvm).

On macOS, install nvm via [Homebrew](https://brew.sh):

```sh
brew install nvm
```

For other platforms, see the [nvm installation docs](https://github.com/nvm-sh/nvm#installing-and-updating).

Then install and activate the correct Node.js version defined in `.nvmrc`:

```sh
nvm install
nvm use
```

### Yarn (via Corepack)

This project uses **Yarn v4**, managed via [Corepack](https://nodejs.org/api/corepack.html), which ships with Node.js. Enable it once:

```sh
corepack enable
```

Corepack will automatically use the correct Yarn version (pinned in `package.json`) when you run `yarn` commands in this project.

## Setup

Install dependencies:

```sh
yarn install
```

## Development server

Start the local development server with live reload:

```sh
yarn start
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Other commands

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `yarn build`   | Build the production site                |
| `yarn serve`   | Serve the production build locally       |
| `yarn lint`    | Run TypeScript type checking and Prettier check |
| `yarn format`  | Format all files with Prettier           |
| `yarn clear`   | Clear the Docusaurus cache               |