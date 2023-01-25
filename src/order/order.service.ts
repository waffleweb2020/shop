import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {OrderModel} from "./order.model";
import {Order_itemModel} from "../order_item/order_item.model";

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(OrderModel) private orderRepo: typeof OrderModel,
        @InjectModel(Order_itemModel) private orderItemRepo: typeof Order_itemModel
    ) {}

    async getALl() {
        return await this.orderRepo.findAll({include: {all: true}})
    }

    async create(dto) {
        const order = await this.orderRepo.create({userId: dto.userId})
        for(let i = 0; i <= dto.orders.length; i++) {
            await this.orderItemRepo.create({
                orderId: order.id,
                userId: dto.userId,
                productId: dto.orders[i]
            })
        }
    }
}
