import { useComponentValue, useEntityQuery, useRow } from '@latticexyz/react'
import { Has, HasValue, getComponentValueStrict } from '@latticexyz/recs'
import { useMUD } from '../../store'
import { useEffect } from 'react'

export const TestBridge = () => {
  const {
    networkLayer: {
      components: { Counter, Tile },
      systemCalls: { increment, decrement, bridge_tokenId, bridge_chamber },
      singletonEntity, storeCache,
    }
  } = useMUD()

  const counter = useComponentValue(Counter, singletonEntity)
  const tokenId = BigInt(counter?.value?.toString() ?? '0')

  //
  // TokenSystem
  //
  // query by KEY
  const token = useRow(storeCache, { table: 'Token', key: { tokenId } })
  const coord = token?.value?.coord ?? 0n
  useEffect(() => {
    if (tokenId && !coord) {
      bridge_tokenId(tokenId)
    }
  }, [tokenId, coord])

  //
  // ChamberSystem
  //
  useEffect(() => {
    if (coord) {
      bridge_chamber(coord)
    }
  }, [coord])
  const chamberData = useRow(storeCache, { table: 'Chamber', key: { coord } })
  const seed = chamberData?.value?.seed?.toString() ?? null

  //
  // DoorSystem, TileSystem
  //
  // query by VALUE
  const tiles = useEntityQuery([HasValue(Tile, { terrain: chamberData?.value?.terrain })]) ?? []

  return (
    <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '200px',
    }}>
      <div>
        Counter: <span>{counter?.value ?? '??'}</span>
      </div>
      <button type='button'
        onClick={async (event) => {
          event.preventDefault()
          console.log('new counter value < ', await decrement())
        }}
      >Decrement</button>
      <button type='button'
        onClick={async (event) => {
          event.preventDefault()
          console.log('new counter value > ', await increment())
        }}
      >Increment</button>

      <hr />
      {/* <button type='button'
        onClick={async (event) => {
          event.preventDefault()
          console.log('get coord:', await tokenIdToCoord(BigInt(tokenId)))
        }}
      >
        Make coord
      </button> */}
      <div>coord: {coord?.toString() ?? '?'}</div>

      <hr />
      <div>seed: {seed ?? '?'}</div>

      <div>tiles: {
        [...tiles].map(id => {
          const data = getComponentValueStrict(Tile, id)
          return <span key={`_${id}`}>{data.tileType},</span>
        })}</div>

    </div>
  )
}
