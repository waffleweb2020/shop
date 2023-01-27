import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';
import { UserModule } from './user/user.module';
import {UserModel} from "./user/user.model";
import {Order_itemModel} from "./order_item/order_item.model";
import {OrderModel} from "./order/order.model";
import {ProductModel} from "./product/product.model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '45.90.33.54',
      port: 5432,
      username: 'postgres',
      password: 'Vannabluerey8!',
      database: 'shop',
      models: [UserModel, Order_itemModel, OrderModel, ProductModel],
      autoLoadModels: true,
      synchronize: true
    }),
    ProductModule,
    OrderModule,
    OrderItemModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
