import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats } from '../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // Mock data - replace with actual API calls in production
  private mockStats: DashboardStats = {
    totalEmployees: 150,
    totalFloors: 4,
    totalOffices: 40,
    totalSeats: 200,

  };

  getDashboardStats(): Observable<DashboardStats> {
    return of(this.mockStats);
  }
} 