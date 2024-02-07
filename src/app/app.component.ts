import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'portfolio';

  openGitHub() {
    open('https://github.com/dttncl');
  }

  openLinkedIn() {
    open('https://www.linkedin.com/in/bnhfernando/');
  }

  openCV() {
    open('../assets/files/resume.pdf');
  }
}
