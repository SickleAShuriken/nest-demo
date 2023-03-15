import { Controller, Body, Get, Post, Query, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getTest() {
        return this.userService.getTest()
    }

    @Post('create-user')
    async addUser(@Body() user) { // 新增用户
        return await this.userService.addUser(user)
    }

    @Get('getList')
    async getUserList() { // 获取所有用户列表
        return await this.userService.getUserList()
    }

    @Get('getList/:id')
    async getUserById(@Param("id") id) { // 根据id获取用户
        return await this.userService.getUserById(id)
    }

    @Put('create-user')
    async updateUserById(@Body() user) { // 更改用户信息
        return await this.userService.updateUserById(user)
    }

    @Delete('getList/:id')
    async removeUserById(@Param("id") id) { // 删除用户
        return await this.userService.removeUserById(id)
    }
}
