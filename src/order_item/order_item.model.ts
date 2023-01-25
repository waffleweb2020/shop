import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";
import {OrderModel} from "../order/order.model";
import {ProductModel} from "../product/product.model";
import {UserModel} from "../user/user.model";
@Table({tableName: 'order_item'})
export class Order_itemModel extends Model {

    @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => OrderModel)
    @Column
    orderId: number

    @ForeignKey(() => UserModel)
    @Column
    userId: number

    @ForeignKey(() => ProductModel)
    @Column
    productId: number

    @BelongsTo(() => OrderModel)
    order: OrderModel

    @BelongsTo(() => UserModel)
    user: UserModel

    @BelongsTo(() => ProductModel)
    product: ProductModel
}