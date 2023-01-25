import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {ProductModel} from "./product.model";
import {Order_itemModel} from "../order_item/order_item.model";
import {OrderModel} from "../order/order.model";

@Injectable()
export class ProductService {
    constructor(@InjectModel(ProductModel) private productRepo: typeof ProductModel) {}

    async getAll() {
        return await this.productRepo.findAll({include: {all: true, nested: true}})
    }

    async create(dto) {
        return await this.productRepo.create(dto)
    }

    async findByTime(dto) {
        return await this.productRepo.findAll({where: {
            dateInvoice: dto.dateInvoice
        }})
    }

    async findByOrderId(orderId) {
        return await this.productRepo.findAll({include: { model:Order_itemModel, where: {orderId: orderId} }})
    }
}
