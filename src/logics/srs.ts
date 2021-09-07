import { MinoInterface, MinoRotation, MinoType } from '../constants/Mino';

export type SrsPhase = 0 | 1 | 2 | 3 | 4;

const srs = (mino: MinoInterface, rotationDiff: -1 | 1, phase: SrsPhase): MinoInterface => {
  const newRotation = ((mino.rotation + rotationDiff + 4) % 4) as MinoRotation;
  const rotatedMino = { ...mino, rotation: newRotation };
  if (phase === 0) {
    return rotatedMino;
  }
  if (mino.type === MinoType.i) {
    // Iミノ
    let mino1;
    if (newRotation === 0) {
      mino1 = { ...rotatedMino, coord: mino.coord.move({ dx: -rotationDiff * 2 }) };
    } else if (newRotation === 1) {
      mino1 = { ...rotatedMino, coord: mino.coord.right() };
    } else if (newRotation === 2) {
      mino1 = { ...rotatedMino, coord: mino.coord.move({ dx: -rotationDiff }) };
    } else {
      mino1 = { ...rotatedMino, coord: mino.coord.left() };
    }
    let mino2;
    if (newRotation === 0) {
      mino2 = { ...rotatedMino, coord: mino.coord.move({ dx: rotationDiff }) };
    } else if (newRotation === 1) {
      mino2 = { ...rotatedMino, coord: mino.coord.left() };
    } else if (newRotation === 2) {
      mino2 = { ...rotatedMino, coord: mino.coord.move({ dx: rotationDiff * 2 }) };
    } else {
      mino2 = { ...rotatedMino, coord: mino.coord.right() };
    }
    switch (phase) {
      case 1:
        return mino1;
      case 2:
        return mino2;
      case 3: {
        const amount = rotationDiff === -1 ? 2 : 1;
        if (newRotation === 0 || newRotation === 2) {
          if (mino.rotation === 1) {
            return { ...rotatedMino, coord: mino1.coord.move({ dy: -amount }) };
          } else {
            return { ...rotatedMino, coord: mino2.coord.move({ dy: amount }) };
          }
        } else if (newRotation === 1) {
          return { ...rotatedMino, coord: mino1.coord.move({ dy: amount }) };
        } else {
          return { ...rotatedMino, coord: mino1.coord.move({ dy: -amount }) };
        }
      }
      case 4: {
        const amount = rotationDiff === 1 ? 2 : 1;
        if (newRotation === 0 || newRotation === 2) {
          if (mino.rotation === 1) {
            return { ...rotatedMino, coord: mino2.coord.move({ dy: amount }) };
          } else {
            return { ...rotatedMino, coord: mino1.coord.move({ dy: -amount }) };
          }
        } else if (newRotation === 1) {
          return { ...rotatedMino, coord: mino2.coord.move({ dy: -amount }) };
        } else {
          return { ...rotatedMino, coord: mino2.coord.move({ dy: amount }) };
        }
      }
    }
  } else {
    // Iミノ以外
    let mino1;
    if (newRotation === 0) {
      mino1 = { ...rotatedMino, coord: mino.coord.move({ dx: -rotationDiff }) };
    } else if (newRotation === 1) {
      mino1 = { ...rotatedMino, coord: mino.coord.left() };
    } else if (newRotation === 2) {
      mino1 = { ...rotatedMino, coord: mino.coord.move({ dx: rotationDiff }) };
    } else {
      mino1 = { ...rotatedMino, coord: mino.coord.right() };
    }
    let mino3;
    if (newRotation === 1 || newRotation === 3) {
      mino3 = { ...rotatedMino, coord: mino.coord.down().down() };
    } else {
      mino3 = { ...rotatedMino, coord: mino.coord.up().up() };
    }
    switch (phase) {
      case 1:
        return mino1;
      case 2:
        if (newRotation === 1 || newRotation === 3) {
          return { ...rotatedMino, coord: mino1.coord.up() };
        } else {
          return { ...rotatedMino, coord: mino1.coord.down() };
        }
      case 3:
        return mino3;
      case 4:
        if (newRotation === 0 || newRotation === 2) {
          return { ...rotatedMino, coord: mino3.coord.move({ dx: -rotationDiff }) };
        } else if (newRotation === 1) {
          return { ...rotatedMino, coord: mino3.coord.left() };
        } else {
          return { ...rotatedMino, coord: mino3.coord.right() };
        }
    }
  }
};

export default srs;
