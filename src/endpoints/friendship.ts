import { Request, Response } from 'express';
import { connection } from '../connection/connection';
import { app } from './../app';

export const friendShips = async (req:Request, res:Response)=>{
    const Table_Name_Users = 'labook_users'

    const {id}  = req.params;

    const result = await connection(Table_Name_Users)
    
    res.send(result)
}