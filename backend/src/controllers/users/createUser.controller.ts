import { Response, Request } from "express"
import { createUserService } from "../../services/users/cretateUser.service"

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, fone } = req.body

  const userCreated = await createUserService({ name, email, fone })

  return res.status(201).json(userCreated)
}
