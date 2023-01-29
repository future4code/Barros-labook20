import { friendShips } from './endpoints/friendship';
import { searchPostById } from './endpoints/searchPostById';
import { createPost } from './endpoints/createPost';
import express from "express"

import cors from 'cors'
import { createUsers } from "./endpoints/createUsers"

export const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.post('/users', createUsers)
app.post('/post', createPost)
app.get('/posts/:id', searchPostById)
app.get('/users/:id/friendShip/:idFriendShip', friendShips)