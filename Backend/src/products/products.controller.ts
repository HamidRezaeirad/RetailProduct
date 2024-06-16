import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductEntity, ProductsEntity } from './entities';
import { CreateProductDto, PagingDto } from './models';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  /**
   * Add a product entity
   *
   * @param CreateProductDto instance
   * @returns ProductEntity instance
   */
  @Post('products')
  addProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.addProduct(createProductDto);
  }

  /**
   * Get all products entity
   *
   * @param PagingDto instance
   * @returns ProductsEntity instance
   */
  @Get('products')
  getProducts(@Query() pagingDto: PagingDto): Promise<ProductsEntity> {
    return this.productsService.getProducts(pagingDto);
  }

  /**
   * Get a product by Id
   *
   * @param id string
   * @returns ProductEntity instance
   */
  @Get('products/:id')
  getProductById(@Param('id') id): Promise<ProductEntity> {
    return this.productsService.getProductById(id);
  }

  /**
   * Search a product by product name include fuzzy algorithm
   *
   * @param keyword string
   * @returns ProductEntity[] instance
   */
  @Get('/search')
  searchProduct(@Query('keyword') keyword): Promise<ProductEntity[]> {
    return this.productsService.searchProduct(keyword);
  }
}
