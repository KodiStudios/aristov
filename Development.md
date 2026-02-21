# Development

## Prerequisites

### Node.js

This project requires **Node.js v24 or later**.

Download and install the latest LTS version from [nodejs.org](https://nodejs.org/).

Verify the installation:

```sh
node --version
```

### Yarn

Enable Yarn (the JavaScript package manager used by this project):

```sh
corepack enable
```

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
| `yarn lint`    | Run TypeScript type checking and format files with Prettier |
| `yarn format`  | Format all files with Prettier           |
| `yarn clear`   | Clear the Docusaurus cache               |
