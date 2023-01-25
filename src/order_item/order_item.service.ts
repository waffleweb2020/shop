import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Order_itemModel} from "./order_item.model";

@Injectable()
export class OrderItemService {
    constructor(@InjectModel(Order_itemModel) private orderItemRepo: typeof Order_itemModel) {}

    async getAll(){
        return await this.orderItemRepo.findAll({include: {all: true}})
    }

    async getById(orderId) {
        return await this.orderItemRepo.findAll({where: {orderId}, include: {all: true}})
    }
}
