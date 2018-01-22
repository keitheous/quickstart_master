export class Account {

  public id:number

  public title:string

  public description:string

  public balance:number

  // constructor used to set the properties
  // a diff instance is create when this is called else where
  public constructor(id:number, title:string, description:string, balance:number){
    this.id = id
    this.title = title
    this.description = description
    this.balance = balance
  }
}

// separate so we can recycle this code else where
