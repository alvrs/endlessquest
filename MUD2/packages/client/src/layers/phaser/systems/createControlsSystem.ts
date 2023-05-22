import { Direction } from "../constants";
import { PhaserLayer } from "../createPhaserLayer";
import { TILE_HEIGHT, TILE_WIDTH } from "../constants";

export function createControlsSystem(layer: PhaserLayer) {
  const {
    scenes: {
      Main: {
        input,
        phaserScene,
      },
    },
    networkLayer: {
      systemCalls: {
        move,
      },
    },
  } = layer;

  const _moveGhost = (direction: Direction) => {
    const ghost = phaserScene.children.getChildren().find((object) => object.name === 'Ghost') as Phaser.GameObjects.Sprite
    if (ghost) {
      if (direction == Direction.Up) {
        ghost.setY(ghost.y - TILE_HEIGHT)
      } else if (direction == Direction.Down) {
        ghost.setY(ghost.y + TILE_HEIGHT)
      } else if (direction == Direction.Left) {
        ghost.setX(ghost.x - TILE_WIDTH)
      } else if (direction == Direction.Right) {
        ghost.setX(ghost.x + TILE_WIDTH)
      }
      ghost.setVisible(true)
    }
  }

  input.onKeyPress(
    keys => keys.has("W"),
    () => {
      move(Direction.Up);
      _moveGhost(Direction.Up);
    });

  input.onKeyPress(
    keys => keys.has("A"),
    () => {
      move(Direction.Left);
      _moveGhost(Direction.Left);
    }
  );

  input.onKeyPress(
    keys => keys.has("S"),
    () => {
      move(Direction.Down);
      _moveGhost(Direction.Down);
    }
  );

  input.onKeyPress(
    keys => keys.has("D"),
    () => {
      move(Direction.Right);
      _moveGhost(Direction.Right);
    }
  );
}