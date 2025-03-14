import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from '@/product/entities/product-category.entity';
import { CategoryDetail } from '@/category-detail/entities/category-detail.entity';
import { UploadModule } from '@/upload/upload.module';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCategory, Product, CategoryDetail]),
    UploadModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
