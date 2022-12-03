import { Request, Response } from "express"
import { updateUserService } from "../../services/users/updateUser.service"

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params

  const data = req.body

  const userUpdated = await updateUserService(id, data)

  return res.json(userUpdated)
}
