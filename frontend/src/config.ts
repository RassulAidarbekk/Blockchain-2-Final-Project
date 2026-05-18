import { hardhat } from 'wagmi/chains';

export const targetChain = hardhat;

export const addresses = {
  gameToken: import.meta.env.VITE_GAME_TOKEN as `0x${string}`,
  gold: import.meta.env.VITE_GOLD as `0x${string}`,
  crystal: import.meta.env.VITE_CRYSTAL as `0x${string}`,
  items: import.meta.env.VITE_ITEMS as `0x${string}`,
  crafting: import.meta.env.VITE_CRAFTING as `0x${string}`,
  lootDrop: import.meta.env.VITE_LOOT_DROP as `0x${string}`,
  rentalVault: import.meta.env.VITE_RENTAL_VAULT as `0x${string}`,
  ammPool: import.meta.env.VITE_AMM_POOL as `0x${string}`,
  vault: import.meta.env.VITE_VAULT as `0x${string}`,
  governor: import.meta.env.VITE_GOVERNOR as `0x${string}`,
};

export const subgraphUrl = import.meta.env.VITE_SUBGRAPH_URL ?? '';
