import {Controller, Get, Param} from '@nestjs/common';
import {OrderItemService} from "./order_item.service";

@Controller('order-item')
export class OrderItemController {
    constructor(private orderItemService: OrderItemService) {}

    @Get()
    getAll() {
        return this.orderItemService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.orderItemService.getById(id)
    }
}
