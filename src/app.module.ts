// 应用程序的根模块(Module)
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest_demo',
      synchronize: false,
      autoLoadEntities: true,
      // entities: [UserEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
