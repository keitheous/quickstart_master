import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}!!!!</h1>`,
  templateUrl: 'app/app.component.html',
  // styles: ['.blue-bg{background-color:pink;}']
})
// export class AppComponent  { name = 'Keith Adrian Chong'; }
export class AppComponent {
  private username:string = "Keitheous"
  private currentUser:User = {username: "TestX", email: "test@test.com"}
  private hideEmail:boolean = true

  private toggle() {
    this.hideEmail = !this.hideEmail
  }

  private disabledInput:boolean = false

  private isDisabled():boolean {
    return this.disabledInput
  }

  private isBlueBg:boolean = true
  private bgColor:string = 'grey'

  private getUsername():string { // returns a string as specified
    return this.currentUser.username
    // this marks the current instance of the class
    // accessing current user property - pulling username property
    // pulling only username of currentUser - expected return value is TestX
  }
}

// interface is similar to types - will contain objects with matching properties
// you put a function into a method to build a class?

interface User {
  username:string,
  email:string
}
