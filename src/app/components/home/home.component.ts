import { Component, OnInit } from '@angular/core';
import { GlassesDataService } from 'src/app/servises/glasses-data.service';
import { typeGlasses } from 'src/app/type-dlasses.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listGleasses: typeGlasses[];

  constructor(private glasse: GlassesDataService) { }

  ngOnInit(): void {
    this.set();
  }

  set(): void {

    this.listGleasses = this.glasse._typeGkasses;
  }

  choose(name: typeGlasses ): void{
    this.glasse.addForm(name);
  }



}
