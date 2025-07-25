import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userProfile: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  loginWithGoogle(): void {
    window.location.href = 'http://localhost:3000/auth/google';
  }

  handleCallback(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      console.log('✅ Token salvo no localStorage:', token);
      this.router.navigate(['/todos']); // <- futura rota protegida
    } else {
      console.warn('❌ Nenhum token encontrado na URL.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('jwt_token');
    window.location.href = 'http://localhost:3000/auth/logout'; // ou redirecione para login
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
