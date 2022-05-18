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
  @ViewChild('nameInput', {static : false}) name :  ElementRef;
  @ViewChild('amountInput', {static : false}) amount : ElementRef;

  @Output() toggleAdd = new EventEmitter<Ingredient>();

  addIngredients(){
    const elName = this.name.nativeElement.value;
    const elAmount = this.amount.nativeElement.value;
    let newIngredient = new Ingredient(elName, elAmount);
    this.toggleAdd.emit(newIngredient);
  }

}
