// 具有单一方法的基本服务(Service)
import { Injectable } from '@nestjs/common';

// 使用@Injectable修饰后的 AppService, 在AppModule中注册之后，在app.controller.ts中使用，我们就不需要使用new AppService()去实例化，直接引入过来就可以用
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
