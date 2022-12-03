import { Express } from "express"
import { userRoutes } from "./user.routes"
import { contactRoutes } from "./contact.routes"

export const appRoutes = (app: Express) => {
  app.use("/clients", userRoutes())
  app.use("/contacts", contactRoutes())
}
