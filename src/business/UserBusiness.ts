import { generateId } from './../services/IdGenerate';
import { UserDatabase } from './../database/UserDatabase';

export class UserBusiness {
    userDatabase = new UserDatabase()
    createUsers = async ({name, email, password}:any)=>{
        try {
            const id = generateId()

            if(!id || !name || !email || !password) throw new Error('todas as infromacoes devem ser preenchidas...')

            await this.userDatabase.createUser({id, name, email, password})       
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}