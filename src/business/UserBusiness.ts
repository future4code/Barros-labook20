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

    makeFriendship = async ({id, idFriend}:any)=>{
        try {
            if(!id) throw new Error('O id do usuario não foi inserido.')
            if(!idFriend) throw new Error('O id do amigo não foi inserido.')
    
            await this.userDatabase.makeFriendship({id, idFriend})
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    searchFriends = async ({id}:any)=>{
        try {
            const result = await this.userDatabase.searchFriends({id}) 
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}