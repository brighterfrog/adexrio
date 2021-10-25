export const environment = {
  version: "1.1.14",
  production: true,
  test: false,
  local: false,
  envName: 'prod',
  showDebug: false,
  syncTierName: 'main',
  enforceSyncGuard: true,
  veChain: {
     node: 'https://vethor-node.vechain.com',
     // tslint:disable-next-line:quotemark
     network: "main" // defaults to mainnet, so it can be omitted here
   }
};
