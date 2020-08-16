import { Request, Response } from 'express'

import { ListUsersUseCase } from './listUsersUseCase'

export class ListUsersController {
    constructor( private listUsers: ListUsersUseCase) {}
    
    async handle( req: Request, res: Request): Promise<Response> {
     try {
      const users = await this.listUsers.execute()


      return res.status(200).json({ users })
     } catch(err) { 
	return res.status(400).json({
	  mesaage: err.message || 'unexpected error'
        })

    }

   }
}
