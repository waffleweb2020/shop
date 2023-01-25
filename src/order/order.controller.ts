import {Body, Controller, Get, Post} from '@nestjs/common';
import {OrderService} from "./order.service";

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    getAll() {
        return this.orderService.getALl()
    }

    @Post()
    create(@Body() dto) {
        return this.orderService.create(dto)
    }
}
