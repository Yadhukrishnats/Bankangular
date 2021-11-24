import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  password=""
  amnt=""

  acno1=""
  password1=""
  amnt1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno
    var password=this.password
    var amount=this.amnt
    var result=this.ds.deposit(acno,password,amount)
   if(result){
   alert( amount+"credited successfully,,new balance is:"+result)
   }

  }
  withdraw(){
    var acno=this.acno1
    var password=this.password1
    var amount=this.amnt1
    var result=this.ds.withdraw(acno,password,amount)
   if(result){
   alert( amount+"debited successfully,,new balance is:"+result)
   }

  }
    
  }