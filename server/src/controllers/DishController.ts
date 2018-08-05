import {
  Body,
  JsonController,
  Post,
} from 'routing-controllers';
import { getConnectionManager, Repository } from 'typeorm';

import { Dish } from '../entities/Dish';

@JsonController('/dishes')
class DishController {
  private readonly dishRepository: Repository<Dish>;

  constructor() {
    this.dishRepository = getConnectionManager().get().getRepository(Dish);
  }

  @Post('')
  async post(@Body() dish: any) {
    const newDish = await this.dishRepository.create(dish);
    const savedDish = await this.dishRepository.save(newDish);

    return savedDish;
  }
}

export { DishController };
