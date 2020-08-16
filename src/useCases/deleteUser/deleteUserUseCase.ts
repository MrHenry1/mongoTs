import { IUsersRepository } from '../../repositories/IUsersRepository'
import { DeleteUserRequestDTO } from './deleteUserRequestDTO'

export class DeleteUserUseCase {
   constructor( private userRepo: IUsersRepository ) {}

   async execute( data: DeleteUserRequestDTO ) {
    //Poderia ter Aproveitado o outro modulo, mas e opcional hehe
     const notExists = await this.userRepo.findByPublicId(data.idPublic)

     if(!notExists) {
       throw new Error('User not Exists')
     }
    
     await this.userRepo.delete(data.idPublic)

   }
}
