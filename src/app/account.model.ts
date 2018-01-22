export class Account {
  // export class - seperation - can use this class else where

  // public attributes as this will be used extensively else where
  // can be recycled as much as we want
  public id:number

  public title:string

  public description:string

  public balance:number

  // constructor used to create an object of this type - basically a method
  // an instance is created when this is called
  // this constructor is used to initialize object Account
  public constructor(id:number, title:string, description:string, balance:number){
    this.id = id
    this.title = title
    this.description = description
    this.balance = balance
  }
}
