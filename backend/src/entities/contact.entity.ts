import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { User } from "./user.entity"

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({ default: true })
  isActive: boolean

  @Column()
  fone: string

  @ManyToOne(() => User, (client) => client.contacts, { eager: true })
  @JoinColumn()
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
