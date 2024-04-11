import { PartialType } from '@nestjs/swagger';

export class CreateProductsDto {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export class UpdateProductsDto extends PartialType(CreateProductsDto) {}
