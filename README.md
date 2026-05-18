# GameFi Economy Capstone

A full-stack decentralized **GameFi Economy Protocol**.

This project combines ERC-1155 game assets, crafting mechanics, a custom AMM, NFT rentals, VRF-powered loot drops, Chainlink oracle validation, an ERC-4626 treasury vault, DAO governance, subgraph indexing, and a React frontend dApp.

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Team Ownership](#team-ownership)
- [Repository Layout](#repository-layout)
- [Core Contracts](#core-contracts)
- [Mandatory Criteria Coverage](#mandatory-criteria-coverage)
- [Architecture Summary](#architecture-summary)
- [Setup](#setup)
- [Environment Configuration](#environment-configuration)
- [Local Development](#local-development)
- [Testing](#testing)
- [Security](#security)
- [Deployment](#deployment)
- [Frontend](#frontend)
- [Subgraph](#subgraph)

---

## Overview

The **GameFi Economy Capstone** is a decentralized game economy protocol where players can mint and manage in-game ERC-1155 items, craft new assets, trade through a custom AMM, rent NFTs, open loot boxes using VRF randomness, and participate in DAO governance.

The system is designed to demonstrate advanced smart contract engineering, DeFi mechanics, oracle integration, upgradeability, indexing, frontend integration, and production-style testing and deployment workflows.

---

## Core Features

- **ERC-1155 Game Items**  
  In-game resources, crafted items, and loot boxes are represented as ERC-1155 tokens.

- **Crafting Mechanics**  
  Players burn resource items to mint crafted game assets.

- **Custom AMM**  
  A constant-product `x * y = k` AMM supports token swaps and LP shares.

- **NFT Rental Vaults**  
  ERC-1155 game assets can be rented through a pull-payment rental vault design.

- **VRF-Powered Loot Drops**  
  Loot boxes use Chainlink VRF-compatible randomness for fair item distribution.

- **Chainlink Oracle Validation**  
  Price feeds are validated through an adapter with stale-check protection.

- **ERC-4626 Treasury Vault**  
  Treasury assets are managed through a tokenized vault standard.

- **DAO Governance**  
  Governance uses `ERC20Votes`, `ERC20Permit`, OpenZeppelin Governor, and Timelock.

- **Upgradeable Parameters**  
  Gameplay parameters are upgradeable through UUPS from `GameParametersV1` to `GameParametersV2`.

- **The Graph Subgraph**  
  Protocol events are indexed for frontend and analytics use.

- **React Frontend dApp**  
  The frontend uses React, Wagmi, and Viem for wallet and contract interactions.

- **Advanced Testing**  
  Includes unit tests, fuzz tests, invariant tests, fork tests, and security-focused case studies.

- **CI/CD and Deployment Tooling**  
  GitHub Actions and deployment scripts support automated testing and Base Sepolia deployment.

---

## Team Ownership

| Area | Owner |
|---|---|
| ERC-1155 items, crafting, loot drops, rentals | Person 1 |
| AMM, governance token, vault, oracle, DAO | Person 2 |
| Frontend, subgraph, CI, deployment, docs, demo | Person 3 |

---

## Repository Layout

```text
contracts/              Solidity production contracts
contracts/mocks/        Chainlink mocks and testing utilities
contracts/math/         AMM math and Yul benchmark harness
script/                 Foundry deployment and verification scripts
scripts/                Local setup and helper scripts
test/                   Unit, fuzz, invariant, fork, and security tests
frontend/               React + Wagmi + Viem frontend dApp
subgraph/               The Graph schema, mappings, and queries
docs/                   Architecture, audit, gas, coverage, and slides
.github/workflows/      CI pipeline
```

---

## Core Contracts

| Contract | Purpose |
|---|---|
| `GameToken.sol` | ERC20Votes + ERC20Permit governance token |
| `GameItems1155.sol` | ERC-1155 in-game items and loot boxes |
| `GameParametersV1.sol` | Upgradeable gameplay parameters |
| `GameParametersV2.sol` | DAO-governed upgraded parameter logic |
| `CraftingManager.sol` | Burns resources and mints crafted items |
| `LootDrop.sol` | VRF-compatible loot box distribution |
| `RentalVault.sol` | Pull-payment ERC-1155 rental vault |
| `AMMPool.sol` | Custom `x * y = k` AMM with LP shares |
| `AMMPoolFactory.sol` | CREATE + CREATE2 pool deployment |
| `GameVault4626.sol` | ERC-4626 treasury vault |
| `PriceFeedAdapter.sol` | Chainlink price feed adapter with stale-check protection |
| `GameGovernor.sol` | OpenZeppelin Governor + Timelock governance |

---

## Mandatory Criteria Coverage

| Requirement | Implementation |
|---|---|
| UUPS Upgradeability | `GameParametersV1` → `GameParametersV2` |
| CREATE + CREATE2 Factory | `AMMPoolFactory` |
| Inline Yul Optimization | `AMMMath.quoteOutYul()` |
| ERC-20 Votes & Permit | `GameToken` |
| ERC-1155 | `GameItems1155` |
| ERC-4626 Vault | `GameVault4626` |
| DeFi Primitive | Custom AMM |
| Chainlink Price Feed | `PriceFeedAdapter` |
| Chainlink VRF | `LootDrop` |
| Governor + Timelock | `GameGovernor` |
| Subgraph Integration | `subgraph/` |
| Frontend dApp | `frontend/` |
| Security Practices | CEI, `ReentrancyGuard`, `AccessControl`, pull payments |
| Advanced Testing | Unit, fuzz, invariant, fork, and case-study tests |
| CI Pipeline | GitHub Actions |
| L2 Deployment | Base Sepolia scripts |

---

## Architecture Summary

The protocol is composed of several interconnected modules:

1. **Game Assets Layer**  
   `GameItems1155` manages fungible and semi-fungible game items, resources, crafted assets, and loot boxes.

2. **Gameplay Layer**  
   `CraftingManager`, `LootDrop`, and `RentalVault` provide player-facing game mechanics.

3. **DeFi Layer**  
   `AMMPool`, `AMMPoolFactory`, and `GameVault4626` provide trading, liquidity, and treasury functionality.

4. **Oracle Layer**  
   `PriceFeedAdapter` validates external price data and prevents stale oracle reads.

5. **Governance Layer**  
   `GameToken`, `GameGovernor`, and Timelock allow token holders to govern protocol parameters and upgrades.

6. **Indexing and Frontend Layer**  
   The Graph subgraph indexes events, while the React dApp provides user-facing interactions.

---

## Setup

### 1. Install Prerequisites

Required tools:

- Git
- Node.js 20+
- Foundry: `forge`, `cast`, and `anvil`
- Python 3, used for Slither

### 2. Clone Repository

```bash
git clone <your-repo-url>
cd gamefi-economy-capstone
```

### 3. Install Dependencies

#### Automatic Setup

```bash
./scripts/setup.sh
```

#### Manual Setup

```bash
forge install foundry-rs/forge-std --no-commit
forge install OpenZeppelin/openzeppelin-contracts@v4.9.6 --no-commit
forge install OpenZeppelin/openzeppelin-contracts-upgradeable@v4.9.6 --no-commit

npm install

cd frontend && npm install && cd ..
cd subgraph && npm install && cd ..
```

---

## Environment Configuration

Create a local environment file:

```bash
cp .env.example .env
```

Fill in the following values:

```env
PRIVATE_KEY=0x...
BASE_SEPOLIA_RPC_URL=...
BASESCAN_API_KEY=...
MAINNET_RPC_URL=...
CHAINLINK_PRICE_FEED=...
VRF_COORDINATOR=...
VRF_SUBSCRIPTION_ID=
VRF_KEY_HASH=
```

If Chainlink addresses are empty, deployment scripts automatically deploy mocks.

---

## Local Development

### Format Contracts

```bash
forge fmt --check
```

### Build Contracts

```bash
forge build
```

### Run Tests

```bash
forge test -vvv
```

---

## Testing

### Standard Test Suite

```bash
forge test -vvv
```

### Fuzz and Invariant Tests

```bash
FOUNDRY_PROFILE=ci forge test -vvv
```

### Coverage Report

```bash
forge coverage --report summary --report lcov
```

### Slither Analysis

```bash
python3 -m pip install slither-analyzer

slither . \
  --filter-paths "test|script|lib" \
  --exclude-dependencies \
  --fail-medium
```

---

## Security

Security patterns used throughout the protocol include:

- Checks-Effects-Interactions pattern
- `ReentrancyGuard` on sensitive state-changing flows
- Role-based permissions with `AccessControl`
- Pull-payment pattern for rental payouts
- Stale oracle protection in `PriceFeedAdapter`
- Timelock-protected governance execution
- Invariant testing for AMM and vault accounting
- Fuzz testing for edge cases and unexpected input ranges

---

## Deployment

Deployment scripts are located in:

```text
script/
```

The project supports deployment to **Base Sepolia**.

Example deployment flow:

```bash
forge script script/Deploy.s.sol \
  --rpc-url $BASE_SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify \
  --etherscan-api-key $BASESCAN_API_KEY
```
---

## Frontend

The frontend is located in:

```text
frontend/
```

Run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

The dApp integrates with deployed contracts through Wagmi and Viem.

---

## Subgraph

The subgraph is located in:

```text
subgraph/
```

Install dependencies:

```bash
cd subgraph
npm install
```

Typical subgraph workflow:

```bash
npm run codegen
npm run build
```

Deploy using your configured Graph deployment target.
```
