import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';  // Dodajemy obsługę wiadomości o błędach i sukcesie
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // Dodajemy spinner ładowania

@NgModule({
  declarations: [LoginComponent, RegisterComponent], // Rejestrujemy komponenty logowania i rejestracji
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    MessageModule,         // PrimeNG Message (do obsługi błędów)
    ProgressSpinnerModule  // PrimeNG Spinner (do ładowania)
  ]
})
export class AuthModule {}
