import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

import { Product } from "./Product";
import { Purchase } from "./Purchase";

@Entity()
class PurchaseProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Purchase)
  @JoinColumn()
  purchase: Purchase;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @Column()
  amount: number;

  @Column()
  observation: string;

  constructor() {

  }

}

export { PurchaseProduct }