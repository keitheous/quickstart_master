import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // tag used in index.html - look for 'loading changes'
  // entirely possible, however wouldn't be recommended as there would be hundres of lines
  // template: `<h1>Hello {{name}}!!!!</h1>`,

  // would instead use a templateUrl, create new file app/app.component.html
  templateUrl: 'app/app.component.html',

  // styles: ['.blue-bg{background-color:pink;}']
})

// preword prior to tutorial 1, this is possible with template: in @Component
// export class AppComponent { }
// export class AppComponent { name = 'Keith Adrian Chong'; }

// ====================================================================================================
// ====================================================================================================
// tutorial 1 : interpolation - username variable is expecting a string with 'keitheous' assigned to it
// this can be used in app.component.html in the interpolation
// private means that it is not accessible outside of the class
export class AppComponent {
  private username:string = "Keitheous"

  // currentUser of 'custom' type User is defined down below in interface User - object with properties
  // matches the properties User interface down below - username and email. strings
  //
  private currentUser:User = {
    username: 'KeithChong',
    email: 'keithchong@gmail.com'
  }

  // private method that doesnt take in any parameters - empty parentheses, expected to return a string
  private getUsername():string {
    return this.currentUser.username
    // this marks the current instance of the class(line 22) - currentUser(line 28)
    // which pull username property(line 29)
  }

  private getEmail():string {
    return this.currentUser.email // pulls email property of instance currentUser of class AppComponent
  }
}

// similar to classes - only defines types
interface User {
  username:string,
  email:string
}

// please refer to app.component.html to see how the variables are being called through interpolation
// ====================================================================================================
// ====================================================================================================
