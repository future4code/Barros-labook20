import { PostBusiness } from './../business/postBusiness';
import { Response, Request } from 'express';
export class postController {
    postBusiness = new PostBusiness();

    createPost = async (req:Request, res:Response)=>{
        try {
            const {author_id} = req.params
            const {photo, description, type} = req.body

            await this.postBusiness.createPost({photo, description, type, author_id})
            res.status(200).send('Post foi criado com sucesso...')
        } catch (error:any) {
            res.status(400).send(error.message || error.mysql)
        }
    }

    searchPostById = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.postBusiness.searchPostById({id})
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}