import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

acno=""
pswd=""
amnt=""
acno1=""
pswd1=""
amnt1=""
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
deposit(){
  var acno = this.acno

  var pswd = this.pswd

  var amount = this.amnt

var result = this.ds.deposit(acno,pswd,amount)

if(result){
 alert(amount+"successfully credited,,new balance is : "+result)
}
}
Withdraw(){
 
    var acno1 = this.acno1
  
    var pswd1 = this.pswd1
  
    var amount = this.amnt1
  
  var result = this.ds.withdraw(acno1,pswd1,amount)
  
  if(result){
   alert(amount+"successfully debited,,new balance is : "+result)
  }
}
}
