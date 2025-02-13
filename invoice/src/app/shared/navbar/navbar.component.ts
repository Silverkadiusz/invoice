import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName: string = 'Jan Kowalski'; // Można pobierać z backendu w przyszłości
  notifications: number = 3; // Przykładowa liczba powiadomień
  searchQuery: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  searchInvoices() {
    console.log('Wyszukano: ', this.searchQuery);
    // Można dodać obsługę filtrowania faktur
  }
}
