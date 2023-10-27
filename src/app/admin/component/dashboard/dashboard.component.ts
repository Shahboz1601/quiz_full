import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/public/home/home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   
  RadioButton?:HomeComponent;
  onButtonClick(event:MouseEvent){
    (event.target as HTMLButtonElement).disabled=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
