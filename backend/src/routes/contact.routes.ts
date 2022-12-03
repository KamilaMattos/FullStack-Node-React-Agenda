import { Router } from "express"
import { createContactController } from "../controllers/contact/createContact.controller"
import { deleteContactController } from "../controllers/contact/deleteContact.controller"
import { listContactsController } from "../controllers/contact/listContacts.controller"
import { updateContactController } from "../controllers/contact/updateContact.controller"
import { listOneContactController } from "../controllers/contact/listOneContact.controller"

const routes = Router()

export const contactRoutes = () => {
  routes.post("", createContactController)
  routes.get("", listContactsController)
  routes.get("/:id", listOneContactController)
  routes.patch("/:id", updateContactController)
  routes.delete("/:id", deleteContactController)

  return routes
}
