import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getAll() {
        return this.userService.getAll()
    }

    @Post()
    create(@Body() dto) {
        return this.userService.create(dto)
    }

    @Post('/time')
    findByTime(@Body() dto) {
        return this.userService.findByTime(dto)
    }
}
