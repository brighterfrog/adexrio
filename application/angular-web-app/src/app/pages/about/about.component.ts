import { Component, OnInit } from '@angular/core';
import { ShellService } from 'src/app/services/shell.service';

export class QuestionModel {
  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }
  question: string;
  answer: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  shellService: ShellService;
  questions: QuestionModel[];

  constructor(shellService: ShellService) {
    this.shellService = shellService;
    this.shellService.headerTitle = 'about';

    this.questions = [
      new QuestionModel(
        'Can I cancel a game to get my VET back?',
        'Yes, you can cancel a game up until the game changes from pending execution to awaiting lottery state'
      ),
      new QuestionModel(
        'How are winners chosen?',
        'Winners are chosen once the smart contract executes the lottery phase of the game by pulling a winner from random.org'
      ),
      new QuestionModel(
        'How do I know random.org chose the winner?',
        'The audit produced from random.org is hosted on their site for 5 years after a game with the draw id audit saved on chain'
      ),
      new QuestionModel(
        'How does a game work?',
        'Game creator sets the wager everyone must match. On the last player to join the game, the contract executes the drawing for a winner'
      )
    ];


  }

  ngOnInit(): void {
  }

}
