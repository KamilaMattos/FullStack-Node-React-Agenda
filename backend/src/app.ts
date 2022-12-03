import express, { Request, Response } from "express"
import cors from "cors"
import { handleErrorMiddleware } from "./middlewares/errors.middleware"
import "reflect-metadata"
import "express-async-errors"
import { appRoutes } from "./routes"

const app = express()

app.use(express.json())

app.use(cors())

appRoutes(app)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello!",
  })
})

app.use(handleErrorMiddleware)

export default app
