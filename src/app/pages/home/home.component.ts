import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
subjects = [
  'angular' , 'java' , 'maths'
]
subject!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
onClick(){
  this.router.navigate(['/quiz' , this.subject]);
}
}
