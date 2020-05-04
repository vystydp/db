import {Injectable} from '@angular/core';
import {Board, Seat} from '../../types/Board';
import {Person} from '../../types/Person';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private ROWS_NUM = 10;

  private COLUMNS_NUM = 10;

  private CELL_WIDTH = 50;

  private readonly board: Board;

  private user: Person;

  public constructor() {
    this.board = this.createEmptySeatsStructure();
    this.user = new Person();
  }

  private createEmptySeatsStructure(): Board {
    const seats: Board = {};
    for (let index = 0; index < this.ROWS_NUM; index++) {
      seats[index] = Array(this.COLUMNS_NUM).fill(null).map(() => ({isFree: true}));
    }
    return seats;
  }

  public getSeatsByUserId(): Seat[] {
    const seats = [];
    Object.values(this.board).forEach((item: Seat[]) => item.forEach((seat) => {
          if (!seat.isFree && seat.owner.getId() === this.user.getId()) {
            seats.push(seat);
          }
        }
      ));
    return seats;
  }

  public getUser(forceNew?: boolean): Person {
    this.user = forceNew ? new Person() : this.user;
    return this.user;
  }

  public getCurrentBoard(): Board {
    return this.board;
  }

  public boardWidth(): number {
    return this.COLUMNS_NUM * this.CELL_WIDTH;
  }

}
