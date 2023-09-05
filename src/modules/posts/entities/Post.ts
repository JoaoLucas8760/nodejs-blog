import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "../../users/entities/User";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column("uuid")
  user_id: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
