import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: RecipeModel[] = [{
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

  ngOnInit() {
  }

}
