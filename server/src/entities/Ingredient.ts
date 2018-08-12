import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Dish } from './Dish';
import { Product } from './Product';

@Entity()
class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @ManyToOne(type => Dish, dish => dish.ingredients)
	dish: Dish;

  @ManyToOne(type => Product, product => product.ingredients)
	product: Product;
}

export { Ingredient };
