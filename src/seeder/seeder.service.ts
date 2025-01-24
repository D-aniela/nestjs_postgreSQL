import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Category } from '../categories/entities/category.entity';
import { Product } from '../products/entities/product.entity';
import { categories } from './data/categories';
import { products } from './data/products';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    /**
     * Inyectar el DataSource para eliminar y sincronizar la base de datos.
     */
    private dataSource: DataSource,
  ) {}

  /**
   * Eliminar todos los datos de la base de datos y sincronizar la base de datos.
   */
  onModuleInit() {
    const connection = this.dataSource;
    // Eliminar la base de datos.
    connection.dropDatabase();
    // Sincronizar la base de datos. Esto creará las tablas.
    connection.synchronize();
  }

  async seed() {
    await this.categoryRepository.save(categories);
    for await (const seedProduct of products) {
      const category = (await this.categoryRepository.findOneBy({
        id: seedProduct.categoryId,
      })) as Category;
      const product = new Product();
      product.name = seedProduct.name;
      product.image = seedProduct.image;
      product.price = seedProduct.price;
      product.stock = seedProduct.stock;
      product.category = category;
      await this.productRepository.save(product);
    }
  }
}
