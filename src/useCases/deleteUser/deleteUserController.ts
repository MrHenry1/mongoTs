import { Request, Response } from 'express'

import { DeleteUserUseCase } from './deleteUserUseCase' 

export class DeleteUserController {
    constructor( private deleteUserCase: DeleteUserUseCase ) {}

    async handle(req: Request, res: Response): Promise<Response> {
       const {idPublic} = req.body

       try {
        await this.deleteUserCase.execute({ idPublic })
	return res.status(200).send('Sucessful')

       } catch(err) {
         return res.status(400).json({
           message: err.message || 'unexpected Error'
	 })
       }
    }

}

