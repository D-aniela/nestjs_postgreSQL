import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category extends BaseEntity {
  /**
   * BaseEntity is a class that has some built-in methods that help us interact with the database
   * Active Record pattern is a design pattern that allows us to interact with the database using objects
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  name: string;
}
