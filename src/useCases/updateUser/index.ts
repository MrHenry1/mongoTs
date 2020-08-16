import {MongoUserRepo} from '../../repositories/implements/mongoUserRepo'
import {UpdateUserUseCase} from './updateUserUseCase'
import { UpdateUserController } from './updateUserController'

const mongoUserRepo = new MongoUserRepo()

const updateUserUseCase = new UpdateUserUseCase( mongoUserRepo )

const updateUserController = new UpdateUserController( updateUserUseCase )

export { updateUserController, updateUserUseCase }
