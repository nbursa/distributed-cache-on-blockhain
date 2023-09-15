# Decentralized Cache System

## Overview
This project aims to create a decentralized caching system using blockchain and Web3 technology.

## Tech Stack
- Backend: Node.js, TypeScript, Express
- Blockchain: Ethereum Smart Contracts
- Frontend: (To be decided)

## Installation

1. Clone the repo
   ```bash
   git clone https://github.com/nbursa/distributed-cache-on-blockhain.git
   ```
2. Navigate to the backend directory
   ```bash
   cd src/backend
   ```
3. Install NPM packages
   ```bash
   npm install
   ```
4. Start Ganache CLI to run a local Ethereum node
   ```bash
   ganache-cli
   ```
5. Run the backend server
   ```bash
   npm run dev
   ```

## Usage

Access the current Ethereum block number at `http://localhost:3001/block-number`.

## To initialize a Truffle project, follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you want to create your Truffle project. Use the `cd` command to change directories. For example:

   ```bash
   cd src/blockchain/
   ```

3. Run the following command to initialize a new Truffle project:

   ```bash
   npx truffle init
   ```

   This command tells Truffle to create a new project in the current directory. It sets up the basic project structure with directories like `contracts`, `migrations`, and `test`.

4. Truffle will generate the project structure, and you'll see output indicating that it has created the necessary directories and files.

   ```bash
   Starting unbox...
   =================

   ? Please give us a few seconds
   ? Successfully created an empty project.
   ? Would you like to install OpenZeppelin contracts in your project? No / Yes
   ? Would you like to install OpenZeppelin test helper contracts in your project? No / Yes
   ? Would you like to install truffle-hdwallet-provider to deploy to a remote network? No / Yes
   ```

5. Your Truffle project is now initialized, and you can start adding smart contracts, migrations, and tests to it.

You can navigate into the project directory and proceed with your smart contract development and deployment using Truffle.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
