import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cookie Recipe', 'Mexican Cookie', 'https://www.loveandtacos.com/wp-content/uploads/2017/09/' +
      'Hojarascas-Mexican-Shortbread-Cinnamon-Sugar-Cookies.jpg'),
    new Recipe('Cookie Recipe 2', 'Mexican Cookie Again', 'https://www.loveandtacos.com/wp-content/uploads/2017/09/' +
      'Hojarascas-Mexican-Shortbread-Cinnamon-Sugar-Cookies.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}
