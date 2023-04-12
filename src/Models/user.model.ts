export class User{
  public Name:string;
  public Age:number;
  public PicPath:string;
  public UserName:string;

  constructor(name:string, age:number, picPath:string, userName:string) {
    this.Name = name;
    this.Age = age;
    this.PicPath = picPath;
    this.UserName = userName;
  }
}


