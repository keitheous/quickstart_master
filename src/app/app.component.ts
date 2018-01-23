import { Component } from '@angular/core';

// // This is for tutorial Part A : Introduction to Angular
// @Component({
//   selector: 'my-app', // tag used in index.html - look for 'loading changes'
//   // entirely possible, however wouldn't be recommended as there would be hundres of lines
//   // template: `<h1>Hello {{name}}!!!!</h1>`,
//
//   // would instead use a templateUrl, create new file app/app.component.html
//   templateUrl: 'app/app.component.html',
//
//   // used in tutorial 2 : property binding - used in html file - play around with colors
//   styles: ['.blue-bg{background-color:yellow;}']
// })
//
// // preword prior to tutorial 1, this is possible with template: in @Component
// // export class AppComponent { }
// // export class AppComponent { name = 'Keith Adrian Chong'; }
//
// // ====================================================================================================
// // ====================================================================================================
// // Tutorial 1 : interpolation - username variable is expecting a string with 'keitheous' assigned to it
// // this can be used in app.component.html in the interpolation
// // private means that it is not accessible outside of the class
// export class AppComponent {
//   private username:string = "Keitheous"
//
//   // currentUser of 'custom' type User is defined down below in interface User - object with properties
//   // matches the properties User interface down below - username and email. strings
//   //
//   private currentUser:User = {  username: 'KeithChong', email: 'keithchong@gmail.com' }
//
//   // private method that doesnt take in any parameters - empty parentheses, expected to return a string
//   private getUsername():string {
//     return this.currentUser.username
//     // this marks the current instance of the class(line 22) - currentUser(line 28)
//     // which pull username property(line 29)
//   }
//
//   private getEmail():string {
//     return this.currentUser.email // pulls email property of instance currentUser of class AppComponent
//   }
//
//   // ====================================================================================================
//   // ====================================================================================================
//   // Tutorial 2 : property binding
//
//   private hideEmail:boolean = true
//
//   private disabledInput:boolean = false
//
//   private isDisabled():boolean {
//     return this.disabledInput
//   }
//
//   private isBlueBg:boolean = true
//
//   private bgColor:string = 'red'
//
//   // changing these values and observe the changes on the html page
//   // ====================================================================================================
//   // ====================================================================================================
//   // Tutorial 3 : Event Binding
//
//   // uses hideEmail:boolean from tutorial 2
//   private toogle() {
//     //negate the current value
//     this.hideEmail = !this.hideEmail
//   }
//   // ====================================================================================================
//   // ====================================================================================================
//   // Tutorial 4 : Event Binding
//
//   // private method changemail accepts one param in parenthesis
//   // assigns currentUser.email with the newMail string
//   // overwrite currentUser's email
//   private changeMail(newMail:string) {
//     this.currentUser.email = newMail
//   }
//
//   private keyPress(event:KeyboardEvent) {
//     if (event.keyCode == 13){ // 13 is enter/return from the keyboard
//       var inputElement = <HTMLInputElement>event.target
//       this.changeMail(inputElement.value) // calling changeMail above
//     }
//   }
//   // ====================================================================================================
//   // ====================================================================================================
//   // Tutorial 5 : ng IF and For
//
//   private trueOrFalse:boolean = true // play around with this value
//
//   // deprecated? cant work
//   // private users:Array<User> = [
//   //   {username: "User1", email: "User1@example.com"},
//   //   {username: 'User2', email: 'user2@example.com'},
//   //   {username: 'User3', email: 'user3@example.com'},
//   //   {username: 'User4', email: 'user4@example.com'}
//   // ]
//
//   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
//
// }
//
// // similar to classes - only defines types - part of tutorial 1
// interface User {
//   username:string,
//   email:string
// }
//
// // please refer to app.component.html to see how these are being called
// // ====================================================================================================
// // ====================================================================================================


// // This is for Tutorial Part B : Building an application
//
// import {Account} from './account.model';
// // import to include export class Account
//
// @Component({
//   selector: 'my-app',
//
//   templateUrl: 'app/app.component_build_an_app_part2.html',
//   //file app/app.component_build_an_app_part2.html
//
//   styleUrls: ['app/app.component_build_an_app_part2.css']
// })
//
// export class AppComponent {
//
//   // variables are known as properties in angular
//   // naming convention for private var by placing _underscore in front of the name
//   // assumption: Account object - Array called _accounts
//   // the 2 ways to initialize an Account object
//   // private _propertyName:DataType<Object>
//   private _accounts:Array<Account> = [
//     {
//       id:1,
//       title:'Bank Xyz',
//       description:'This is my main bank Account.',
//       balance:501.2
//     },
//     new Account(2, 'Bank Asd', 'My secret Bank Account.', 1024.10)
//   ]
//
//   // assumption: _nextID is like a variable with 3 assigned to it
//   private _nextId = 3
//
//   // based on personal observation, this is a METHOD called by a template.
//   // when createAcc is called with 3 params passed in, we create an Account object
//   // with constructor method - 'new', then push it into the array _accounts
//   // then increment _nextID, and reset all the declaractions that follows,
//   // with '' and 0.
//   // This refers to the object in which this method is contained in
//   // (convention)
//   // titleEl, descEl and balEl here refers to the variables from html elements
//   private createAcc(titleEl:any, descEl:any, balEl:any){
//     this._accounts.push(
//       new Account(
//         this._nextId, // first iteration is 3 (increment after first iteration)
//         titleEl.value, // pull the value of html element titleEl
//         descEl.value,
//         balEl.value
//       )
//     )
//     this._nextId++
//
//     titleEl.value = ''
//     descEl.value = ''
//     balEl.value = 0
//   }
//
//   // in this method, we take in index param from html element
//   // remove one element from position index using splice
//   private removeAcc(index:number){
//     this._accounts.splice(index, 1)
//   }
// }

// This is for Tutorial Part C : Bootstrap an application

import {Account} from './account.model';
// import to include export class Account

@Component({
  selector: 'my-app',

  templateUrl: 'app/app.component_bootstrap_app_part3.html',
  //file app/app.component_build_an_app_part2.html

  styleUrls: ['app/app.component.css']
})

export class AppComponent {

  private _accounts:Array<Account> = [
    {
      id:1,
      title:'Bank Xyz',
      description:'This is my main bank Account.',
      balance:501.2
    },
    new Account(2, 'Bank Asd', 'My secret Bank Account.', 1024.10)
  ]

  private _nextId = 3

  private createAcc(titleEl:any, descEl:any, balEl:any){
    this._accounts.push(
      new Account(
        this._nextId,
        titleEl.value,
        descEl.value,
        balEl.value
      )
    )
    this._nextId++

    titleEl.value = ''
    descEl.value = ''
    balEl.value = 0
  }

  private removeAcc(index:number){
    this._accounts.splice(index, 1)
  }


}
