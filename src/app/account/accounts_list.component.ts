import {Component} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})

// export so it is reuseable else where
export class AccountsList{
  private _selected:Array<boolean> = [false, false]; // default not selected

  private _accounts:Array<Account> = [
    {
      id:1,
      title:'Bank Xyz',
      description:'This is my main bank Account.',
      balance:501.2
    },
    {
      //new Account(2, 'Bank Asd', 'My secret Bank Account.', 1024.10)
      id:2,
      title:'Bank Asd',
      description:'My secret Bank Account.',
      balance:1024.10
    }
  ];


  private removeAcc(index:number){
    this._accounts.splice(index, 1)
    this._selected.splice(index, 1)
  }

  private select(index:number){
    this._selected[index] = !this._selected[index]
  }
}
