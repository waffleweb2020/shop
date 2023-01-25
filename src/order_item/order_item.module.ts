import { Module } from '@nestjs/common';
import { OrderItemController } from './order_item.controller';
import { OrderItemService } from './order_item.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Order_itemModel} from "./order_item.model";

@Module({
  imports: [SequelizeModule.forFeature([Order_itemModel])],
  controllers: [OrderItemController],
  providers: [OrderItemService]
})
export class OrderItemModule {}
