import Board from './Board';
import { BoardSquares } from './constants/Board';
import { MinoCoord, MinoEvent, MinoRotation, MinoType } from './constants/Mino';

export default class Mino {
  rotation: MinoRotation;
  type: MinoType;
  coord: MinoCoord;

  constructor(rotation: MinoRotation, type: MinoType, coord: MinoCoord) {
    this.rotation = rotation;
    this.type = type;
    this.coord = coord;
  }
  public processMinoEvent(board: Board, squares: BoardSquares, event: MinoEvent): BoardSquares {
    switch (event) {
      case MinoEvent.drop:
        return this.drop(board, squares);
      case MinoEvent.rotateLeft:
        return this.rotateLeft(board, squares);
      case MinoEvent.rotateRight:
        return this.rotateRight(board, squares);
      default:
        return squares;
    }
  }
  public rotateLeft(board: Board, squares: BoardSquares): BoardSquares {
    return this.rotate(board, squares, 3);
  }
  public rotateRight(board: Board, squares: BoardSquares): BoardSquares {
    return this.rotate(board, squares, 1);
  }
  protected rotate(board: Board, squares: BoardSquares, rotationDiff: 1 | 3): BoardSquares {
    const newRotation = ((this.rotation + rotationDiff) % 4) as MinoRotation;
    const result = board.placeMinoIfPossible(squares, this, this.coord, newRotation);
    if (!result) {
      return squares;
    }
    this.rotation = newRotation;
    return result;
  }
  public drop(board: Board, squares: BoardSquares): BoardSquares {
    const newCoord = { y: this.coord.y + 1, x: this.coord.x };
    const result = board.placeMinoIfPossible(squares, this, newCoord, this.rotation);
    if (!result) {
      return squares;
    }
    this.coord = newCoord;
    return result;
  }
}
