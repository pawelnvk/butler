import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DishIngredient } from './DishIngredient';

@Entity()
class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  calories: number;

  @Column()
  carbohydrates: number;

  @Column()
  fats: number;

  @Column()
  name: string;

  @Column()
  proteins: number;

  @OneToMany(type => DishIngredient, dishIngredient => dishIngredient.dish)
	dishes: DishIngredient[];
}

export { Ingredient };
