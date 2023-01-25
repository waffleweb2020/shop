import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Order_itemModel} from "../order_item/order_item.model";
import {OrderModel} from "../order/order.model";


@Table({tableName: 'user'})
export class UserModel extends Model {
    @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataTypes.STRING})
    name: string

    @HasMany(() => Order_itemModel)
    order_items: Order_itemModel[]

    @HasMany(() => OrderModel)
    orders: OrderModel
}