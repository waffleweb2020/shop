import {Column, HasMany, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {Order_itemModel} from "../order_item/order_item.model";


@Table({tableName: 'product'})
export class ProductModel extends Model {
    @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataTypes.STRING})
    title: string

    @Column({type: DataTypes.DATEONLY, defaultValue: new Date()})
    dateInvoice: Date

    @Column({type: DataTypes.INTEGER, allowNull: false})
    price: number

    @Column({type: DataTypes.FLOAT})
    price_with_discount: number

    @HasMany(() => Order_itemModel)
    order_items: Order_itemModel[]
}