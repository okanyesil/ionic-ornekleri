import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: RecipeModel[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
