import { Request, Response } from "express"
import { listOneContactService } from "../../services/contact/listOneContact.service"

export const listOneContactController = async (req: Request, res: Response) => {
  const { id } = req.params

  const contact = await listOneContactService(id)

  return res.status(200).json(contact)
}
