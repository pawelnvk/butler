import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}

export { Ingredient };
