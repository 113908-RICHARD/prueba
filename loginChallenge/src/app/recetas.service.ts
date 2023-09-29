import { Injectable } from '@angular/core';
import { Receta } from './receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  listaRecetas: Receta[] = [
    {
      titulo: 'Spaghetti Carbonara',
      descripcion: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      imgSource: 'spaghetti-carbonara.jpg'
    },
    {
      titulo: 'Chicken Alfredo',
      descripcion: 'Creamy pasta dish with grilled chicken, fettuccine, and rich Alfredo sauce.',
      imgSource: 'chicken-alfredo.jpg'
    },
    {
      titulo: 'Vegetable Stir-Fry',
      descripcion: 'Healthy stir-fried vegetables with tofu and a savory sauce.',
      imgSource: 'vegetable-stir-fry.jpg'
    },
    {
      titulo: 'Margherita Pizza',
      descripcion: 'Classic Italian pizza topped with fresh tomatoes, mozzarella, basil, and olive oil.',
      imgSource: 'margherita-pizza.jpg'
    },
    {
      titulo: 'Beef Tacos',
      descripcion: 'Tasty beef tacos with seasoned ground beef, lettuce, cheese, and salsa.',
      imgSource: 'beef-tacos.jpg'
    },
    {
      titulo: 'Chocolate Brownies',
      descripcion: 'Rich and fudgy chocolate brownies that are perfect for dessert.',
      imgSource: 'chocolate-brownies.jpg'
    }
  ];

  getRecetas(){
    return this.listaRecetas;
  }
}
