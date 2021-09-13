import { Column, ManyToMany, JoinColumn } from "typeorm";

import { User } from "./User";

abstract class ITimeStamp {

  @Column('date')
  createdAt: Date;

  @Column('date')
  updatedAt: Date;

  @ManyToMany(() => User)
  @JoinColumn()
  createdUser?: User;
  
  @ManyToMany(() => User)
  @JoinColumn()
  updatedUser?: User;
}

export { ITimeStamp }