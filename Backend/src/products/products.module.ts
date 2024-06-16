import { CacheModule } from '@nestjs/cache-manager';
import { Module, OnModuleInit } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { StreamsModule } from '../streams/streams.module';
import { StreamsService } from '../streams/streams.service';

@Module({
  imports: [CacheModule.register(), StreamsModule],
  controllers: [ProductsController],
  providers: [ProductsService, StreamsService],
})
export class ProductsModule implements OnModuleInit {
  constructor(private productsService: ProductsService) {}

  /**
   * Populate the mock data only the first time when the App is running.
   *
   */
  onModuleInit() {
    this.productsService.initMockData();
  }
}
