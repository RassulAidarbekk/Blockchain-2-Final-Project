const { execSync, spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('🚀 starting anvil...');

  spawn('anvil', [], {
    detached: true,
    stdio: 'ignore',
    shell: true,
  }).unref();

  await sleep(3000);

  console.log('📦 deploying contracts...');

  const deployOutput = execSync(
    'forge script script/Deploy.s.sol --rpc-url http://127.0.0.1:8545 --broadcast',
    { encoding: 'utf8' }
  );

  fs.writeFileSync('deploy.log', deployOutput);

  console.log('🧠 exporting addresses...');

  require('./export-addresses');

  console.log('🌐 starting frontend...');

  spawn('pnpm', ['dev'], {
    cwd: './frontend',
    stdio: 'inherit',
    shell: true,
  });
}

main();