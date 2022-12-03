import { Router } from "express"
import { createUserController } from "../controllers/users/createUser.controller"
import { deleteUserController } from "../controllers/users/deleteUser.controller"
import { listOneUserController } from "../controllers/users/listOneUser.controller"
import { listUsersController } from "../controllers/users/listUsers.controller"
import { updateUserController } from "../controllers/users/updateUser.controller"

const routes = Router()

export const userRoutes = () => {
  routes.post("", createUserController)
  routes.get("", listUsersController)
  routes.get("/:id", listOneUserController)
  routes.patch("/:id", updateUserController)
  routes.delete("/:id", deleteUserController)

  return routes
}
