import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  // Add any necessary properties or methods here

  educationList = [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Science in Computer Science',
      dates: 'August 2015 - May 2019'
    },
    {
      institution: 'Community College of Example',
      degree: 'Associate of Arts in General Studies',
      dates: 'August 2013 - May 2015'
    }
  ];

  experienceList = [
    {
      company: 'Example Company',
      position: 'Software Engineer',
      dates: 'June 2019 - Present',
      responsibilities: [
        'Develop and maintain web applications using Angular and Node.js',
        'Collaborate with cross-functional teams to design and implement new features',
        'Debug and fix issues in existing codebase'
      ]
    },
    {
      company: 'Another Company',
      position: 'Intern',
      dates: 'May 2018 - August 2018',
      responsibilities: [
        'Assisted with software development tasks',
        'Learned about software development best practices',
        'Attended team meetings and contributed ideas'
      ]
    }
  ];

  skillsList = [
    'Angular',
    'Node.js',
    'JavaScript',
    'HTML/CSS',
    'Git',
    'Agile/Scrum'
  ];
}
