import { Component, OnInit } from '@angular/core';
import { pionex } from 'ccxt';

@Component({
  selector: 'ngx-pionex-screener',
  templateUrl: './pionex-screener.component.html',
  styleUrls: ['./pionex-screener.component.scss']
})
export class PionexScreenerComponent implements OnInit{

  exchange = new pionex({});

  constructor() {}

  ngOnInit(): void {
    this.exchange.fetchMarkets().then((data) => {
      console.log(data);
    });
  }
}
