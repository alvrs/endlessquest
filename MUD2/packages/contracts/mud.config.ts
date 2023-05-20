import { mudConfig, resolveTableId } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    Direction: [
      "Unknown",
      "Up",
      "Down",
      "Left",
      "Right",
    ]
  },
  tables: {
    //-----------------------
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    //-----------------------
    Token: {
      keySchema: {
        tokenId: 'uint256'
      },
      schema: {
        coord: 'uint256'
      }
    },
    //-----------------------
    Chamber: {
      keySchema: {
        coord: 'uint256'
      },
      schema: {
        // player who opened this chamber
        opener: 'address',
        // bridged data
        tokenId: 'uint256',
        seed: 'uint256',
        yonder: 'uint8',
        chapter: 'uint8',
        terrain: 'uint8',
        entryDir: 'uint8',
        gemPos: 'uint8',
        gemType: 'uint8',
        coins: 'uint16',
        worth: 'uint16'
      }
    },
    //-----------------------
    Doors: {
      keySchema: {
        key: 'bytes32',
      },
      schema: {
        coord: 'uint256',
        index: 'uint8',
        dir: 'uint8',
        locked: 'bool',
        nextCoord: 'uint256',
      }
    },
    //-----------------------
    Tiles: {
      keySchema: {
        key: 'bytes32',
      },
      schema: {
        terrain: 'uint8',
        tileType: 'uint8',
        isEntry: 'bool',
        // gridX: 'int32',
        // gridY: 'int32',
      }
    },
    //-----------------------
    // Player: {
    //   schema: {
    //     y: "int32",
    //   }
    // },
    Position: {
      schema: {
        x: "int32",
        y: "int32",
      }
    },
    Health: {
      schema: {
        current: "int32",
        max: "int32",
      },
    },
    Strength: {
      schema: "int32",
    }
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [resolveTableId("Doors")],
    },
    {
      name: "UniqueEntityModule",
      root: true,
      args: [resolveTableId("Tiles")],
    },
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("Position")],
    },
  ],
});
