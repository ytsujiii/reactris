export enum MinoEvent {
  rotateLeft,
  rotateRight,
  moveLeft,
  moveRight,
  drop,
  hardDrop,
}

export interface MinoType {
  rotation: MinoRotation;
  type: BlockType;
  coord: MinoCoord;
}

export enum BlockType {
  i,
  o,
  t,
  s,
  z,
  j,
  l,
  none,
}
export type MinoRotation = 0 | 1 | 2 | 3;
export interface MinoCoord {
  y: number;
  x: number;
}
export const MinoShape = [
  [
    [
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
      [BlockType.i, BlockType.i, BlockType.i, BlockType.i],
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.i, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.i, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.i, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.i, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
      [BlockType.i, BlockType.i, BlockType.i, BlockType.i],
      [BlockType.none, BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.i, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.i, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.i, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.i, BlockType.none, BlockType.none],
    ],
  ],
  [
    [
      [BlockType.o, BlockType.o],
      [BlockType.o, BlockType.o],
    ],
    [
      [BlockType.o, BlockType.o],
      [BlockType.o, BlockType.o],
    ],
    [
      [BlockType.o, BlockType.o],
      [BlockType.o, BlockType.o],
    ],
    [
      [BlockType.o, BlockType.o],
      [BlockType.o, BlockType.o],
    ],
  ],
  [
    [
      [BlockType.none, BlockType.t, BlockType.none],
      [BlockType.t, BlockType.t, BlockType.t],
      [BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.t, BlockType.none],
      [BlockType.none, BlockType.t, BlockType.t],
      [BlockType.none, BlockType.t, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none],
      [BlockType.t, BlockType.t, BlockType.t],
      [BlockType.none, BlockType.t, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.t, BlockType.none],
      [BlockType.t, BlockType.t, BlockType.none],
      [BlockType.none, BlockType.t, BlockType.none],
    ],
  ],
  [
    [
      [BlockType.none, BlockType.s, BlockType.s],
      [BlockType.s, BlockType.s, BlockType.none],
      [BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.s, BlockType.none],
      [BlockType.none, BlockType.s, BlockType.s],
      [BlockType.none, BlockType.none, BlockType.s],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none],
      [BlockType.none, BlockType.s, BlockType.s],
      [BlockType.s, BlockType.s, BlockType.none],
    ],
    [
      [BlockType.s, BlockType.none, BlockType.none],
      [BlockType.s, BlockType.s, BlockType.none],
      [BlockType.none, BlockType.s, BlockType.none],
    ],
  ],
  [
    [
      [BlockType.z, BlockType.z, BlockType.none],
      [BlockType.none, BlockType.z, BlockType.z],
      [BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.z],
      [BlockType.none, BlockType.z, BlockType.z],
      [BlockType.none, BlockType.z, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none],
      [BlockType.z, BlockType.z, BlockType.none],
      [BlockType.none, BlockType.z, BlockType.z],
    ],
    [
      [BlockType.none, BlockType.z, BlockType.none],
      [BlockType.z, BlockType.z, BlockType.none],
      [BlockType.z, BlockType.none, BlockType.none],
    ],
  ],
  [
    [
      [BlockType.j, BlockType.none, BlockType.none],
      [BlockType.j, BlockType.j, BlockType.j],
      [BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.j, BlockType.j],
      [BlockType.none, BlockType.j, BlockType.none],
      [BlockType.none, BlockType.j, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none],
      [BlockType.j, BlockType.j, BlockType.j],
      [BlockType.none, BlockType.none, BlockType.j],
    ],
    [
      [BlockType.none, BlockType.j, BlockType.none],
      [BlockType.none, BlockType.j, BlockType.none],
      [BlockType.j, BlockType.j, BlockType.none],
    ],
  ],
  [
    [
      [BlockType.none, BlockType.none, BlockType.l],
      [BlockType.l, BlockType.l, BlockType.l],
      [BlockType.none, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.none, BlockType.l, BlockType.none],
      [BlockType.none, BlockType.l, BlockType.none],
      [BlockType.none, BlockType.l, BlockType.l],
    ],
    [
      [BlockType.none, BlockType.none, BlockType.none],
      [BlockType.l, BlockType.l, BlockType.l],
      [BlockType.l, BlockType.none, BlockType.none],
    ],
    [
      [BlockType.l, BlockType.l, BlockType.none],
      [BlockType.none, BlockType.l, BlockType.none],
      [BlockType.none, BlockType.l, BlockType.none],
    ],
  ],
];