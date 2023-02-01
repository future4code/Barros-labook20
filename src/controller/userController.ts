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
}