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
AreaOwnerERC-1155 items, crafting, loot drops, rentalsPerson 1AMM, governance token, vault, oracle, DAOPerson 2Frontend, subgraph, CI, deployment, docs, demoPerson 3

Every team member should still understand the complete architecture and be prepared for technical Q&A.

📁 Repository Layout
contracts/ Solidity production contracts contracts/mocks/ Chainlink mocks and testing utilities contracts/math/ AMM math + Yul benchmark harness script/ Foundry deployment & verification scripts scripts/ Local setup and helper scripts test/ Unit, fuzz, invariant, fork, and security tests frontend/ React + Wagmi + Viem frontend dApp subgraph/ The Graph schema, mappings, queries docs/ Architecture, audit, gas, coverage, slides .github/workflows/ CI pipeline 
🧱 Core Contracts
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
