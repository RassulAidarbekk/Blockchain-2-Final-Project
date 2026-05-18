🎮 GameFi Economy Capstone

A full-stack decentralized GameFi Economy Protocol built for Option B – GameFi Economy.

This project combines:

⚔️ ERC-1155 game items
🛠️ Crafting mechanics
💱 Custom AMM (x*y=k)
🧰 NFT rental vaults
🎲 VRF-powered loot drops
📈 Chainlink oracle validation
🏦 ERC-4626 treasury vault
🗳️ DAO governance with Governor + Timelock
📊 The Graph subgraph indexing
🌐 React frontend dApp
✅ Extensive Foundry testing
🚀 CI/CD and deployment tooling
👥 Ownership Split
Area	Owner
ERC-1155 items, crafting, loot drops, rentals	Person 1
AMM, governance token, vault, oracle, DAO	Person 2
Frontend, subgraph, CI, deployment, docs, demo	Person 3

Every team member should still understand the complete architecture and be prepared for technical Q&A.

📁 Repository Layout
contracts/              Solidity production contracts
contracts/mocks/        Chainlink mocks and testing utilities
contracts/math/         AMM math + Yul benchmark harness

script/                 Foundry deployment & verification scripts
scripts/                Local setup and helper scripts

test/                   Unit, fuzz, invariant, fork, and security tests

frontend/               React + Wagmi + Viem frontend dApp
subgraph/               The Graph schema, mappings, queries

docs/                   Architecture, audit, gas, coverage, slides
.github/workflows/      CI pipeline
🧱 Core Contracts
Contract	Purpose
GameToken.sol	ERC20Votes + ERC20Permit governance token
GameItems1155.sol	ERC-1155 in-game items and loot boxes
GameParametersV1.sol	Upgradeable gameplay parameters
GameParametersV2.sol	DAO-governed upgraded parameter logic
CraftingManager.sol	Burns resources and mints crafted items
LootDrop.sol	VRF-compatible loot box distribution
RentalVault.sol	Pull-payment ERC-1155 rental vault
AMMPool.sol	Custom x*y=k AMM with LP shares
AMMPoolFactory.sol	CREATE + CREATE2 pool deployment
GameVault4626.sol	ERC-4626 treasury vault
PriceFeedAdapter.sol	Chainlink price feed adapter with stale-check protection
GameGovernor.sol	OpenZeppelin Governor + Timelock governance
✅ Mandatory Criteria Coverage
Requirement	Implementation
UUPS Upgradeability	GameParametersV1 → GameParametersV2
CREATE + CREATE2 Factory	AMMPoolFactory
Inline Yul Optimization	AMMMath.quoteOutYul()
ERC-20 Votes & Permit	GameToken
ERC-1155	GameItems1155
ERC-4626 Vault	GameVault4626
DeFi Primitive	Custom AMM
Chainlink Price Feed	PriceFeedAdapter
Chainlink VRF	LootDrop
Governor + Timelock	GameGovernor
Subgraph Integration	subgraph/
Frontend dApp	frontend/
Security Practices	CEI, ReentrancyGuard, AccessControl, Pull Payments
Advanced Testing	Unit, fuzz, invariant, fork, case-study
CI Pipeline	GitHub Actions
L2 Deployment	Base Sepolia scripts
🛠️ Setup
1. Install Prerequisites

Required tools:

Git
Node.js 20+
Foundry (forge, cast, anvil)
Python 3 (for Slither)
2. Clone Repository
git clone <your-repo-url>
cd gamefi-economy-capstone
3. Install Dependencies
Automatic Setup
./scripts/setup.sh
Manual Setup
forge install foundry-rs/forge-std --no-commit

forge install OpenZeppelin/openzeppelin-contracts@v4.9.6 --no-commit

forge install OpenZeppelin/openzeppelin-contracts-upgradeable@v4.9.6 --no-commit

npm install

cd frontend && npm install && cd ..
cd subgraph && npm install && cd ..
⚙️ Environment Configuration

Create a local environment file:

cp .env.example .env

Fill in the following values:

PRIVATE_KEY=0x...

BASE_SEPOLIA_RPC_URL=...
BASESCAN_API_KEY=...

MAINNET_RPC_URL=...

CHAINLINK_PRICE_FEED=...
VRF_COORDINATOR=...

VRF_SUBSCRIPTION_ID=
VRF_KEY_HASH=

If Chainlink addresses are empty, deployment scripts automatically deploy mocks.

🧪 Local Development
Format Contracts
forge fmt --check
Build Contracts
forge build
Run Tests
forge test -vvv
🔍 Advanced Testing
Fuzz + Invariant Tests
FOUNDRY_PROFILE=ci forge test -vvv
Coverage Report
forge coverage --report summary --report lcov
Slither Analysis
python3 -m pip install slither-analyzer

slither . \
  --filter-paths "test|script|lib" \
  --exclude-dependencies \
  --fail-medium
🚦 One-Command Validation

Run the complete local verification pipeline:

./scripts/run-all.sh
🚀 Deploy to Base Sepolia
Deployment
source .env

forge script script/Deploy.s.sol:Deploy \
  --rpc-url "$BASE_SEPOLIA_RPC_URL" \
  --broadcast \
  --verify \
  --etherscan-api-key "$BASESCAN_API_KEY" \
  -vvvv
Save Deployment Addresses

Copy deployed addresses into:

deployments/base-sepolia.json
frontend/.env.local
Post-Deployment Verification
export GOVERNOR=0x...
export TIMELOCK=0x...
export VAULT=0x...
export DEPLOYER=0x...

forge script script/VerifyPostDeploy.s.sol:VerifyPostDeploy \
  --rpc-url "$BASE_SEPOLIA_RPC_URL" \
  -vvvv
🌐 Frontend Setup

Create frontend environment file:

cp frontend/.env.example frontend/.env.local

Replace placeholder addresses with deployed contract addresses.

Run Frontend
cd frontend
npm run dev
Build Frontend
cd frontend
npm run build
📊 Subgraph Setup
Configure Addresses

Replace zero addresses inside:

subgraph/subgraph.yaml
Generate Types + Build
cd subgraph

npm run codegen
npm run build
Deploy to The Graph Studio
graph auth --studio <deploy-key>

npm run deploy:studio

Documented GraphQL queries:

subgraph/queries.md
⛽ L1 vs L2 Gas Benchmarking

Generate gas comparison reports:

./scripts/l2-gas-report.sh

Then update:

docs/L1_L2_GAS_COMPARISON.md

with real transaction measurements from:

Ethereum Sepolia
Base Sepolia (or chosen L2)
🔐 Security Features

Implemented protections include:

ReentrancyGuard
Checks-Effects-Interactions pattern
SafeERC20
AccessControl
Pull-payment architecture
Oracle staleness protection
Timelock-governed upgrades
Governance-controlled treasury
Vulnerability case-study testing
🧪 Testing Overview
Included Test Types
Unit Tests
Fuzz Tests
Invariant Tests
Fork Tests
Governance Lifecycle Tests
Security Regression Tests
Statistics
Metric	Count
Test Functions	88
Invariant Functions	6
Coverage Goal	90%+
📦 CI Pipeline

GitHub Actions pipeline runs:

Formatting
Build checks
Unit tests
Coverage
Slither
Frontend build
Subgraph build
Linting

Location:

.github/workflows/ci.yml
📋 Final Submission Checklist
 Contracts compile successfully
 forge test -vvv passes
 Coverage ≥ 90%
 Slither has zero High/Medium findings
 Contracts deployed + verified on L2
 Deployment JSON committed
 Frontend connected to live contracts
 Subgraph deployed and queried
 Documentation finalized
 All team members ready for architecture Q&A
🏁 Tech Stack
Smart Contracts
Solidity
Foundry
OpenZeppelin
Chainlink
Frontend
React
TypeScript
Wagmi
Viem
Indexing
The Graph
Security & Tooling
Slither
GitHub Actions
Forge Coverage
Base Sepolia
📜 License

MIT License🧱 Core Contracts
ContractPurposeGameToken.solERC20Votes + ERC20Permit governance tokenGameItems1155.solERC-1155 in-game items and loot boxesGameParametersV1.solUpgradeable gameplay parametersGameParametersV2.solDAO-governed upgraded parameter logicCraftingManager.solBurns resources and mints crafted itemsLootDrop.solVRF-compatible loot box distributionRentalVault.solPull-payment ERC-1155 rental vaultAMMPool.solCustom x*y=k AMM with LP sharesAMMPoolFactory.solCREATE + CREATE2 pool deploymentGameVault4626.solERC-4626 treasury vaultPriceFeedAdapter.solChainlink price feed adapter with stale-check protectionGameGovernor.solOpenZeppelin Governor + Timelock governance
✅ Mandatory Criteria Coverage
RequirementImplementationUUPS UpgradeabilityGameParametersV1 → GameParametersV2CREATE + CREATE2 FactoryAMMPoolFactoryInline Yul OptimizationAMMMath.quoteOutYul()ERC-20 Votes & PermitGameTokenERC-1155GameItems1155ERC-4626 VaultGameVault4626DeFi PrimitiveCustom AMMChainlink Price FeedPriceFeedAdapterChainlink VRFLootDropGovernor + TimelockGameGovernorSubgraph Integrationsubgraph/Frontend dAppfrontend/Security PracticesCEI, ReentrancyGuard, AccessControl, Pull PaymentsAdvanced TestingUnit, fuzz, invariant, fork, case-studyCI PipelineGitHub ActionsL2 DeploymentBase Sepolia scripts
🛠️ Setup
1. Install Prerequisites
Required tools:
Git
Node.js 20+
Foundry (forge, cast, anvil)
Python 3 (for Slither)
2. Clone Repository
git clone <your-repo-url> cd gamefi-economy-capstone 
3. Install Dependencies
Automatic Setup
./scripts/setup.sh 
Manual Setup
forge install foundry-rs/forge-std --no-commit forge install OpenZeppelin/openzeppelin-contracts@v4.9.6 --no-commit forge install OpenZeppelin/openzeppelin-contracts-upgradeable@v4.9.6 --no-commit npm install cd frontend && npm install && cd .. cd subgraph && npm install && cd .. 
⚙️ Environment Configuration
Create a local environment file:
cp .env.example .env 
Fill in the following values:
PRIVATE_KEY=0x... BASE_SEPOLIA_RPC_URL=... BASESCAN_API_KEY=... MAINNET_RPC_URL=... CHAINLINK_PRICE_FEED=... VRF_COORDINATOR=... VRF_SUBSCRIPTION_ID= VRF_KEY_HASH
= 
If Chainlink addresses are empty, deployment scripts automatically deploy mocks
.
🧪 Local Development
Format Contracts
forge fmt --check 
Build Contracts
forge build 
Run Tests
forge test -vvv 
🔍 Advanced Testing
Fuzz + Invariant Tests
FOUNDRY_PROFILE=ci forge test -vvv 
Coverage Report
forge coverage --report summary --report lcov 
Slither Analysis
python3 -m pip install slither-analyzer slither . \ --filter-paths "test|script|lib" \ --exclude-dependencies \ --fail-medium
