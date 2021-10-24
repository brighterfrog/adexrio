// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  version: "1.1.14",
  production: false,
  test: false,
  local: true,
  envName: 'local',
  syncTierName: 'SOLO',
  showDebug: true,
  enforceSyncGuard: true,
  veChain: {
    node: 'http://127.0.0.1:8669',
    network: {
      number: 0,
      //id: '0x00000000973ceb7f343a58b08f0693d6701a5fd354ff73d7058af3fba222aea4',
      // ID comes from the running network solo node in the TERMINAL output
      id: '0x00000000c05a20fbca2bf6ae3affba6af4a74b800b585bf7a4988aba7aea69f6',          
      size: 170,
      parentID: '0xffffffff00000000000000000000000000000000000000000000000000000000',
      timestamp: 1526400000,
      gasLimit: 10000000,
      beneficiary: '0x0000000000000000000000000000000000000000',
      gasUsed: 0,
      totalScore: 0,
      txsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
      txsFeatures: 0,
      stateRoot: '0x278b34bdbc5294d0cbbb7f1c49100c821e6fff7abc69a0c398c8f27d00563a8e',
      receiptsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
      signer: '0x0000000000000000000000000000000000000000',
      isTrunk: true,
      transactions: []
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
