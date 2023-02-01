import { IdInputDTO } from './../models/DTOS';
import { BaseDatabase } from "./BaseDatabase"

export class FollowsDatabase extends BaseDatabase {
    follows = async (ids:IdInputDTO)=>{
        try {
            await FollowsDatabase.connection()
            .insert(ids)
            .into('labook_followers')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}