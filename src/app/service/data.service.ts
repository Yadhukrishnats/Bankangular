import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any={
    1000:{acno:1000,uname:"akshay",password:"1000",balance:5000},
    1001:{acno:1001,uname:"akash",password:"1001",balance:5000},
    1002:{acno:1002,uname:"ashwin",password:"1002",balance:5000}
  
  }

  constructor() { }
  register(acno:any,uname:any,password:any){
    let database=this.data
    if(acno in database){
      return false
    }
    else{
      database[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      return true
    }
  }

  login(acno:any,pswd:any){
    let database=this.data

    if(acno in database){

    if(pswd=database[acno]["password"]){
      return true
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
    alert("user does not exists")
    return false
  }
}

deposit(acno:any,pswd:any,amnt:any){

  var amount = parseInt(amnt)

  let database = this.data

  if(acno in database){

    if(pswd=database[acno]["password"]){

      database[acno]["balance"] = database[acno]["balance"]+amount
      return database[acno]["balance"]
    }
    else{
      alert("invalid password")
      return false
    }


  }
    else{
      alert("User Not found")
      return false
    }
  }

  withdraw(acno1:any,pswd1:any,amnt1:any){

    var amount = parseInt(amnt1)
  
    let database = this.data
  
    if(acno1 in database){
  
      if(pswd1==database[acno1]["password"]){

        if( database[acno1]["balance"]>amount){
          database[acno1]["balance"] = database[acno1]["balance"]-=amount
        return database[acno1]["balance"]

        }
        else{
          alert("Insufficient Balance")
          return false
        }
  
        
      }
      else{
        alert("invalid password")
        return false
      }
  
  
    }
      else{
        alert("User Not found")
        return
      }
    }
}

