import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';

export class TransactionContentsDto {
  @IsNotEmpty({ message: 'El ID del producto no puede estar vacío' })
  @IsInt({ message: 'Producto no válido' })
  productId: number;

  @IsNotEmpty({ message: 'Cantidad no puede estar vacía' })
  @IsInt({ message: 'Cantidad no válida' }) // Validate quantity too
  quantity: number;

  @IsNotEmpty({ message: 'Precio no puede estar vacío' })
  @IsNumber({}, { message: 'Precio no válido' })
  price: number;
}

export class CreateTransactionDto {
  @IsNotEmpty({ message: 'El Total no puede ir vacio' })
  @IsNumber({}, { message: 'Cantidad no válida' })
  total: number;

  @IsOptional()
  coupon: string;

  @IsArray()
  @ArrayNotEmpty({ message: 'Los Contenidos no pueden ir vacios' })
  /**
   * ValidateNested is used to validate the nested objects in the array.
   * Type is used to transform the nested objects into the DTO class.
   */
  @ValidateNested()
  @Type(() => TransactionContentsDto)
  contents: TransactionContentsDto[];
}
