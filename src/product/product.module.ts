import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {ProductModel} from "./product.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductModel])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
