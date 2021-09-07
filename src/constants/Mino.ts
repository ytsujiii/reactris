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
  shadow,
}
export type MinoRotation = 0 | 1 | 2 | 3;
export class MinoCoord {
  public readonly y: number;
  public readonly x: number;
  constructor({ y, x }: { y: number; x: number }) {
    this.y = y;
    this.x = x;
  }
  public move({ dy, dx }: { dy?: number; dx?: number }): MinoCoord {
    return new MinoCoord({
      y: dy ? this.y + dy : this.y,
      x: dx ? this.x + dx : this.x,
    });
  }
  public left(): MinoCoord {
    return this.move({ dx: -1 });
  }
  public right(): MinoCoord {
    return this.move({ dx: +1 });
  }
  public up(): MinoCoord {
    return this.move({ dy: -1 });
  }
  public down(): MinoCoord {
    return this.move({ dy: +1 });
  }
}
const initialCoords: MinoCoord[] = [
  new MinoCoord({ y: 0, x: 3 }), // i
  new MinoCoord({ y: 1, x: 4 }), // o
  new MinoCoord({ y: 1, x: 3 }), // t
  new MinoCoord({ y: 1, x: 3 }), // s
  new MinoCoord({ y: 1, x: 3 }), // z
  new MinoCoord({ y: 1, x: 3 }), // j
  new MinoCoord({ y: 1, x: 3 }), // l
];
export const getMinoShape = (type: MinoType, rotation: MinoRotation): BlockType[][] => {
  return MinoShape[type][rotation];
};
// 空行をカットして取得
export const getFittedMinoShape = (type: MinoType, rotation: MinoRotation): BlockType[][] => {
  return MinoShape[type][rotation].filter((row) => {
    return row.some((block) => block !== BlockType.none);
  });
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
