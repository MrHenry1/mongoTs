import { Router } from 'express'
import { createUserController } from './useCases/createUser'
import { listUsersController } from './useCases/listUsers'
import { deleteUserController } from './useCases/deleteUser'
import { updateUserController } from './useCases/updateUser'

const router = Router()

router.get('/users', (request, response) => {
   return listUsersController.handle(request, response)
})
router.post('/users', (request, response) => { 
   return createUserController.handle(request, response);
});
router.delete('/users', (request, response) => {
  return deleteUserController.handle( request, response )
})
router.put('/users/:idPublic', (request, response) => {
  return updateUserController.handle( request, response )
})

export default router

