import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    TABLE_NAME = 'labook_posts'
    createPost = async ({id, photo, description, type, author_id}:any)=>{
        try {
    
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    searchPostById = async ({id}:any)=>{
        try {
            // const result = await PostDatabase.connection("labook_posts").select().where({ id })
            // return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}