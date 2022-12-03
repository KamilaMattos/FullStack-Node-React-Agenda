import { Response, Request } from "express"
import { createContactService } from "../../services/contact/createContact.service"

export const createContactController = async (req: Request, res: Response) => {
  const data = req.body

  const contactCreated = await createContactService(data)

  return res.status(201).json(contactCreated)
}
