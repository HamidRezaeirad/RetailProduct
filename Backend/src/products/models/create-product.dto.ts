import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsOptional()
  @IsUUID('4', { each: false })
  @ApiProperty({
    description: 'The id of an product',
    required: false,
  })
  public id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of an product',
    required: true,
  })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category of an product',
    required: true,
  })
  public category: string;

  @IsString()
  @ApiProperty({
    description: 'The description of an product',
    required: false,
  })
  public description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The price of an product',
    required: true,
  })
  public price: number;

  @IsString()
  @ApiProperty({
    description: 'The imageUrl of an product',
    required: true,
  })
  public imageUrl: string;
}
