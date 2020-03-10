import { Injectable } from '@angular/core';
import { CounterServiceService } from './counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CounterServiceService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.activeCount.emit(this.activeUsers.length);
    this.countService.inactiveCount.emit(this.inactiveUsers.length);
    
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.inactiveCount.emit(this.inactiveUsers.length);
    this.countService.activeCount.emit(this.activeUsers.length);
    
  }
}
