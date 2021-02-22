# TimeKeeper App Installation Instructions

Below are the instructions for the installation and usage of TimeKeeper Web Application.

## Prerequisites

- Mac or PC running Terminal / Bash Shell
- [node v14.15.3](https://nodejs.org/dist/v14.15.3/) installed
- Node should come with `npm v6.14.9`

## Getting Started

1. Download `project folder` to local machine
2. Open Terminal and navigate to `project folder`
3. Make sure you are running the required Node/npm versions outlined above
   `npm -v`
   `node -v`
4. Install dependencies by entering `npm install`
5. Run application for development with `npm start`
6. Run application in production mode with `npm run start:prod` (optimizations still required)
7. Access the application in a browser using `localhost:3000` as the URL

## Other `npm` Scripts

- `npm run build`: builds all assets for production, and compiles into `public` directory
- `npm run cleaninstall`: removes all `node_modules`, `package-lock.json`, and clears npm cache before running `npm install`.
- `npm run update`: alias for running `npm ci`
- `npm run update:deps`: quick way to update npm packages
