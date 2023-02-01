import { usersRouter } from './routers/usersRouter';
import { friendShips } from './endpoints/friendship';
import express from "express"

import cors from 'cors'
import { postsRouter } from './routers/postsRouter';
import { followerRouter } from './routers/followerRouter';

export const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/followers', followerRouter)


