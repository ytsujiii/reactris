export enum MinoEvent {
    rotateLeft,
    rotateRight,
    moveLeft,
    moveRight,
    drop,
    hardDrop,
}
export enum MinoType {
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
    y: number,
    x: number,
}
export const MinoShape = [
    [
        [
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
            [MinoType.i, MinoType.i, MinoType.i, MinoType.i],
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.i, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.i, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.i, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.i, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
            [MinoType.i, MinoType.i, MinoType.i, MinoType.i],
            [MinoType.none, MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.i, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.i, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.i, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.i, MinoType.none, MinoType.none],
        ],
    ],
    [
        [
            [MinoType.o, MinoType.o],
            [MinoType.o, MinoType.o],
        ],
        [
            [MinoType.o, MinoType.o],
            [MinoType.o, MinoType.o],
        ],
        [
            [MinoType.o, MinoType.o],
            [MinoType.o, MinoType.o],
        ],
        [
            [MinoType.o, MinoType.o],
            [MinoType.o, MinoType.o],
        ],
    ],
    [
        [
            [MinoType.none, MinoType.t, MinoType.none],
            [MinoType.t, MinoType.t, MinoType.t],
            [MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.t, MinoType.none],
            [MinoType.none, MinoType.t, MinoType.t],
            [MinoType.none, MinoType.t, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none],
            [MinoType.t, MinoType.t, MinoType.t],
            [MinoType.none, MinoType.t, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.t, MinoType.none],
            [MinoType.t, MinoType.t, MinoType.none],
            [MinoType.none, MinoType.t, MinoType.none],
        ],
    ],
    [
        [
            [MinoType.none, MinoType.s, MinoType.s],
            [MinoType.s, MinoType.s, MinoType.none],
            [MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.s, MinoType.none],
            [MinoType.none, MinoType.s, MinoType.s],
            [MinoType.none, MinoType.none, MinoType.s],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none],
            [MinoType.none, MinoType.s, MinoType.s],
            [MinoType.s, MinoType.s, MinoType.none],
        ],
        [
            [MinoType.s, MinoType.none, MinoType.none],
            [MinoType.s, MinoType.s, MinoType.none],
            [MinoType.none, MinoType.s, MinoType.none],
        ],
    ],
    [
        [
            [MinoType.z, MinoType.z, MinoType.none],
            [MinoType.none, MinoType.z, MinoType.z],
            [MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.z],
            [MinoType.none, MinoType.z, MinoType.z],
            [MinoType.none, MinoType.z, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none],
            [MinoType.z, MinoType.z, MinoType.none],
            [MinoType.none, MinoType.z, MinoType.z],
        ],
        [
            [MinoType.none, MinoType.z, MinoType.none],
            [MinoType.z, MinoType.z, MinoType.none],
            [MinoType.z, MinoType.none, MinoType.none],
        ],
    ],
    [
        [
            [MinoType.j, MinoType.none, MinoType.none],
            [MinoType.j, MinoType.j, MinoType.j],
            [MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.j, MinoType.j],
            [MinoType.none, MinoType.j, MinoType.none],
            [MinoType.none, MinoType.j, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none],
            [MinoType.j, MinoType.j, MinoType.j],
            [MinoType.none, MinoType.none, MinoType.j],
        ],
        [
            [MinoType.none, MinoType.j, MinoType.none],
            [MinoType.none, MinoType.j, MinoType.none],
            [MinoType.j, MinoType.j, MinoType.none],
        ],
    ],
    [
        [
            [MinoType.none, MinoType.none, MinoType.l],
            [MinoType.l, MinoType.l, MinoType.l],
            [MinoType.none, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.none, MinoType.l, MinoType.none],
            [MinoType.none, MinoType.l, MinoType.none],
            [MinoType.none, MinoType.l, MinoType.l],
        ],
        [
            [MinoType.none, MinoType.none, MinoType.none],
            [MinoType.l, MinoType.l, MinoType.l],
            [MinoType.l, MinoType.none, MinoType.none],
        ],
        [
            [MinoType.l, MinoType.l, MinoType.none],
            [MinoType.none, MinoType.l, MinoType.none],
            [MinoType.none, MinoType.l, MinoType.none],
        ],
    ],
];