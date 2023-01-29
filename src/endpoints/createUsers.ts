import { connection } from './../connection/connection';
import { app } from './../app';
import {Request, Response} from 'express'


// app.post('/users', async (req: Request, res: Response) => {
//    const TABLE_NAME = 'labook_users';
//     try {
//        let message = "Success!"
//        const { name, email, password } = req.body
 
//        if (!name || !email || !password) {
//           res.statusCode = 406
//           message = '"name", "email" and "password" must be provided'
//           throw new Error(message)
//        }
 
//        const id: string = Date.now().toString()
 
//        await connection(TABLE_NAME)
//           .insert({
//              id,
//              name,
//              email,
//              password
//           })
 
//        res.status(201).send({ message })
 
//     } catch (error:any) {
//        res.statusCode = 400
//        let message = error.sqlMessage || error.message
//        res.send({ message })
//     }
//  }
//  )

 export const createUsers =async (req: Request, res: Response)=>{
   
   const TABLE_NAME = 'labook_users';
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (!name || !email || !password) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const id: string = Date.now().toString()
 
       await connection(TABLE_NAME)
          .insert({
             id,
             name,
             email,
             password
          })
 
       res.status(201).send({ message })
 
    } catch (error:any) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
       res.send({ message })
    }
 }
 