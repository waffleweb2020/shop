import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserModel} from "./user.model";

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private userRepo: typeof UserModel) {}

    async getAll() {
        return await this.userRepo.findAll({include: {all: true}})
    }

    async create(dto) {
        return await this.userRepo.create(dto)
    }

    async findByTime(dto) {
        return await this.userRepo.findAll({where: {createdAt: '2023-01-25 05:25:40'}})
    }
}
