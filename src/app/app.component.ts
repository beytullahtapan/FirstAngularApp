import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import Swal from 'sweetalert2';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  job: string;
  age: number;
}

class UserModel implements User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public job: string,
    public age: number
  ) {}
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First Angular Project';
  user: User = new UserModel('', '', '', '', 0);
  saved = false;

  save() {
    // Simulated save operation
    this.saved = true;

    // SweetAlert2 ile bildirim gösterme
    Swal.fire('Başarılı!', `${this.user.firstname} Kayıt Edildi!`, 'success');
  }
}
