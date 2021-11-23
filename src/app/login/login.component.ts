import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="your perfect banking partner"
accno="account number please"
acno=""
password=""

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // accnochange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }
  // pswdchange(event:any){
  //   this.password=event.target.value
  //   console.log(this.password)
  // }
login(){
  var acno=this.acno
  var password=this.password
  // let db=this.ds.data
//   if(acno in db){
// if(password==db[acno]["password"]){
  let result=this.ds.login(acno,password)
  if(result){
  alert("login success")
  this.router.navigateByUrl('dashboard')

  }
//   else{
//     alert("invalid password")
//   }
// }
// else{
// alert("user does not exist")
// }

}
}