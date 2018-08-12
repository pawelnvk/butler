import {
  Body,
  Get,
  JsonController,
  Param,
  Post,
} from 'routing-controllers';
import { getConnectionManager, Repository } from 'typeorm';

import { Product } from '../entities/Product';

@JsonController('/products')
class ProductController {
  private readonly productRepository: Repository<Product>;

  constructor() {
    this.productRepository = getConnectionManager().get().getRepository(Product);
  }

  @Get('')
  async getAll() {
    const allProducts = await this.productRepository.find();

    return allProducts;
  }

  @Post('')
  async post(@Body() product: any) {
    const newProduct = await this.productRepository.create(product);
    const savedProduct = await this.productRepository.save(newProduct);

    return savedProduct;
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    const selectedProduct = await this.productRepository.findOne(id);

    return selectedProduct;
  }
}

export { ProductController };
