import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Dish } from './Dish';
import { Ingredient } from './Ingredient';

@Entity()
class DishIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @ManyToOne(type => Dish, dish => dish.ingredients)
	dish: Dish;

  @ManyToOne(type => Ingredient, ingredient => ingredient.dishes)
	ingredient: Ingredient;
}

export { DishIngredient };
