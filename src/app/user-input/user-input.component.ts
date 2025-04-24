import { InvestmentService } from './../investment.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService) {}
  // onSubmit() {
  //   this.calculate.emit({
  //     initialInvestment: +this.enteredInitialInvestment,
  //     annualInvestment: +this.enteredAnnualInvestment,
  //     expectedReturn: +this.enteredExpectedReturn,
  //     duration: +this.enteredDuration,
  //   });
  // }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });

    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
