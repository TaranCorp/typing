import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing Challenge';
  typingExample = lorem.sentence();
  userAnswer = '';
  spliterator = "";

  matchAnswer(target: any) {
    this.userAnswer = target.value;
  }

  checkAnswer() {
    return this.typingExample === this.userAnswer;
  }

  compare(exampleLetter: string, userAnswerLetter: string | undefined) {
    if (!userAnswerLetter) {
      return "empty-answer";
    }
    return exampleLetter === userAnswerLetter 
            ? 'match' 
            : 'not-match';
  }

  getMatchingPercentage() {
    const splittedExample = this.typingExample.split('');
    let letterMatchCounter = 0;

    for (let i = 0; i <= this.userAnswer.length; i++) {
      if (this.areValuesDefined(splittedExample, i) 
          && splittedExample[i] === this.userAnswer[i]) {
        letterMatchCounter++;
      }
    }
    
    return Math.round(
      this.calculatePercentage(letterMatchCounter, splittedExample)
    );
  }

  private areValuesDefined(splittedExample: string[], i: number) {
    return splittedExample[i] &&
      this.userAnswer[i];
  }

  private calculatePercentage(letterMatchCounter: number, splittedExample: string[]): number {
    return letterMatchCounter * 100 / splittedExample.length;
  }
}
