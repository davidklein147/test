import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { typeGlasses, numbers } from '../type-dlasses.model';

@Injectable({
  providedIn: 'root'
})
export class GlassesDataService {

  // typeGkasses: BehaviorSubject<typeGlasses[]>;
  _typeGkasses: typeGlasses[];
  typeLens: string[];
  orderData: {
    form: typeGlasses;
    lens: string;
    numbers: numbers;
  };


  constructor() {
    // this.typeGkasses = new BehaviorSubject<typeGlasses[]>(this._typeGkasses);
    this.orderData = {
      form: null,
      lens: null,
      numbers: null
    }

    this._typeGkasses = [
      {
        name: "red",
        image: "/assets/images.jpg",
        info: "good"
      },
      {
        name: "green",
        image: "/assets/images.jpg",
        info: "super good"
      },
      {
        name: "blue",
        image: "/assets/images.jpg",
        info: "almost good"
      },
      {
        name: "bleck",
        image: "/assets/images.jpg",
        info: "nut good"
      }
    ]

    this.typeLens = ['Multifocal', 'Reduces', 'Magnifier']

    this.orderData.numbers ={
      right : null,
      left: null,
      cRight: null,
      cLeft: null

    }
  }

  // set(a: typeGlasses): void {
  //   this._typeGkasses = [...this._typeGkasses, a];
  //   this.typeGkasses.next(this._typeGkasses);

  // }

  get(): typeGlasses[] {
    return this._typeGkasses;
  }

  addForm(a: typeGlasses): void {

    this.orderData.form = a;
    console.log(this.orderData.form);

  }

  addLens(a: string): void {

    this.orderData.lens = a;
    console.log(this.orderData.lens);
  }

  addNumbers(a: numbers): void {
   for (const key in this.orderData.numbers) {
     this.orderData.numbers[key] = a[key];
   }
   
    console.log(this.orderData.numbers);
  }


}




