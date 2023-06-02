/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/utils";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Counter: (() => {
      const tableId = new TableId("", "Counter");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Realm: (() => {
      const tableId = new TableId("", "Realm");
      return defineComponent(
        world,
        {
          opener: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Token: (() => {
      const tableId = new TableId("", "Token");
      return defineComponent(
        world,
        {
          coord: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Chamber: (() => {
      const tableId = new TableId("", "Chamber");
      return defineComponent(
        world,
        {
          opener: RecsType.String,
          tokenId: RecsType.BigInt,
          seed: RecsType.BigInt,
          yonder: RecsType.Number,
          chapter: RecsType.Number,
          terrain: RecsType.Number,
          entryDir: RecsType.Number,
          gemPos: RecsType.Number,
          gemType: RecsType.Number,
          coins: RecsType.Number,
          worth: RecsType.Number,
          agent: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ChamberMetadata: (() => {
      const tableId = new TableId("", "ChamberMetadata");
      return defineComponent(
        world,
        {
          metadata: RecsType.String,
          url: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Agent: (() => {
      const tableId = new TableId("", "Agent");
      return defineComponent(
        world,
        {
          coord: RecsType.BigInt,
          tokenId: RecsType.BigInt,
          seed: RecsType.BigInt,
          yonder: RecsType.Number,
          terrain: RecsType.Number,
          gemType: RecsType.Number,
          coins: RecsType.Number,
          worth: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Metadata: (() => {
      const tableId = new TableId("", "Metadata");
      return defineComponent(
        world,
        {
          metadata: RecsType.String,
          url: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Tiles: (() => {
      const tableId = new TableId("", "Tiles");
      return defineComponent(
        world,
        {
          terrain: RecsType.Number,
          tileType: RecsType.Number,
          isEntry: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Door: (() => {
      const tableId = new TableId("", "Door");
      return defineComponent(
        world,
        {
          nextCoord: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Player: (() => {
      const tableId = new TableId("", "Player");
      return defineComponent(
        world,
        {
          level: RecsType.Number,
          name: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Position: (() => {
      const tableId = new TableId("", "Position");
      return defineComponent(
        world,
        {
          x: RecsType.Number,
          y: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Location: (() => {
      const tableId = new TableId("", "Location");
      return defineComponent(
        world,
        {
          coord: RecsType.BigInt,
          agent: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Blocker: (() => {
      const tableId = new TableId("", "Blocker");
      return defineComponent(
        world,
        {
          enabled: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHexString(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
