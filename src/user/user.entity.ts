// 创建user实体

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
    
  @PrimaryGeneratedColumn() // 自动生成值
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  age: number;

  @Column({ length: 10 })
  sex: string;

  @Column({ length: 20 })
  phone: string;

  @Column()
  address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
