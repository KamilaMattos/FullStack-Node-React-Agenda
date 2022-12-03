import { Request, Response } from "express"
import { listOneUserService } from "../../services/users/listOneUser.service"

export const listOneUserController = async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await listOneUserService(id)

  return res.status(200).json(user)
}
