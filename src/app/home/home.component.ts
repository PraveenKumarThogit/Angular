import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateButton(){ 
    this.router.navigateByUrl('button');
  }

  navigateQRGen(){
    this.router.navigateByUrl('qrGen');
  }
  navigateAccordian(){
    this.router.navigateByUrl('accordian');
  }
}
