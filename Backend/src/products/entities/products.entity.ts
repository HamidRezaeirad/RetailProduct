import { Column, Entity } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductsEntity {
  @ApiProperty({
    example: '[]',
    description: 'The list of products',
  })
  @Column()
  products: ProductEntity[];

  @ApiProperty({
    example: '100',
    description: 'The totalRow of an products items',
  })
  @Column()
  totalRow: number;
}
