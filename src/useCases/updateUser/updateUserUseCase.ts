import { IUsersRepository } from '../../repositories/IUsersRepository'
import { UpdateUserRequestDTO } from './updateUserRequestDTO'

export class UpdateUserUseCase {
  constructor( private userRepo: IUsersRepository ) {}

  async execute( data: UpdateUserRequestDTO ) {
     const noExists = await this.userRepo.findByPublicId(data.idPublic)

     if(!noExists) {
	throw new Error('User Doesnt Exists')
     }

     await this.userRepo.update(data.idPublic, data.column, data.value)
  }
}
