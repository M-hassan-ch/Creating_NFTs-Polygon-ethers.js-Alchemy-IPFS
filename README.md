# Getting Started with Create Next App
This project was bootstrapped with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
## Available Scripts
In the project directory, you can run:
### `npm i`
Run this command to install all the dependencies. You have to run `npm i` in current directory as well as in `.\frontend`. 
### `npm start`
Runs `npm start` in `./frontend` to start the project.\
Open [http://localhost:3000](http://localhost:3000). 
The page will reload automatically if you make changes in the code.\
Errors will be displayed in the browser's console.

### Project Folder Structure
`./frontend/contracts`: Contains all the smart contracts files.\
`./frontend/test`: Contains all the test scripts.\
`./frontend/scripts` : Contains the deployement scripts of smart contracts.\
`./frontend/src/Components` : Contains the JSX components.\
`./frontend/src/artifacts` : Contains the artifacts(abi) of smart contracts that generated through [`Hardhat`](https://hardhat.org/hardhat-runner/docs/guides/project-setup).\
`./frontend/src/utility` : Contains the files of utility functions.\
`./frontend/src/context` : Contains the files managing all the state variables related to the smart contract.\



**Main Folders & Files**
- Pages Folder
- Public Folder
- Src Folder
- Environment variable files
- Next config file
**Folder Details**
_Pages Folder_
In this folder all the `Pages` of the website are given. `Pages` are assoiciated with a route based on their filename. This project is structured as, on the top herichy there are `Pages`, in the Pages, `Sections` are called, and within `Sections` `Components` are called.
**Public Folder**
- **_Assets Folder:_** PNG & SVG images are given in this folder.
- **_Favicon Folder:_** Favicon with different sizes given in this folder.
- **_Robots file:_** This file tells search engine crawlers which URLs the crawler can access on your site.
**Src Folder**
**_Apis Folder_**
All the `Backend`, `Blockchain` Api's and the `Routes` given in this folder. For the Blockchain Api's there is only one folder and all the Blockchain for `ERC_721` & `ERC_115` Api's given init.
After creating Api's you can export them into index file within Apis folder. An the you can just access that API like this:
`import { api_name } from "path/apis";`
**_Artifacts_**
All the `ABI files` for Blockchain contracts will be inside the contracts folder within artifacts. Like etherum, solana, polygon folders will keep ABI files like ERC_721 & ERC_1155.
**_Assets_**
All the theming assets like illustraions, pattern and images will be in this folder.
**_Components_**
All the components of the project are given in this folder. There are two kinds of folders inside it, one is `shared` folder, in which all the shared components and modals in it.
In the `modal` folder within shared folder there is `CustomModal` component. All the modals using in this project wrapping this CustomModal.
All the other folders are organized according to features like admin, nft and player etc.
All the components are exported in index file with components folder so that we can use it like.
`import { component_name } from "path/components";`
**_Context API_**
There are three files in this folder:
- Actions => All the actions are defined in this file.
- App Context => Provider setup in this file.
- App Reducer => All the functions/ reducers are define in this file.
**_Context_**
All the theme setting like theme mode, left and right bar etc. settings are defined in this folder.
**_Hooks_**
All the hooks that are using in this project, given in this folder.
**_Layouts_**
Multiple `Headers`, `Footers` and `Navigation` bar settings defined in this folder. In this folder there is index file, which is taking `PROPS`, on the basis of props we need to setup layout for header and footer.
**_Lib_**
In this folders we can have all the libraries using in this project like `supporated chain` or `email`.
**_Sections_**
Sections are using in the Pages as structure of the page. All the sections are categorize as folder wise inside this folder. And exported in index file, so that we can easily access them like:
`import { section_name } from "path/sections";`
**_Styles_**
We are using `SASS` for styling in this project. There is a global file in which all the other styling files are imported. And this global file is imported in `_app.js` page.
**_Theme_**
We are using `Materia UI` for creating user interfaces. In this folder there is an override folder in which all the Material UI components have overrided. And there are some other files like `palette`, `shadows` and `typography`. All the font sizes defined in this `typography` file.
**_Utils_**
All the utilities are given in this folder like `getCookies`, `getChainsData`, `sliceText`, `storeCookies`, `storeSession` and `web3 Connection` etc.
**_Wallet_**
`Meta mask` and other wallets configuration defined in this folder.
**_Config_**
All the constants which we can use globally, defined in this config file.
**_Routes_**
All the `Pages routing` is defined in this file.
**Environment Files**
There are three environments files for setup like local, production and development.
**_Keys using in the enviornment file:_**
NEXT_PUBLIC_NODE_ENV=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_QUICK_NODE_API_RINKEBY=
NEXT_PUBLIC_QUICKNODE_RINKEBY_URL=
NEXT_PUBLIC_PINATA_BASE_URL=
NEXT_PUBLIC_CONTRACT_ADDRESS_ETH_721=
NEXT_PUBLIC_CONTRACT_ADDRESS_ETH_1155=
NEXT_PUBLIC_ETHER_SCAN=
**Next Config**
All the public and server runtime configurations are written in this file. Like if you want add strict mode, enable third party URL's for communication, linter, plugins and webpack settings.
