import { Component, OnInit } from '@angular/core';
import { GlassesDataService } from 'src/app/servises/glasses-data.service';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent implements OnInit {
  typeLens: string[];

  constructor(private glasse: GlassesDataService) {
    this.typeLens = this.glasse.typeLens;
  }

  ngOnInit(): void {

  }
  choose(name: string ): void{
    this.glasse.addLens(name);
  }

}
