import { generateId } from './../services/IdGenerate';
import { IdsType } from './../models/Follows';
import { IdInputDTO } from './../models/DTOS';
import { FollowsDatabase } from './../database/FollowsDatabase';
export class FollowsBusiness{
    followDatabase = new FollowsDatabase()

    follows = async (ids:IdsType)=>{
        try {
            const {idUser, idFollow} = ids
            const id = generateId()

            const IDS:IdInputDTO = {
                id, 
                idUser,
                idFollow
            }

        await this.followDatabase.follows(IDS)
        
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}