import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Ingredient } from './Ingredient';

@Entity()
class Product {
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

  @OneToMany(type => Ingredient, ingredient => ingredient.product)
	ingredients: Ingredient[];
}

export { Product };
