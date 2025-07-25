import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <div class="container">
      <h2>Você está logado com Google!</h2>
      <div><strong>Token JWT:</strong></div><div>{{ token.slice(-15) }}</div>

      <button (click)="logout()">Sair (Logoff)</button>

      <div>
        <h3>Suas Tarefas</h3>
          <div *ngFor="let todo of todos">
            <input type="checkbox" [checked]="todo.done" disabled />
            {{ todo.title }}
          </div>
      </div>
    </div>
  `
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  token: string | null = null;

  constructor(private todoService: TodoService, private authService: AuthService) {}

  ngOnInit(): void {
    this.token = this.authService.getToken();

    if (this.token) {
      this.todoService.getTodos(this.token).subscribe({
        next: (data) => {
          this.todos = data;
        },
        error: (err) => {
          console.error('Erro ao carregar todos:', err);
        }
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
