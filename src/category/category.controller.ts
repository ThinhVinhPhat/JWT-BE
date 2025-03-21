import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperationDecorator } from '@/common/decorator/api-operation.decorator';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Public } from '@/common/decorator/public.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperationDecorator({
    summary: 'Create a new category',
    description: 'Create a new category',
    type: CreateCategoryDto,
  })
  @ApiBearerAuth()
  @Post('/')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Public()
  @ApiOperationDecorator({
    summary: 'Find all categories',
    description: 'Find all categories',
  })
  @Get('/')
  findAll() {
    return this.categoryService.findAll();
  }

  @Public()
  @ApiOperationDecorator({
    summary: 'Find one categories',
    description: 'Find one categories',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperationDecorator({
    summary: 'Update a category',
    description: 'Create a category',
    type: UpdateCategoryDto,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
