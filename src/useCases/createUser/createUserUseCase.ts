import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import User from "../../entities/User";

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const alreadyExists = await this.usersRepository.findByEmail(data.email)

    if(alreadyExists) {
       throw new Error('User Already Exists!')

  }
   const user = new User(data);
  
   await this.usersRepository.save(user);

}
}
