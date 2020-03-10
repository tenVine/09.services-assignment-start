import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../service/user.service';
import { CounterServiceService } from '../service/counter-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService, private countService: CounterServiceService) {
    this.countService.activeCount.subscribe((res) => {
      res = this.userService.activeUsers.length;
    })
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
  }
}
