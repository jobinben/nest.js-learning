import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users/users.controller';
import { DetailModule } from './modules/detail/detail.module';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [DetailModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
