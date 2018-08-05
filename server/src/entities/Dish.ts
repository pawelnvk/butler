import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DishIngredient } from './DishIngredient';

@Entity()
class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  recipe: string;

  @OneToMany(type => DishIngredient, dishIngredient => dishIngredient.ingredient)
	ingredients: DishIngredient[];
}

export { Dish };
