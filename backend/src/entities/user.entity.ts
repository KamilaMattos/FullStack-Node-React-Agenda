import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { v4 as uuid } from "uuid"
import { Contact } from "./contact.entity"

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  fone: string

  @Column({ default: true })
  isActive: boolean

  @Column()
  createdAt: string

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contacts: Contact[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
