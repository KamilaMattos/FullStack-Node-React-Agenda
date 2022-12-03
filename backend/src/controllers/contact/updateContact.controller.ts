import { Request, Response } from "express"
import { updateContactService } from "../../services/contact/updateContact.service"

export const updateContactController = async (req: Request, res: Response) => {
  const { id } = req.params

  const data = req.body

  const contactUpdated = await updateContactService(id, data)

  return res.json(contactUpdated)
}
