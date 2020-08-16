import { MongoUserRepo } from '../../repositories/implements/mongoUserRepo'
import { DeleteUserUseCase } from './deleteUserUseCase'
import { DeleteUserController } from './deleteUserController'

const mongoRepo = new MongoUserRepo()

const deleteUserCase = new DeleteUserUseCase( mongoRepo )

const deleteUserController = new DeleteUserController( deleteUserCase )

export { deleteUserCase, deleteUserController }
