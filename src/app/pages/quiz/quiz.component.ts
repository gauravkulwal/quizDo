import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
subjectName!: any;
questionArray: any = [];
tempArray: any = [];
colorClass = 'white';
marks = 0;
randomNumber: any = [];
currentQuestionNumber = 0;
  constructor(private activatedRoute: ActivatedRoute,
              private quizService:QuizService) { }

  ngOnInit(): void {
    this.getSubjectName();
    this.quizService.getQuiz(this.subjectName).subscribe((res: any) => {
      console.log(res.questions);
      this.questionArray = res.questions;
      this.randomNumbers();
    })
    
  }




  getSubjectName(){
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res.subject),
      this.subjectName = res.subject;
    })
  }
randomNumbers(){
for(let i=0; i< this.questionArray.length ; i++){
  this.tempArray.push(i);
}
var i = this.tempArray.length,
j = 0;

while (i--) {
j = Math.floor(Math.random() * (i+1));
this.randomNumber.push(this.tempArray[j]);
this.tempArray.splice(j,1);
}
console.log(this.randomNumber)
}
  
onSubmit(option:any){
if(option.correct == true){

}

}
previous(){
  this.currentQuestionNumber--;
}
next(){
  this.currentQuestionNumber++;
}
}
