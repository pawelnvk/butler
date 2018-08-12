import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
} from 'routing-controllers';
import { getConnectionManager, Repository } from 'typeorm';

import { Dish } from '../entities/Dish';
import { Ingredient } from '../entities/Ingredient';
import { Product } from '../entities/Product';

@JsonController('/dishes')
class DishController {
  private readonly dishRepository: Repository<Dish>;
  private readonly ingredientRepository: Repository<Ingredient>;
  private readonly productRepository: Repository<Product>;

  constructor() {
    const connectionManager = getConnectionManager().get();

    this.dishRepository = connectionManager.getRepository(Dish);
    this.ingredientRepository = connectionManager.getRepository(Ingredient);
    this.productRepository = connectionManager.getRepository(Product);
  }

  @Get('')
  async getAll() {
    const allDishes = await this.dishRepository.find();

    return allDishes;
  }

  @Post('')
  async post(@Body() data: any) {
    const { ingredients: ingredientsData = [], ...dishData } = data;

    const dish = await this.dishRepository.create({
      description: dishData.description,
      name: dishData.name,
      recipe: dishData.recipe,
    });
    await this.dishRepository.save(dish);

    ingredientsData.forEach(async ({ id, weight }) => {
      const product = await this.productRepository.findOne(id);

      const dishIngredient = this.ingredientRepository.create({
        dish,
        product,
        weight,
      });

      await this.ingredientRepository.save(dishIngredient);
    });

    return dish;
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    const selectedDish = await this.dishRepository.findOne(id, {
      relations: ['ingredients', 'ingredients.product'],
    });

    return selectedDish;
  }
}

export { DishController };
