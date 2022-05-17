import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('addName') name :  ElementRef;
  @ViewChild('addAmount') amount : ElementRef;

  @Output() toggleAdd = new EventEmitter<Ingredient>();

  addIngredients(){
    let newIngredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.toggleAdd.emit(newIngredient);
  }

}
