import { Request, Response } from 'express'
import { UpdateUserUseCase } from './updateUserUseCase'

export class UpdateUserController {
  constructor( private updateUserCase: UpdateUserUseCase ) { }

  async handle( req: Request, res: Response ): Promise<Response> {
    const { idPublic } = req.params
    const { column, value } = req.body
    try {
	await this.updateUserCase.execute({ idPublic, column, value })

	return res.status(200).send('Sucessful')

    } catch(err) {
       return res.status(400).json({
         message: err.message || 'unexpected Error'
       })
    }
  }
}
