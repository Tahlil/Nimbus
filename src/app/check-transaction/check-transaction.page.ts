import { Component, OnInit } from '@angular/core';
import { MyTransactionsPage } from './my-transactions/my-transactions.page';
import { RequestsPage } from './requests/requests.page';
import { PendingPage } from './pending/pending.page';
import { AdvertisesPage } from './advertises/advertises.page';


@Component({
  selector: 'app-check-transaction',
  templateUrl: './check-transaction.page.html',
  styleUrls: ['./check-transaction.page.scss'],
})
export class CheckTransactionPage implements OnInit {
  MyTitlesPage = MyTransactionsPage;
  RequestsPage = RequestsPage;
  TxPage = PendingPage;
  AdPage = AdvertisesPage;

  constructor() { }

  ngOnInit() {
  }

}
