import { MongoUserRepo } from '../../repositories/implements/mongoUserRepo.ts'
import { CreateUserUseCase } from './createUserUseCase.ts'
import { CreateUserController } from './createUserController.ts'

const mongoUserRepo = new MongoUserRepo()

const createUserUseCase = new CreateUserUseCase( mongoUserRepo )

const createUserController = new CreateUserController( createUserUseCase )

export { createUserUseCase, createUserController }
