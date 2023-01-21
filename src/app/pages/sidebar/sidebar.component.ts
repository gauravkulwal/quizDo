import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subjects = [
    'angular' , 'java' , 'maths'
  ]
  innerWidth!: number;
  sidebarShow = true;
  subject!: any;
  constructor(private router:Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
   this.windowResize(this.innerWidth);
  }


  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.windowResize(this.innerWidth);
  }
 
  onSubmitSubject(subject: any){
    
    this.router.navigate(['/quiz' , subject])
  .then(() => {
    window.location.reload();
  });
  }
  onClick(){
    this.router.navigate(['/quiz' , this.subject]).then(() => {
      window.location.reload();
    });
  }
  windowResize(size: any){
    if(size < 450){
      this.sidebarShow = false;
    }
    else{
      this.sidebarShow = true;
    }
  }
}
