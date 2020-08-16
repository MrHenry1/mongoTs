import { Request, Response } from 'express'

import { CreateUserUseCase } from './createUserUseCase'

export class CreateUserController {
  constructor(
    private createUserCase: CreateUserUseCase
  ) {}

  async handle(req: Request, res: Request): Promise<Response> {
    const {name, age, job, email, bio, password} = req.body
    try {
        
       await this.createUserCase.execute({
          name,
	  age,
	  job,
	  email,
	  bio,
	  password
	})

	return res.status(201).send('Sucessful')

     } catch(err) {
        return res.status(401).json({
           message: err.message || 'unexpected error:'
	})
     }
  }

}
