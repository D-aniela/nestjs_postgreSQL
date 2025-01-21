import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre del producto es requerido' })
  @IsString({ message: 'Nombre no válido' })
  name: string;

  @IsNotEmpty({ message: 'El precio del producto es requerido' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Precio no válido' })
  price: number;

  @IsNotEmpty({ message: 'La cantidad del producto es requerido' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Cantidad no válida' })
  stock: number;

  @IsNotEmpty({ message: 'La categoría del producto es requerido' })
  @IsInt({ message: 'Categoría no válida' })
  categoryId: number;
}
