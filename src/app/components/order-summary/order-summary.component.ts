import { Component, OnInit } from '@angular/core';
import { GlassesDataService } from 'src/app/servises/glasses-data.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  summary:any;

  constructor(private glasse: GlassesDataService) {
    this.summary = this.glasse.orderData
   }

  ngOnInit(): void {
  }

}
