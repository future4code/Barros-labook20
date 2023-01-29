import { Request, Response } from 'express';
import { UserBusiness } from './../business/UserBusiness';


export class UserController{
    userBusiness = new UserBusiness()
    createPost = async (req:Request, res:Response) =>{
       try {
        const {name, email, password} = req.body
        
        await this.userBusiness.createUsers({name, email, password})
        res.status(200).send('Usuario criado com sucesso...')
       } catch (error:any) {
            res.status(400).send(error.message || error.mysql)       
        }
    }
    makeFriendship = async (req:Request, res:Response)=>{
        try {
            // const id = req.query.id
            // const idFriend = req.query.idFriend

            await this.userBusiness.makeFriendship(req.query)
            res.status(200).send('SUCESSO: a amizade foi feita com sucesso.')
        } catch (error:any) {
           res.status(400).send(error.message)
        }
    }

    searchFriends = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params
            const result = await this.userBusiness.searchFriends({id})
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}