export const environment = {
  production: true,
  test: false,
  local: false,
  envName: 'prod',
  showDebug: false,
  syncTierName: 'MAIN',
  enforceSyncGuard: true,
   veChain: {
     node: 'https://sync-mainnet.vechain.org/', // veblocks public node, use your own if needed
     // tslint:disable-next-line:quotemark
     network: "main" // defaults to mainnet, so it can be omitted here
   }
};
