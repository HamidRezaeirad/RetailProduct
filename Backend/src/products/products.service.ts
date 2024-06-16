import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';

import { StreamsService } from '../streams/streams.service';

import { ProductEntity, ProductsEntity } from './entities';
import { CreateProductDto, PagingDto } from './models';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private streamsService: StreamsService,
  ) {}

  /**
   * Reading mock data from Streams Service
   *
   */
  initMockData = async (): Promise<void> => {
    const initData: CreateProductDto[] = JSON.parse(
      await this.streamsService.initMockData('src/products/data/mock.json'),
    );

    await this.addProducts(initData);
  };

  /**
   * Create arry of product entity
   *
   * @param CreateProductDto instance
   * @returns void
   */
  async addProducts(product: CreateProductDto[]): Promise<void> {
    const rawData: string = await this.cacheManager.get('products');
    const cachedData: ProductEntity[] = (rawData && JSON.parse(rawData)) || [];
    cachedData.push(...product);
    await this.cacheManager.set('products', JSON.stringify(cachedData), 0);
  }

  /**
   * Create an product entity
   *
   * @param CreateProductDto instance
   * @returns ProductEntity instance
   */
  async addProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const rawData: string = await this.cacheManager.get('products');
    const cachedData: ProductEntity[] = (rawData && JSON.parse(rawData)) || [];

    const productEntity: ProductEntity = plainToInstance(
      ProductEntity,
      instanceToPlain(createProductDto),
    );

    productEntity.id = uuidv4();
    cachedData.push(productEntity);
    await this.cacheManager.set('products', JSON.stringify(cachedData), 0);
    return productEntity;
  }

  /**
   * Get all products entity, or get paginated by page number and size
   *
   * @param PagingDto
   * @returns ProductsEntity instance
   */
  async getProducts(PagingDto: PagingDto): Promise<ProductsEntity> {
    const { page_number, page_size } = PagingDto;
    let products: ProductEntity[] =
      JSON.parse(await this.cacheManager.get('products')) || [];
    const totalRow: number = products.length;
    if (page_number && page_size) {
      products = products.slice(
        (page_number - 1) * page_size,
        page_number * page_size,
      );
    }

    return { totalRow, products };
  }

  /**
   * Get an product entity based on its id
   *
   * @params id string
   * @returns ProductEntity instance
   */
  async getProductById(id: string): Promise<ProductEntity> {
    const rawData: string = await this.cacheManager.get('products');
    const items: [ProductEntity] = (rawData && JSON.parse(rawData)) || [];
    const item = items.find((e) => e.id === id);
    if (!item) {
      throw new NotFoundException('Item found!');
    }

    return item;
  }

  /**
   * Get all products entity filter by keyword. It is using fuzzy algorithm
   *
   * @quary keyword
   * @returns ProductsEntity[] instance
   */
  async searchProduct(keyword: string): Promise<ProductEntity[]> {
    const rawData: string = await this.cacheManager.get('products');
    const data: [ProductEntity] = (rawData && JSON.parse(rawData)) || [];

    const filterData: ProductEntity[] = [];

    data.forEach((data) => {
      const { name } = data;
      const regexp = new RegExp(`^${keyword}`, 'i');

      if (regexp.test(name)) {
        filterData.push(data);
      }
    });

    return filterData;
  }
}
