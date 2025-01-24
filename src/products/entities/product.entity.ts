import { Category } from '../../categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  name: string;

  @Column({
    type: 'varchar',
    length: 120,
    nullable: true,
    default: 'default.svg',
  })
  image: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  /**
   * eager: Si la relación se requiere en la consulta siempre, se cargará automáticamente.
   */
  @ManyToOne(() => Category)
  category: Category;

  @Column({ type: 'int' })
  categoryId: number;
}
