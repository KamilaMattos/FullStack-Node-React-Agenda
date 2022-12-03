import { Router } from "express"

const routes = Router()

export const contactRoutes = () => {
  routes.post("")
  routes.get("")
  routes.get("/:id")
  routes.delete("/:id")
  routes.patch("/:id")

  return routes
}
