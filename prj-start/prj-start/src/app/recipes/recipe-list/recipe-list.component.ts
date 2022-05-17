import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Misal Paav', "This is a oppish dish!", 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe('Wadapav', "This is also a really cool recipe!", 'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg'),
    new Recipe('Samosa', "This is the best!!!", 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg')  
  ];

  @Output() emitDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(recipe: Recipe) {
    this.emitDetail.emit(recipe);
  }

}
