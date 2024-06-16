import { Column, Entity } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ProductEntity {
  @ApiProperty({
    example: 'fe756af1-4442-4ea6-aa63-0ff13adf2426',
    description: 'The id of an product',
  })
  @Column()
  id: string;

  @ApiProperty({
    example: 'Sofa',
    description: 'The name of an product',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Kitchen',
    description: 'The category of an product',
  })
  @Column()
  category: string;

  @ApiProperty({
    example: 'Jalusiförvaring f hushållsmaskiner',
    description: 'The description of an product',
  })
  @Column({ default: 0 })
  description: string;

  @ApiProperty({
    example: '0',
    description: 'The price of an product',
  })
  @Column({ default: 0 })
  price: number;

  @ApiProperty({
    example: '',
    description: 'The imageUrl of an product',
  })
  @Column({ default: 0 })
  imageUrl: string;
}
