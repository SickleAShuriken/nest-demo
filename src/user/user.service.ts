import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // 新建用户
  async addUser(user: Partial<UserEntity>): Promise<UserEntity> {
    // Partial (类型转化)
    const { name } = user;
    if (!name) {
      throw new HttpException('缺少用户名', 401);
    }
    return await this.userRepository.save(user); // 新增用户
  }

  // 获取所有用户列表
  async getUserList(): Promise<UserEntity[]> {
    return await this.userRepository.find() // 查询用户
  }

  // 根据id获取用户
  async getUserById(id): Promise<UserEntity> {
    return await this.userRepository.findOneBy({id}) // 0.30 findOne已删除
  }

  // 修改用户信息
  async updateUserById(user: Partial<UserEntity>): Promise<UserEntity> {
    const { id } = user
    const exisUser = await this.userRepository.findOneBy({id})
    const updateUser = this.userRepository.merge(exisUser, user) // 将两个实体合并
    return await this.userRepository.save(updateUser)
  }

  // 删除用户
  async removeUserById(id): Promise<UserEntity> {
    const exisUser = await this.userRepository.findOneBy({id})
    if (!exisUser) {
        throw new HttpException('文章不存在', 401)
    }
    return await this.userRepository.remove(exisUser)
  }

  getTest() {
    return '测试user';
  }
}
