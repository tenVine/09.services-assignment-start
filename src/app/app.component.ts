import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { CounterServiceService } from './service/counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  activeCount: number;
  inactiveCount: number;

  constructor(private userService: UserService, private countService: CounterServiceService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeCount = this.userService.activeUsers.length;
    this.inactiveCount = this.userService.inactiveUsers.length;
    this.countService.activeCount.subscribe((res) => {
      this.activeCount = res;
    });
    this.countService.inactiveCount.subscribe((res) => {
      this.inactiveCount = res;
    });
  }
}
