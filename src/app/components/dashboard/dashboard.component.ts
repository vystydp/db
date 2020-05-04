import { Component, OnInit } from '@angular/core';
import {BoardService} from '../board/board.service';
import {Board, Seat} from '../../types/Board';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public board: Board;
  public seats: Seat[];

  constructor(public readonly boardService: BoardService) { }

  ngOnInit(): void {
    this.board = this.boardService.getCurrentBoard();
  }

}
