import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    TABLE_USERS = 'labook_users'
    TABLE_FRIENDS = 'labook_friends'
    createUser = async({id, name, email, password}:any)=>{
        try {
            await UserDatabase.connection()
            .insert({id, name, email, password})
            .into(this.TABLE_USERS)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}