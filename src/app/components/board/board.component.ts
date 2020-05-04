import {Component, OnInit} from '@angular/core';
import {Board} from '../../types/Board';
import {Person} from '../../types/Person';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BoardService} from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public user: Person;

  public boardWidth: number;

  public board: Board;

  public xmlCode: string = '<svg height="210" width="<boardWidth>">\n' +
    '    <line x1="0" y1="50" x2="<x2>" y2="50" style="stroke:rgb(0,0,0);stroke-width:2"/>\n' +
    '    <line x1="0" y1="50" x2="1" y2="0" style="stroke:rgb(0,0,0);stroke-width:2"/>\n' +
    '    <line x1="<x21>" y1="50" x2="<x22>" y2="0" style="stroke:rgb(0,0,0);stroke-width:3"/>\n' +
    '    <text x="<textX>" y="25" class="small">screen</text>\n' +
    '    Sorry, your browser does not support inline SVG.\n' +
    '  </svg>';

  public svg: SafeHtml;

  constructor(private sanitizer: DomSanitizer, public readonly boardService: BoardService) {

  }

  ngOnInit(): void {
    this.board = this.boardService.getCurrentBoard();
    this.boardWidth = this.boardService.boardWidth();
    this.svg = this.sanitizer.bypassSecurityTrustHtml(this.xmlCode
      .replace('<boardWidth>', this.boardWidth.toString())
      .replace('<x2>', this.boardWidth.toString())
      .replace('<x21>', this.boardWidth.toString())
      .replace('<x22>', this.boardWidth.toString())
      .replace('<textX>', (this.boardWidth / 2 - 10).toString())
    );
  }

  onSeatClick(event, yAxis, xAxis): void {
    event.preventDefault();
    if (this.board[yAxis][xAxis].isFree) {
      Object.assign(this.board[yAxis][xAxis], {
        isFree: false,
        owner: this.boardService.getUser(false),
        row: yAxis,
        column: xAxis,
        reservedAt: new Date().toUTCString()
      });
    } else {
      alert('Seat is not available, its owned by ' + this.board[yAxis][xAxis].owner.getUserInfo());
    }
  }


}
