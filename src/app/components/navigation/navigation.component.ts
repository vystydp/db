import {Component, OnInit} from '@angular/core';
import {BoardService} from '../board/board.service';
import {Person} from '../../types/Person';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user: Person;

  constructor(private boardService: BoardService) {
    this.user = this.boardService.getUser(false);
  }

  ngOnInit(): void {

  }

  onUserReAssignClick(event): void {
    this.user = this.boardService.getUser(true);
  }

}
