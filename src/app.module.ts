import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderDetailsModule } from './modules/order-details/order-details.module';
import { CategoryModule } from './modules/category/category.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { CustomersModule } from './modules/customers/customers.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProductsModule, OrdersModule, OrderDetailsModule, CategoryModule, PaymentsModule, AddressesModule, CustomersModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
