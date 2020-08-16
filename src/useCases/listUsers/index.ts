import { MongoUserRepo } from '../../repositories/implements/mongoUserRepo.ts'
import { ListUsersUseCase } from './listUsersUseCase.ts'
import { ListUsersController } from './listUsersController.ts'

const mongoUserRepo = new MongoUserRepo()

const listUsersUseCase = new ListUsersUseCase( mongoUserRepo )

const listUsersController = new ListUsersController( listUsersUseCase )

export { listUsersUseCase, listUsersController }
