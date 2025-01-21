import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'El nombre de la Categoría debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre de la Categoría es requerido' })
  name: string;
}
