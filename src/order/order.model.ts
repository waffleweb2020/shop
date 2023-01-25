import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Order_itemModel} from "../order_item/order_item.model";
import {UserModel} from "../user/user.model";


@Table({tableName: 'order'})
export class OrderModel extends Model {
    @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
    id: number

    @Column({type: DataTypes.DATEONLY, defaultValue: new Date()})
    dateInvoice: Date

    @ForeignKey(() => UserModel)
    @Column
    userId: number

    @BelongsTo(() => UserModel)
    user: UserModel

    @HasMany(() => Order_itemModel)
    order_items: Order_itemModel[]
}