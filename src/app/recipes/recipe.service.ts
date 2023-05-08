import { createInjectableType } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Bun Bo Hue',
      'This is just a test',
      'https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2017/08/Bun-Bo-Hue-46.jpg?resize=1000%2C562',
      [new Ingredient('Onion', 2), new Ingredient('Fish Sauce', 3)]
    ),
    new Recipe(
      'Whooper Burger',
      'This is just a second test',
      'https://assets-global.website-files.com/631b4b4e277091ef01450237/6398f26cb77dc209f3628aeb_Whopper.png',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 1)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
