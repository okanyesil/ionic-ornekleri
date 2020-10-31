import { Injectable } from '@angular/core';
import {RecipeModel} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: RecipeModel[] = [{
    id: 'r1',
    title: 'schnitzel',
    imageUrl: './assets/indir.jpg',
    ingredients: ['French fries', 'pork meat', 'Salad']
  },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl: './assets/indir2.jpg',
      ingredients: ['spaghetti', 'meat', 'Salad']
    }];
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipes => {
      return recipes.id !== recipeId;
    });
  }
}
