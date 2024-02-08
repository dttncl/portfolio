import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'Bernadette Corner';
  projects: Project[] = [];


  constructor(private projectService: ProjectService) {}

  openGitHub() {
    open('https://github.com/dttncl');
  }

  openLinkedIn() {
    open('https://www.linkedin.com/in/bnhfernando/');
  }

  openCV() {
    open('../assets/Bernadette-Fernando-Resume.pdf');
  }

  // function to get all the projects
  getProjects(): void {

    // handle an observable
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  // execute the function after constructing AppComponent instance
  ngOnInit(): void {
    this.getProjects();
  }
}
