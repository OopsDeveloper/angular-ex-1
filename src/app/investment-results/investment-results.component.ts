import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultsData;
  }

  trackByYear(_: number, result: { year: number }) {
    return result.year;
  }
}
