import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: 'Angular, TypeScript, HTML, CSS',
      image: 'https://via.placeholder.com/350x200',
      github: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: 'React, JavaScript, HTML, CSS',
      image: 'https://via.placeholder.com/350x200',
      github: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      technologies: 'Vue.js, JavaScript, HTML, CSS',
      image: 'https://via.placeholder.com/350x200',
      github: null
    }
  ];

}
