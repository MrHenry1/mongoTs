import { uuid } from 'uuidv4'

export default class User {

  public readonly idPublic: string
  public name: string
  public age: number
  public job: string
  public email: string
  public bio: string
  public password: string

  constructor(props: Omnit<User, 'idPublic'>, idPublic?: string) {
   Object.assign(this, props)

   if(!idPublic) {
     this.idPublic = uuid()
   }
  }
}
