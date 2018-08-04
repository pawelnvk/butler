import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  recipe: string;

  @Column()
  name: string;
}

export { Dish };
