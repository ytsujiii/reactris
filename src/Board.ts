import { MinoCoord, MinoRotation, MinoShape, MinoType } from './constants/Mino';
import Mino from './Mino';
import { BoardSquares } from './constants/Board';

export default class Board {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    public buildSquares(): BoardSquares {
        return Array.from(Array(this.height)).map(() => {
            return Array.from(Array(this.width)).map(() => MinoType.none);
        });
    }

    public copySquares(squares: BoardSquares): BoardSquares {
        return squares.map(row => row.map(square => square)); // deepcopied board
    }

    public isValidCoord(c: MinoCoord): boolean {
        return 0 <= c.x &&
            0 <= c.y &&
            c.x < this.height &&
            c.y < this.width;
    }

    public placeMinoIfPossible(
        oldSquares: BoardSquares,
        mino: Mino, // including oldCoord, oldRotation
        newCoord: MinoCoord,
        newRotation: MinoRotation,
    ): BoardSquares {
        if (! this.isValidCoord(newCoord)) {
            console.log('Invalid coord', mino, newCoord, newRotation);
            return oldSquares;
        }
        const newSquares = this.copySquares(oldSquares);
        const oldMinoShape = MinoShape[mino.type][mino.rotation];
        const newMinoShape = MinoShape[mino.type][newRotation];
        // delete current mino
        oldMinoShape.map((row, dy) => {
            row.map((square, dx) => {
                newSquares[mino.coord.y + dy][mino.coord.x + dx] = MinoType.none;
            });
        });
        // place new mino
        newMinoShape.map((row, dy) => {
            row.map((square, dx) => {
                // not placeable
                if (square !== MinoType.none && oldSquares[newCoord.y][newCoord.x] !== MinoType.none) {
                    console.log('Implaceable mino', mino, newCoord, newRotation);
                    return oldSquares;
                }
                newSquares[newCoord.y + dy][newCoord.x + dx] = square;
            });
        });
        return newSquares;
    }

}