import {BaseEntity } from 'typeorm'

@Entity()
export class Products extends BaseEntity{
    @Column()
    product!:string

}