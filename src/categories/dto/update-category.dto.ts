import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString({ message: 'El nombre de la Categoría debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre de la Categoría es requerido' })
  name: string;
}
