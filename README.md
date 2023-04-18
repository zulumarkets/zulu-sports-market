# Zulu Sports Market

[![Twitter Follow](https://img.shields.io/twitter/follow/ZuluMarkets?style=social)](https://twitter.com/ZuluMarkets)

Frontend for Zulu Sports Market.

The UI is available on [zulu.wtf](https://zulu.wtf).

## Tech stack

-   React
-   React Redux
-   React Query
-   Styled-Components

## Ethereum stack

-   ethers.js v5 - Ethereum wallet implementation.
-   Blocknative Onboard - for ethereum wallet connectivity.

## Development

### Install dependencies

```bash
npm i
```

### Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):
Then, open `.env.local` and add the missing environment variables:

-   `REACT_APP_INFURA_PROJECT_ID` - Infura project id (get it from [infura.io](https://infura.io/)).
-   `REACT_APP_PORTIS_APP_ID` - Portis app id (get it from [portis.io](https://www.portis.io/)).
-   `REACT_APP_THALES_API_URL` - The Thales API URL. Set to `https://api.thalesmarket.io`.
-   `REACT_APP_IPFS_DEPLOYMENT` - Is dApp in the mode for deployment on IPFS. Set to `false`.

### Set up Google Translate API

This step is needed only if you wish to contribute to the project.

On every commit a pre-commit hook is triggered to translate missing values from the en.json located in src/i18n.

In order for this to work a Google Cloud account is needed and a system environment variable needs to be set pointing
to a locally stored json provided by Google.

Full Guide: https://github.com/googleapis/nodejs-translate#before-you-begin

The translation script is located in check_translations.js.example. Create a new file called check_translations.js identical to check_translations.js.example and set the projectId variable to the project id provided by Google.

### Run

```bash
npm run start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
