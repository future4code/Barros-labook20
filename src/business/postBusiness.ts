import { generateId } from './../services/IdGenerate';
import { PostDatabase } from './../database/PostDatabase';

export class PostBusiness {
    TABLE_NAME = 'labook_posts'
    postDatabase = new PostDatabase()

    createPost = async ({photo, description, type, author_id}:any)=>{
        try {
            const id = generateId()

            if(!id || !photo || !description|| !type || !author_id) throw new Error('Todas a informacoes precisam ser inseridas...')

            await this.postDatabase.createPost({id, photo, description, type, author_id})
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    searchPostById = async ({id}:any)=>{
        try {
            if(!id) throw new Error('Id nao informado...')
            return await this.postDatabase.searchPostById({id})

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}