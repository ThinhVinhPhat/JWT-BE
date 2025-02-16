import { Module } from '@nestjs/common';
import { CategoryDetailService } from './category-detail.service';
import { CategoryDetailController } from './category-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@/category/entities/category.entity';
import { CategoryDetail } from './entities/category-detail.entity';
import { UploadModule } from '@/upload/upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryDetail]), UploadModule],
  controllers: [CategoryDetailController],
  providers: [CategoryDetailService],
})
export class CategoryDetailModule {}
