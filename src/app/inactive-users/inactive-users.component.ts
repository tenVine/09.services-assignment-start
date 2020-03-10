import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../service/user.service';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService, private countService: CounterServiceService){
    this.countService.inactiveCount.subscribe((res) => {
      res = this.userService.inactiveUsers.length;
    })
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }
}
