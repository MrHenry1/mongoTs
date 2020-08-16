import { User } from '../entities/User.ts'

export interface IUsersRepository {
  findByEmail(email: string)?: Promise<User>
  findByPublicId(idPublic: string)?: Promise<User>
  save(user: User)?: Promise<void>
  list()?: Promise<User[]>
  delete(idPublic: string)?: Promise<void>
  update(idPublic: string, column: string,  value: any)?: Promise<void>
}

