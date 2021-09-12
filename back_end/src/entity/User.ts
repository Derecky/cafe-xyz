import { Entity, Column, PrimaryColumn } from "typeorm";

import { ITimeStamp } from "./TimeStamp";

@Entity()
class User extends ITimeStamp {

  @PrimaryColumn({
    type: 'char',
    unique: true,
    length: 30
  })
  username: string;

  @Column('text')
  name: string;

  @Column('text')
  password: string;

  constructor() {
    super()
  }

}

export { User }