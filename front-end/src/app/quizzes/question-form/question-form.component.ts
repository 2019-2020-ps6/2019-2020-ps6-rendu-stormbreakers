import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  questionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      label: [''],
      answers: this.fb.array([])
    }
    );
  }

  ngOnInit() {

  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  public createAnswer() {
    return this.fb.group({
      value: '',
      isCorrect: false
    });
  }

  addAnswer(){
    this.answers.push(this.createAnswer());
  }
}
