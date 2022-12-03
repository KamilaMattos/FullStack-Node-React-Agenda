import { Response, Request } from "express"
import { listContatctsService } from "../../services/contact/listContact.service"

export const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContatctsService()

  return res.json(contacts)
}
