import { Request, Response } from "express"
import { deleteUserService } from "../../services/users/deleteUser.service"

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params

  const response = await deleteUserService(id)

  return res.json(response)
}
