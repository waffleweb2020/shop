import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ProductService} from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService ) {}

    @Get()
    getAll() {
        return this.productService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id) {
        return this.productService.findByOrderId(id)
    }

    @Post()
    create(@Body() dto){
        return this.productService.create(dto)
    }

    @Post('/time')
    findByTime(@Body() dto) {
        return this.productService.findByTime(dto)
    }
}
