const fs = require('fs');

const log = fs.readFileSync('./deploy.log', 'utf8');

function extract(name) {
  const regex = new RegExp(`${name}=(0x[a-fA-F0-9]{40})`);
  const match = log.match(regex);

  return match ? match[1] : '';
}

const env = `
VITE_CHAIN_ID=31337
VITE_RPC_URL=http://127.0.0.1:8545

VITE_GAME_TOKEN=${extract('GAME_TOKEN')}
VITE_GOLD=${extract('GOLD')}
VITE_CRYSTAL=${extract('CRYSTAL')}
VITE_ITEMS=${extract('ITEMS')}
VITE_CRAFTING=${extract('CRAFTING')}
VITE_LOOT_DROP=${extract('LOOT_DROP')}
VITE_RENTAL_VAULT=${extract('RENTAL_VAULT')}
VITE_VAULT=${extract('VAULT')}
VITE_AMM_POOL=${extract('AMM_POOL')}
VITE_GOVERNOR=${extract('GOVERNOR')}
`;

fs.writeFileSync('./frontend/.env.local', env);

console.log('✅ .env.local updated');