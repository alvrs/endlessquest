// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("Tile")));
bytes32 constant TileTableId = _tableId;

struct TileData {
  uint8 terrain;
  uint8 tileType;
  bool isEntry;
}

library Tile {
  /** Get the table's schema */
  function getSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](3);
    _schema[0] = SchemaType.UINT8;
    _schema[1] = SchemaType.UINT8;
    _schema[2] = SchemaType.BOOL;

    return SchemaLib.encode(_schema);
  }

  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.BYTES32;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's metadata */
  function getMetadata() internal pure returns (string memory, string[] memory) {
    string[] memory _fieldNames = new string[](3);
    _fieldNames[0] = "terrain";
    _fieldNames[1] = "tileType";
    _fieldNames[2] = "isEntry";
    return ("Tile", _fieldNames);
  }

  /** Register the table's schema */
  function registerSchema() internal {
    StoreSwitch.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Register the table's schema (using the specified store) */
  function registerSchema(IStore _store) internal {
    _store.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Set the table's metadata */
  function setMetadata() internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    StoreSwitch.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Set the table's metadata (using the specified store) */
  function setMetadata(IStore _store) internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    _store.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Get terrain */
  function getTerrain(bytes32 key) internal view returns (uint8 terrain) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0);
    return (uint8(Bytes.slice1(_blob, 0)));
  }

  /** Get terrain (using the specified store) */
  function getTerrain(IStore _store, bytes32 key) internal view returns (uint8 terrain) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0);
    return (uint8(Bytes.slice1(_blob, 0)));
  }

  /** Set terrain */
  function setTerrain(bytes32 key, uint8 terrain) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _keyTuple, 0, abi.encodePacked((terrain)));
  }

  /** Set terrain (using the specified store) */
  function setTerrain(IStore _store, bytes32 key, uint8 terrain) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    _store.setField(_tableId, _keyTuple, 0, abi.encodePacked((terrain)));
  }

  /** Get tileType */
  function getTileType(bytes32 key) internal view returns (uint8 tileType) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 1);
    return (uint8(Bytes.slice1(_blob, 0)));
  }

  /** Get tileType (using the specified store) */
  function getTileType(IStore _store, bytes32 key) internal view returns (uint8 tileType) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 1);
    return (uint8(Bytes.slice1(_blob, 0)));
  }

  /** Set tileType */
  function setTileType(bytes32 key, uint8 tileType) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _keyTuple, 1, abi.encodePacked((tileType)));
  }

  /** Set tileType (using the specified store) */
  function setTileType(IStore _store, bytes32 key, uint8 tileType) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    _store.setField(_tableId, _keyTuple, 1, abi.encodePacked((tileType)));
  }

  /** Get isEntry */
  function getIsEntry(bytes32 key) internal view returns (bool isEntry) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 2);
    return (_toBool(uint8(Bytes.slice1(_blob, 0))));
  }

  /** Get isEntry (using the specified store) */
  function getIsEntry(IStore _store, bytes32 key) internal view returns (bool isEntry) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 2);
    return (_toBool(uint8(Bytes.slice1(_blob, 0))));
  }

  /** Set isEntry */
  function setIsEntry(bytes32 key, bool isEntry) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    StoreSwitch.setField(_tableId, _keyTuple, 2, abi.encodePacked((isEntry)));
  }

  /** Set isEntry (using the specified store) */
  function setIsEntry(IStore _store, bytes32 key, bool isEntry) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    _store.setField(_tableId, _keyTuple, 2, abi.encodePacked((isEntry)));
  }

  /** Get the full data */
  function get(bytes32 key) internal view returns (TileData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = StoreSwitch.getRecord(_tableId, _keyTuple, getSchema());
    return decode(_blob);
  }

  /** Get the full data (using the specified store) */
  function get(IStore _store, bytes32 key) internal view returns (TileData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    bytes memory _blob = _store.getRecord(_tableId, _keyTuple, getSchema());
    return decode(_blob);
  }

  /** Set the full data using individual values */
  function set(bytes32 key, uint8 terrain, uint8 tileType, bool isEntry) internal {
    bytes memory _data = encode(terrain, tileType, isEntry);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    StoreSwitch.setRecord(_tableId, _keyTuple, _data);
  }

  /** Set the full data using individual values (using the specified store) */
  function set(IStore _store, bytes32 key, uint8 terrain, uint8 tileType, bool isEntry) internal {
    bytes memory _data = encode(terrain, tileType, isEntry);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    _store.setRecord(_tableId, _keyTuple, _data);
  }

  /** Set the full data using the data struct */
  function set(bytes32 key, TileData memory _table) internal {
    set(key, _table.terrain, _table.tileType, _table.isEntry);
  }

  /** Set the full data using the data struct (using the specified store) */
  function set(IStore _store, bytes32 key, TileData memory _table) internal {
    set(_store, key, _table.terrain, _table.tileType, _table.isEntry);
  }

  /** Decode the tightly packed blob using this table's schema */
  function decode(bytes memory _blob) internal pure returns (TileData memory _table) {
    _table.terrain = (uint8(Bytes.slice1(_blob, 0)));

    _table.tileType = (uint8(Bytes.slice1(_blob, 1)));

    _table.isEntry = (_toBool(uint8(Bytes.slice1(_blob, 2))));
  }

  /** Tightly pack full data using this table's schema */
  function encode(uint8 terrain, uint8 tileType, bool isEntry) internal view returns (bytes memory) {
    return abi.encodePacked(terrain, tileType, isEntry);
  }

  /** Encode keys as a bytes32 array using this table's schema */
  function encodeKeyTuple(bytes32 key) internal pure returns (bytes32[] memory _keyTuple) {
    _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));
  }

  /* Delete all data for given keys */
  function deleteRecord(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((key));

    _store.deleteRecord(_tableId, _keyTuple);
  }
}

function _toBool(uint8 value) pure returns (bool result) {
  assembly {
    result := value
  }
}
