import { getComponentValue, getEntitiesWithValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";
import * as bridge from "../bridge/bridge";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity, storeCache }: SetupNetworkResult,
  { Counter, Token }: ClientComponents,
) {
  //
  // CounterSystem
  const increment = async () => {
    const tx = await worldSend("increment", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Counter, singletonEntity);
  };
  const decrement = async () => {
    const tx = await worldSend("decrement", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Counter, singletonEntity);
  };

  const bridge_tokenId = async (tokenId: bigint) => {
    // check if already bridged
    let stored_coord = storeCache.tables.Token.get({ tokenId });
    if (stored_coord != null) {
      console.log(`STORED_COORD:`, stored_coord)
      return
    }
    // fetch
    const coord = await bridge.tokenIdToCoord(tokenId)
    console.warn(`BRIDGE_COORD:`, coord)
    // store
    const tx = await worldSend("setTokenIdToCoord", [
      tokenId,
      coord,
    ]);
    // return stored value
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Token, singletonEntity);
  };

  const bridge_chamber = async (coord: bigint) => {
    // check if already bridged
    let stored_chamber = storeCache.tables.Chamber.get({ coord });
    if (stored_chamber != null) {
      console.log(`STORED_CHAMBER:`, stored_chamber)
      return
    }
    // fetch
    const chamberData = await bridge.coordToChamberData(coord)
    console.warn(`BRIDGE_CHAMBER`, chamberData)
    // store
    const tx = await worldSend("setChamber", [
      coord,
      chamberData.tokenId,
      chamberData.seed,
      chamberData.yonder,
      chamberData.chapter,
      chamberData.terrain,
      chamberData.entryDir,
      chamberData.gemPos,
      chamberData.hoard.gemType,
      chamberData.hoard.coins,
      chamberData.hoard.worth,
    ]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    const result = storeCache.tables.Chamber.get({ coord });
    console.warn(`BRIDGED_CHAMBER = `, result)
    return result
  };

  return {
    increment,
    decrement,
    bridge_tokenId,
    bridge_chamber,
  };
}
