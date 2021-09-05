export enum MinoEvent {
  rotateLeft,
  rotateRight,
  moveLeft,
  moveRight,
  drop,
  hardDrop,
}

export interface MinoInterface {
  rotation: MinoRotation;
  type: MinoType;
  coord: MinoCoord;
}
export const getInitialMino = (type: MinoType): MinoInterface => {
  return { type, rotation: 0, coord: initialCoords[type] };
};
export enum MinoType {
  i,
  o,
  t,
  s,
  z,
  j,
  l,
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
const initialCoords: MinoCoord[] = [
  { y: 0, x: 3 }, // i
  { y: 1, x: 4 }, // o
  { y: 1, x: 3 }, // t
  { y: 1, x: 3 }, // s
  { y: 1, x: 3 }, // z
  { y: 1, x: 3 }, // j
  { y: 1, x: 3 }, // l
];
export const getMinoShape = (type: MinoType, rotation: MinoRotation): BlockType[][] => {
  return MinoShape[type][rotation];
};
const MinoShape = [
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
