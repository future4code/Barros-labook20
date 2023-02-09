import { Request, Response } from 'express';
import { connection } from '../connection/connection';
import { app } from './../app';

export const friendShips = async (req:Request, res:Response)=>{
    const Table_Name_Users = 'labook_users'
    const Table_Name_Friends = 'labook_friends'

    const {id, idFriendShip}  = req.params;

    const result = await connection(Table_Name_Users)
        .select()
        .join('labook_friends', 'labook_users.id' , '=' , 'labook_friends.id')
        .where({name:'cerejinha'})
    
       
        res.send(result)
}