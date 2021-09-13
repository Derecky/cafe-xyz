import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import { ITimeStamp } from "./TimeStamp";
import { User } from "./User";

@Entity()
class Purchase extends ITimeStamp {
  
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @Column('double')
  total: number;

  constructor() {
    super();
  }

}

export { Purchase }