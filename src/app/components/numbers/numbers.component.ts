import { Component, OnInit } from '@angular/core';
import { GlassesDataService } from 'src/app/servises/glasses-data.service';
import { numbers } from 'src/app/type-dlasses.model';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  numbers: numbers;

  constructor(private glasse: GlassesDataService) {
    this.numbers = {
      right: 0,
      left: 0,
      cRight:0,
      cLeft: 0
    }
   }

  ngOnInit(): void {
  }

  submit():void{
   
  this.glasse.addNumbers(this.numbers);
  }

}
