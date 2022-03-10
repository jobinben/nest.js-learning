import { Controller, Get, Ip, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    index() {

        return '用户信息首页';
    }

    @Get('info')
    info(@Query() query, @Ip() ip) {
        console.log('ip: ', ip);
        return query;
    }

}
