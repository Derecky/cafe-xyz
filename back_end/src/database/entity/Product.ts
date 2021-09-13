import { Entity, Column, PrimaryColumn } from "typeorm";

import { ITimeStamp } from "./TimeStamp";
import { User } from "./User";

@Entity()
class Product extends ITimeStamp {
  
  @PrimaryColumn({
    unique: true,
    type: 'char',
    length: 50,
  })
  name: string;

  @Column('text')
  image: string;

  @Column('double')
  value: number;

  @Column('text')
  type: string;

  constructor() {
    super();
  }

}

export { Product }