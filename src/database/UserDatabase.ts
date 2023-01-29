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

    makeFriendship = async ({id, idFriend}:any)=>{
        try {
            await UserDatabase.connection(this.TABLE_FRIENDS)
                .insert(
                    {
                        id,
                        author_id: idFriend
                    }
                )
                // .insert(this.TABLE_FRIENDS)
        } catch (error:any) {
            throw new Error(error.message)
        }
    } 

    searchFriends = async ({id}:any)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_USERS)
            .select()
            // .where({id})
            .join(this.TABLE_FRIENDS, `labook_users.id` , '=' , 'labook_friends.id')
            console.log(result);
            

        return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}