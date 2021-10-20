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
        'Yes, you can cancel a game anytime up until the game changes from pending execution to awaiting lottery state when the contract is executing and processing the payout to the winner'
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
      ),
      new QuestionModel(
        'What are the steps to play a game?',
        'You can either join an existing game on the "Open Games" tab, or Create a new game. Only once the player count is reached for that lottery will the smart contract execute and issue the payout to the winner. Games can be created with random.org audit protection hosting the winner selection on their reporting pages to verify they are indeed drawing the winners.'
      ),
      new QuestionModel(
        'Why arent all the games random.org audit hosted games?',
        'Random.org charges around a $5 fee every lottery to audit and host the report for a five year period of time. This fee is deducted from the total game payout to cover the cost, so it is split amongst the players * the bets made'
      )
    ];


  }

  ngOnInit(): void {
  }

}
