import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {OrderModel} from "./order.model";
import {Order_itemModel} from "../order_item/order_item.model";

@Module({
  imports: [SequelizeModule.forFeature([OrderModel, Order_itemModel])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
